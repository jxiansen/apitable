

import { useHover } from 'ahooks';
import { FC } from 'react';
import * as React from 'react';
// eslint-disable-next-line no-restricted-imports
import { Scrollbars } from 'react-custom-scrollbars';

interface ICustomScrollbarsProps {
  onScroll?: (e: any) => void;
  style?: React.CSSProperties;
  autoHide?: boolean;
}

export const ScrollBar: FC<React.PropsWithChildren<ICustomScrollbarsProps>> = (props) => {
  const { autoHide = true } = props;
  const ref = React.useRef(null);
  const isHovering = useHover(ref);

  const renderThumb = ({ style, ...props }: any) => {
    const thumbStyle = {
      borderRadius: 6,
      zIndex: 1,
      opacity: !autoHide || isHovering ? '1' : '0',
      background: 'var(--bgScrollbarDefault)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  return (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      autoHideTimeout={500}
      autoHideDuration={200}
      autoHide={autoHide}
      {...props}
    >
      <div ref={ref} style={props.style}>
        {props.children}
      </div>
    </Scrollbars>
  );
};
