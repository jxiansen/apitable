import { Modal } from 'antd';
import FileSaver from 'file-saver';
import { useEffect } from 'react';
import { divide, StoreActions } from '@apitable/core';
import { EXPORT_BRAND_DESC_HEIGHT, EXPORT_IMAGE_PADDING, MAX_EXPORT_IMAGE_AREA_SIZE } from 'pc/components/gantt_view';
import { dispatch } from 'pc/worker/store';

interface IUseViewExportProps {
  stageRef: any;
  isExporting: boolean;
  containerWidth: number;
  containerHeight: number;
  viewName: string;
  datasheetId: string;
}

export const useViewExport = (props: IUseViewExportProps) => {
  const { stageRef, isExporting, containerWidth, containerHeight, viewName, datasheetId } = props;

  useEffect(() => {
    if (!isExporting) return;
    try {
      const pixelRatio = window.devicePixelRatio;
      const realContainerWidth = containerWidth + EXPORT_IMAGE_PADDING * 2;
      const realContainerHeight = containerHeight + EXPORT_IMAGE_PADDING * 2 + EXPORT_BRAND_DESC_HEIGHT;
      const curAreaSize = realContainerWidth * realContainerHeight * Math.pow(pixelRatio, 2);
      let scale = 1;
      if (MAX_EXPORT_IMAGE_AREA_SIZE < curAreaSize) {
        scale = Math.sqrt(divide(MAX_EXPORT_IMAGE_AREA_SIZE, curAreaSize));
      }
      stageRef.current?.scale({
        x: scale,
        y: scale,
      });
      const dataUrl = stageRef.current?.toDataURL({
        width: realContainerWidth * scale,
        height: realContainerHeight * scale,
        pixelRatio,
        imageSmoothingEnabled: false,
      });
      Modal.destroyAll();
      FileSaver.saveAs(dataUrl, `${viewName}.png`);
      window.requestAnimationFrame(() => dispatch(StoreActions.resetExportViewId(datasheetId)));
    } catch (e) {
      Modal.destroyAll();
      window.requestAnimationFrame(() => dispatch(StoreActions.resetExportViewId(datasheetId)));
    }
  }, [containerHeight, containerWidth, datasheetId, isExporting, viewName, stageRef]);
};
