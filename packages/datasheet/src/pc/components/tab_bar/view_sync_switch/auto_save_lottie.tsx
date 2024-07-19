
import { useEffect, useRef } from 'react';
import { Events, Player } from '@apitable/core';
import AutoSaveJson from 'static/json/autosave.json';

const AUTO_SAVE_SVG_ID = 'AUTO_SAVE_SVG_ID';
export const AutoSaveLottie = () => {
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
        animationData: AutoSaveJson,
      });
      Player.doTrigger(Events.view_notice_auto_save_true);
    });
  }, [ref]);

  return <div ref={ref} id={AUTO_SAVE_SVG_ID} style={{ display: 'flex' }} />;
};
