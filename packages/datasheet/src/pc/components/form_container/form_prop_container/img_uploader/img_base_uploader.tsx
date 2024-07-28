import { Spin } from 'antd';
import classnames from 'classnames';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';
import { Strings, t } from '@apitable/core';
import { uploadAttachToS3, UploadType } from '@apitable/widget-sdk';
import { ICropShape, ICustomTip, ImageCropUpload, IPreviewShape, ISelectInfo, Message } from 'pc/components/common';
import EmptyState from 'static/icon/datasheet/emptystates.png';
import styles from './style.module.less';

export enum IFileType {
  Default = 'Default',
  Custom = 'Custom',
}

interface IImgBaseUploader {
  nodeId: string;
  visible: boolean;
  imgUrl: string | undefined;
  fileLimit?: number;
  cropShape: ICropShape;
  customTips?: ICustomTip;
  officialImgs?: string[];
  previewShape?: IPreviewShape;
  setVisible: (visible: boolean) => void;
  onChange: (file: any, type: IFileType) => void;
}

export const ImgBaseUploader: React.FC<React.PropsWithChildren<IImgBaseUploader>> = (props) => {
  const {
    nodeId,
    visible,
    imgUrl,
    cropShape,
    officialImgs,
    customTips = {},
    onChange,
    setVisible,
    previewShape = IPreviewShape.Square,
    fileLimit,
  } = props;
  const [coverLoading, setCoverLoading] = useState(false);

  const uploadCoverImg = (file: File) => {
    if (!nodeId) return false;
    setCoverLoading(true);
    uploadFile(file, nodeId);
    return false;
  };

  const uploadFile = (file: File, nodeId: string) => {
    return uploadAttachToS3({
      file: file,
      fileType: UploadType.CoverImage,
      nodeId,
    }).then((res) => {
      const { success, data } = res.data;
      if (success) {
        onChange(data, IFileType.Custom);
      } else {
        Message.error({ content: t(Strings.message_upload_img_failed) });
      }
      setCoverLoading(false);
    });
  };

  const uploadConfirm = (data: ISelectInfo) => {
    const { customFile, officialToken } = data;
    if (officialToken) {
      onChange(officialToken, IFileType.Default);
      return;
    }
    if (customFile) {
      uploadCoverImg(customFile as File);
    }
  };

  const previewImgConfig =
    previewShape === IPreviewShape.Square
      ? {
          width: 200,
          height: 200,
        }
      : {
          width: 210,
          height: 70,
        };

  return (
    <div className={styles.uploadContainer}>
      <Spin spinning={coverLoading}>{props.children}</Spin>
      <ImageCropUpload
        visible={visible}
        initPreview={
          <div
            className={classnames(styles.initPreview, {
              [styles.initBorder]: imgUrl,
              [styles.initBackground]: !imgUrl,
            })}
          >
            {imgUrl ? (
              <span style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <Image src={imgUrl} alt="banner" {...previewImgConfig} />
              </span>
            ) : (
              <Image src={EmptyState} alt="empty" width={106} height={80} />
            )}
          </div>
        }
        cropShape={cropShape}
        previewShape={previewShape}
        customTips={customTips}
        officialImgs={officialImgs}
        cancel={() => setVisible(false)}
        confirm={(data) => uploadConfirm(data)}
        fileLimit={fileLimit}
      />
    </div>
  );
};
