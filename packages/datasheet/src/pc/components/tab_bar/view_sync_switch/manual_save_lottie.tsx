

import { useEffect, useRef } from 'react';
import SyncJson from 'static/json/sync.json';

const MANUAL_SAVE_SVG_ID = 'MANUAL_SAVE_SVG_ID';
export const ManualSaveLottie = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    import('lottie-web/build/player/lottie_svg').then((module) => {
      const lottie = module.default;
      lottie.loadAnimation({
        // @ts-ignore
        container: ref.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: SyncJson,
      });
    });
  }, [ref]);

  return <div ref={ref} id={MANUAL_SAVE_SVG_ID} style={{ display: 'flex' }} />;
};
