

import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import * as React from 'react';
import SplitPane, { SplitPaneProps } from 'react-split-pane';
import { EmitterEventName, SimpleEmitter } from 'modules/shared/simple_emitter';
import styles from './style.module.less';

const _SplitPane: any = SplitPane;

interface IVikaSplitPanelProps extends Omit<SplitPaneProps, 'SplitPaneProps'> {
  panelLeft: JSX.Element;
  panelRight: JSX.Element;
}

export const simpleEmitter = new SimpleEmitter();

export const VikaSplitPanel: React.FC<React.PropsWithChildren<IVikaSplitPanelProps>> = memo((props) => {
  const { panelLeft, panelRight, onDragFinished, ...rest } = props;
  const [dragging, setDragging] = useState(false);
  const onDragEnd = (newSize: number) => {
    onDragFinished && onDragFinished(newSize);
    setDragging(false);
  };
  const onDragStart = () => {
    setDragging(true);
  };

  useEffect(() => {
    simpleEmitter.emit(EmitterEventName.PanelDragging, dragging);
  }, [dragging]);

  return (
    <_SplitPane
      onDragStarted={onDragStart}
      onDragFinished={onDragEnd}
      resizerClassName={classNames({
        [styles.resizeBarStyle]: true,
        [styles.isDragging]: dragging,
      })}
      {...rest}
    >
      {panelLeft}
      {panelRight}
    </_SplitPane>
  );
});
