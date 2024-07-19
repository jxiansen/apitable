

import { shallowEqual } from 'react-redux';
import { getImageThumbSrc, Strings, t } from '@apitable/core';
import { uploadAttachToS3, UploadType } from '@apitable/widget-sdk';
import { Message } from 'pc/components/common/message/message';
import { joinPath } from 'pc/components/route_manager/helper';
import { useAppSelector } from 'pc/store/react-redux';
import { getEnvVariables } from 'pc/utils/env';
import { UploadManager } from '../utils/upload_manager';

export const useImageUpload = () => {
  const { folderId, datasheetId } = useAppSelector((state) => {
    const { folderId, datasheetId } = state.pageParams;
    return { folderId, datasheetId };
  }, shallowEqual);

  const uploadImage = (file: File) => {
    if (UploadManager.checkFileSize(file)) {
      Message.warning({ content: t(Strings.message_file_size_out_of_upperbound) });
      return Promise.reject('size error');
    }
    const fd = UploadManager.generateFormData(file, folderId || datasheetId!, '4');
    const type = file.type || '';
    const isSvgOrGif = /(svg|gif)/i.test(type);
    return uploadAttachToS3({
      file: fd.get('file')! as File,
      nodeId: folderId || datasheetId!,
      fileType: UploadType.NodeDesc,
    }).then((res) => {
      const {
        data: { data: imgData, success, message },
      } = res;
      if (!success) {
        Message.warning({ content: message });
        return Promise.reject(message);
      }
      const { bucket, token } = imgData;
      const host = getEnvVariables()[bucket];
      return Promise.resolve({
        imgUrl: getImageThumbSrc(joinPath([host, token]), isSvgOrGif ? undefined : { format: 'jpg', quality: 100 }),
      });
    });
  };

  return { uploadImage };
};
