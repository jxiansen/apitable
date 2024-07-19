

import { useEffect, useRef } from 'react';
import { browser } from 'modules/shared/browser';

export function useKeyboardCollapse(callback: Function) {
  const callbackRef = useRef<Function>();
  callbackRef.current = callback;
  const originHeight = useRef<number>(document.documentElement.clientHeight || document.body.clientHeight);

  useEffect(() => {
    const isAndroid = browser?.is('android');
    const handelAndroidResize = () => {
      const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
      if (originHeight.current < resizeHeight) {
        callbackRef.current?.();
      }
      originHeight.current = resizeHeight;
    };

    if (isAndroid) {
      window.addEventListener('resize', handelAndroidResize, false);
    }

    return () => {
      if (isAndroid) {
        window.removeEventListener('resize', handelAndroidResize, false);
      }
    };
  }, []);
}
