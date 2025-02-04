import { useCallback, useEffect, useRef, useState } from 'react';
import { ITransFormInfo, ITranslatePosition } from 'pc/components/preview_file/preview_file.interface';
import { isWindowsOS } from 'pc/utils/os';
import { MouseDownType } from '../../../../multi_grid';
import getFixedState from '../get_fixed_state';

interface IImageEventsProps {
  imageEle: HTMLImageElement;
  wrapperEle: HTMLDivElement;
  transformInfo: ITransFormInfo;
  setTransformInfo: (transformInfo: ITransFormInfo, immediately?: boolean) => void;
  scale: number;
  isRotated: boolean;
}

type ISize = {
  [x: string]: number;
};

interface IOriginPosition {
  pageX: number;
  pageY: number;
}

const originPosition: IOriginPosition = {
  pageX: 0,
  pageY: 0,
};

export const useEvents = (props: IImageEventsProps) => {
  const { imageEle, wrapperEle, scale, transformInfo, setTransformInfo, isRotated } = props;

  const { translatePosition } = transformInfo;

  const [moving, setMoving] = useState(false);

  const [overflow, setOverflow] = useState(false);

  const originPositionRef = useRef<IOriginPosition>(originPosition);

  const getSize = (): ISize => {
    let width = imageEle.offsetWidth * scale;
    let height = imageEle.offsetHeight * scale;

    if (isRotated) {
      [width, height] = [height, width];
    }

    const containerWidth = wrapperEle.offsetWidth;
    const containerHeight = wrapperEle.offsetHeight;

    return {
      width,
      height,
      containerWidth,
      containerHeight,
    };
  };

  const setTranslatePosition = useCallback(
    (position: ITranslatePosition) => {
      const { width, height, containerWidth, containerHeight } = getSize();

      // Do the processing of the boundary case and return the corrected result
      const revisedState = getFixedState(width, height, position.x, position.y, containerWidth, containerHeight);

      setTransformInfo({
        ...transformInfo,
        translatePosition: revisedState as any,
      });
    },
    // eslint-disable-next-line
    [setTransformInfo, transformInfo],
  );

  const handleWheel = (event: WheelEvent) => {
    if (!imageEle || !wrapperEle) {
      return;
    }

    const deltaX = event.shiftKey && isWindowsOS() ? event.deltaY : event.deltaX;
    const deltaY = event.shiftKey && isWindowsOS() ? 0 : event.deltaY;

    const x = translatePosition.x - deltaX;
    const y = translatePosition.y - deltaY;
    setTranslatePosition({ x, y });
  };

  const handleMouseDown = (event: MouseEvent) => {
    if (event.button !== MouseDownType.Left) {
      return;
    }
    const container = document.querySelector('.previewWrapperContainer');
    if (container && !container.contains(event.target as Node)) {
      return;
    }
    setMoving(true);
    const { pageX, pageY } = event;
    originPositionRef.current = {
      pageX: pageX - translatePosition.x,
      pageY: pageY - translatePosition.y,
    };
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (moving && imageEle && wrapperEle) {
      const { pageX, pageY } = event;

      const x = pageX - originPositionRef.current.pageX;
      const y = pageY - originPositionRef.current.pageY;
      setTranslatePosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    setMoving(false);
  };

  useEffect(() => {
    document.addEventListener('wheel', handleWheel);
    window.addEventListener('mousedown', handleMouseDown, true);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousedown', handleMouseDown, true);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  });

  useEffect(() => {
    if (!imageEle || !wrapperEle) {
      return;
    }
    const { width, height, containerWidth, containerHeight } = getSize();
    if (width > containerWidth || height > containerHeight) {
      setOverflow(true);
    } else {
      setOverflow(false);
    }
    // eslint-disable-next-line
  }, [scale, isRotated]);

  return {
    overflow,
  };
};
