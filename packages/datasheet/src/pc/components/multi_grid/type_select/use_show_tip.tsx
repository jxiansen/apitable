

import { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './styles.module.less';

export const useShowTip = (container: HTMLElement, tipWidth: number) => {
  const [info, setInfo] = useState({
    top: 0,
    title: '',
    desc: '',
  });

  const { left } = useMemo(() => {
    if (!container) return { left: 0 };
    const rect = container.getBoundingClientRect();
    const clientWidth = window.innerWidth;
    const containerRight = rect.right;
    const containerLeft = rect.left;
    if (containerRight + tipWidth > clientWidth) {
      return {
        left: containerLeft - tipWidth,
      };
    }
    return {
      left: containerRight,
    };
    // eslint-disable-next-line
  }, [container]);

  useEffect(() => {
    let root: any;

    function unMountDiv() {
      root?.unmount();
      const dom = document.querySelector('.vika-type-select-tip');
      dom && document.body.removeChild(dom);
    }

    unMountDiv();

    if (info.top) {
      const div = document.createElement('div');
      div.setAttribute('class', 'vika-type-select-tip');
      div.setAttribute('style', `top:${info.top}px;left:${left}px;position:fixed;z-index:1100;`);
      document.body.appendChild(div);
      root = createRoot(div);
      root.render(
        <div className={styles.tip}>
          <h3>{info.title}</h3>
          <p>{info.desc}</p>
        </div>,
      );
    }
    return () => {
      unMountDiv();
    };
    // eslint-disable-next-line
  }, [info, left]);

  return {
    setInfo,
  };
};
