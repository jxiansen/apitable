

import { useState, useEffect } from 'react';
import { imageCache } from 'pc/components/konva_grid';

export interface IUseImageProps {
  url: string;
  crossOrigin?: string;
}

export interface IUseImageResults {
  image?: HTMLImageElement;
  width: number;
  height: number;
  status: string;
}

export const useImage = ({ url, crossOrigin }: IUseImageProps) => {
  const [state, setState] = useState<IUseImageResults>(() => ({
    image: undefined,
    status: 'loading',
    width: 0,
    height: 0,
  }));

  useEffect(() => {
    if (!url) return;

    // If it is loaded in the cache, it is read directly from the cache
    const img = imageCache.getImage(url);
    if (img) {
      return setState({
        image: img,
        height: img.height,
        width: img.width,
        status: 'loaded',
      });
    }

    const newImg = new Image();

    function onload() {
      setState({
        image: newImg,
        height: newImg.height,
        width: newImg.width,
        status: 'loaded',
      });
    }
    function onerror() {
      setState((prev) => ({
        ...prev,
        image: undefined,
        status: 'failed',
      }));
    }
    newImg.addEventListener('load', onload);
    newImg.addEventListener('error', onerror);

    crossOrigin && (newImg.crossOrigin = crossOrigin);
    newImg.src = url;

    return () => {
      newImg.removeEventListener('load', onload);
      newImg.removeEventListener('error', onerror);
    };
  }, [url, crossOrigin]);

  return state;
};
