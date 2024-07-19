

import { CloseOutlined } from '@apitable/icons';
import { useKeyPress, useUnmount } from 'ahooks';
import { Box } from 'components/box';
import { IconButton } from 'components/icon_button';
import { TextButton } from 'components/text_button';
import { Typography } from 'components/typography';
import { getScrollbarWidth, hasScrollbar, stopPropagation } from 'helper';
import React, { useEffect, useState } from 'react';
import { Button } from '../../button';
import { IModalProps } from '../interface';
import { CloseIconBox, ModalContent, ModalContentWrapper, ModalHeader, ModalMask, ModalWrapper } from '../styled';
import Portal from './portal';

export const noop = () => { };

let triggerPosition: { x: number, y: number } | null = null;

const getPosition = (e: MouseEvent) => {
  triggerPosition = {
    x: e.pageX,
    y: e.pageY,
  };
  setTimeout(() => {
    triggerPosition = null;
  }, 100);
};

export const ModalBase: React.FC<React.PropsWithChildren<IModalProps>> = (props) => {

  const {
    className,
    contentClassName,
    title,
    renderTitle,
    footer,
    visible,
    closable = true,
    onCancel = noop,
    onOk = noop,
    maskClosable = true,
    centered,
    width,
    zIndex,
    getContainer,
    modalRender = (child: React.ReactElement) => child,
    bodyStyle,
    destroyOnClose = true,
    okButtonProps,
    isCloseable,
    cancelButtonProps,
  } = props;

  const [displayNone, setDisplayNone] = useState(props.visible);

  useEffect(()=>{
    document?.addEventListener('click', getPosition, true);
  },[]);

  const initialBodyStyle = {
    width: document.body.style.width,
    overflow: document.body.style.overflow,
  };

  const setBodyStyle = (width: string, overflow: string) => {
    document.body.style.overflow = overflow;
    document.body.style.width = width;
  };

  const handleCancel = async() => {
    if(isCloseable == null) {
      setBodyStyle(initialBodyStyle.width, initialBodyStyle.overflow);
      onCancel();
      if (!destroyOnClose) {
        setDisplayNone(true);
      }
      return;
    }
    const res = await isCloseable();
    if(res) {
      setBodyStyle(initialBodyStyle.width, initialBodyStyle.overflow);
      onCancel();
      if (!destroyOnClose) {
        setDisplayNone(true);
      }
    }
  };

  useKeyPress('Esc', handleCancel);

  useEffect(() => {
    if (displayNone && !visible) {
      setBodyStyle(initialBodyStyle.width, initialBodyStyle.overflow);
    }
    // eslint-disable-next-line
  }, [displayNone, visible]);

  useUnmount(() => {
    setBodyStyle(initialBodyStyle.width, initialBodyStyle.overflow);
  });

  let container: HTMLElement = document.body;

  if (getContainer) {
    if (typeof getContainer === 'function') {
      container = getContainer();
    }
    if (
      typeof getContainer === 'object' &&
      getContainer instanceof window.HTMLElement
    ) {
      container = getContainer;
    }
  }

  const computedVisible = visible || displayNone;

  if (!computedVisible) {
    return null;
  }

  const DefaultButtonGroup = (
    <Box
      display='flex'
      justifyContent='flex-end'
      alignItems='center'
      padding={24}
    >
      <TextButton
        {...cancelButtonProps}
        onClick={handleCancel}
        style={{
          height: 40,
          padding: '9px 16px'
        }}
      >
        {props.cancelText || 'Cancel'}
      </TextButton>
      <div style={{ marginRight: 8 }} />
      <Button
        {...okButtonProps}
        color='primary'
        onClick={onOk}
      >
        {props.okText || 'Confirm'}
      </Button>
    </Box>
  );

  const DefaultCloseIcon = (
    <CloseIconBox onClick={handleCancel}>
      <IconButton icon={CloseOutlined} />
    </CloseIconBox>
  );

  if (hasScrollbar()) {
    setBodyStyle(`calc(100% - ${getScrollbarWidth()}px)`, 'hidden');
  }

  return (
    <Portal getContainer={container}>
      <Box
        style={
          (displayNone && !visible)
            ? { display: 'none' }
            : undefined
        }
      >
        <ModalMask
          zIndex={zIndex}
        />
        <ModalWrapper
          centered={centered}

          zIndex={zIndex}
          onClick={() => {
            if (maskClosable) {
              handleCancel();
            }
          }}
          tabIndex={-1}
          role='dialog'
          style={{
            transformOrigin: `
              ${triggerPosition?.x}px
              ${triggerPosition?.y}px
            `
          }}
        >
          <ModalContentWrapper
            centered={centered}
            width={width}
            className={className}
          >
            {modalRender(
              <ModalContent
                className={contentClassName}
                onClick={stopPropagation}
              >
                {closable && DefaultCloseIcon}

                {renderTitle ? renderTitle : (
                  <>
                    {
                      <ModalHeader>
                        <Typography variant='h6'>{title}</Typography>
                      </ModalHeader>
                    }
                  </>
                )}

                <Box padding={'0 24px'} style={bodyStyle}>
                  {props.children}
                </Box>

                {(footer === undefined)
                  ? DefaultButtonGroup
                  : (footer !== null) && footer
                }
              </ModalContent>)}
          </ModalContentWrapper>
        </ModalWrapper>
      </Box>
    </Portal>
  );
};
