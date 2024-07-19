

import classnames from 'classnames';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';
import { useThemeColors } from '@apitable/components';
import { isGif, Strings, t } from '@apitable/core';
import { AddOutlined, EditOutlined } from '@apitable/icons';
import { ICropShape, ButtonPlus } from 'pc/components/common';
import { ScreenSize } from 'pc/components/common/component_display';
import { useResponsive } from 'pc/hooks';
import { getCellValueThumbSrc } from 'pc/utils';
import { IBasePropEditorProps, IModeEnum } from '../interface';
import { UploadContainerShape, UploadContainerSize } from './enum';
import { ImgBaseUploader } from './img_base_uploader';
import styles from './style.module.less';

interface ILogoImgUploaderProps extends IBasePropEditorProps {
  logoUrl?: string;
  size?: UploadContainerSize;
  shape?: UploadContainerShape;
}

const customTips = {
  cropDesc: t(Strings.custom_upload_tip),
};

export const LogoImgUploader: React.FC<React.PropsWithChildren<ILogoImgUploaderProps>> = (props) => {
  const colors = useThemeColors();
  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);
  const {
    nodeId,
    mode,
    logoUrl,
    updateProps,
    size = isMobile ? UploadContainerSize.MobileNormal : UploadContainerSize.Normal,
    shape = UploadContainerShape.Square,
  } = props;
  const [isModalShow, setModalShow] = useState(false);
  const logoSize = isMobile ? 80 : 120;
  const logoAddIconSize = isMobile ? 16 : 32;
  const logoWrapClassName = classnames(styles.logoImgWrapper, isMobile && styles.logoWrapMobile, logoUrl && styles.notEmpty);

  const onChange = (file: any) => {
    const logoUrl = getCellValueThumbSrc(file, {
      w: logoSize * (window.devicePixelRatio || 1),
      formatToJPG: isGif({ name: file.name, type: file.mimeType }),
    });
    updateProps({ logoUrl });
  };

  return (
    <>
      {mode === IModeEnum.Edit ? (
        <div
          className={logoWrapClassName}
          style={{
            width: size,
            height: size,
            borderRadius: shape === UploadContainerShape.Square ? 8 : '50%',
          }}
        >
          <ImgBaseUploader
            nodeId={nodeId}
            visible={isModalShow}
            imgUrl={logoUrl}
            cropShape={ICropShape.Square}
            customTips={customTips}
            setVisible={setModalShow}
            onChange={onChange}
            fileLimit={2}
          >
            <div className={styles.logoImg} onClick={() => setModalShow(true)}>
              {!logoUrl && (
                <div className={classnames(styles.logoPlaceHolder, isMobile && styles.placeholderMobile)}>
                  <AddOutlined size={logoAddIconSize} color={colors.fourthLevelText} />
                  <span>{t(Strings.add_form_logo)}</span>
                </div>
              )}
              {logoUrl && <Image src={logoUrl} alt="cover" layout={'fill'} />}
              {logoUrl && (
                <div className={classnames(styles.editBtn, isMobile && styles.editBtnMobile)}>
                  <ButtonPlus.Icon size="small" onClick={() => setModalShow(true)} icon={<EditOutlined />} />
                </div>
              )}
            </div>
          </ImgBaseUploader>
        </div>
      ) : (
        logoUrl && (
          <div className={logoWrapClassName}>
            <div className={styles.logoImg}>
              <Image src={logoUrl} alt="cover" layout={'fill'} />
            </div>
          </div>
        )
      )}
    </>
  );
};
