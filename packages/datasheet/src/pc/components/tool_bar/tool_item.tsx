import classNames from 'classnames';
import * as React from 'react';
import { ReactNode } from 'react';
import { Button, TextButton } from '@apitable/components';
import { WrapperTooltip } from 'pc/components/widget/widget_panel/widget_panel_header';
import { useResponsive } from 'pc/hooks';
import { ScreenSize } from '../common/component_display';
import styles from './style.module.less';

type IToolItemProps = {
  icon: ReactNode;
  text: ReactNode;
  isActive?: boolean;
  className?: string;
  onClick?(e: any): void;
  disabled?: boolean;
  id?: string;
  showLabel?: boolean;
  isHide?: boolean;
  showViewLockModal?: boolean;
};

// After adding a new tool item to the toolbar,
// you need to calculate the width of the minimum displayable icon + name. Update the threshold value here.
// The number of text positions in the toolItem will also affect the width here.
// const SHOW_TOOL_TEXT_WIDTH = 999;

export const ToolItem: React.FC<React.PropsWithChildren<IToolItemProps>> = (props) => {
  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);
  const { isActive, className, showLabel = true, disabled, onClick, icon, text, id, isHide } = props;
  const shouldShowText = isHide || showLabel || isMobile; // Label is always displayed on mobile.

  const buttonProps: any = {
    className: classNames(className, {
      [styles.pcStyle]: !isActive,
      [styles.onlyIcon]: !shouldShowText,
    }),
    disabled,
    onClick: (e: MouseEvent) => {
      onClick?.(e);
    },
    prefixIcon: icon,
    id,
    size: 'small',
    'data-test-id': id,
    style: { pointerEvents: disabled ? 'none' : 'auto', marginRight: shouldShowText ? 8 : 0 },
  };

  return (
    <WrapperTooltip wrapper={!shouldShowText && typeof text === 'string'} tip={typeof text === 'string' ? text : ''}>
      <span
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer',
          whiteSpace: 'nowrap',
          flexShrink: isMobile ? 0 : 'initial',
        }}
      >
        {isActive ? (
          <Button variant="jelly" color="primary" {...buttonProps}>
            {shouldShowText && text}
          </Button>
        ) : (
          <TextButton {...buttonProps}>{shouldShowText && text}</TextButton>
        )}
      </span>
    </WrapperTooltip>
  );
};
