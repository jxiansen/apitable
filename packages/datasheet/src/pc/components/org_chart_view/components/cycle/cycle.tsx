import { FC, useEffect, PropsWithChildren } from 'react';
import { Typography, useThemeColors } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import ReactFlow, { Elements, PanOnScrollMode, useZoomPanHelper } from '@apitable/react-flow';
import { NodeType } from '../../constants';
import { CustomEdge } from '../custom';
import { CustomCycleEdge } from '../custom/custom_cycle_edge';
import { CycleNode } from '../custom/cycle_node';
import styles from './styles.module.less';

interface ICycle {
  elements: Elements;
}
export const Cycle: FC<PropsWithChildren<ICycle>> = ({ elements }) => {
  const colors = useThemeColors();
  const { fitView, zoomTo } = useZoomPanHelper();

  useEffect(() => {
    fitView();
    zoomTo(1);
  });

  return (
    <div className={styles.cycleFlow}>
      <Typography variant="h7">{t(Strings.org_chart_err_head)}</Typography>
      <Typography variant="body4" style={{ marginTop: 8, color: colors.fc3 }}>
        {t(Strings.org_chart_err_title)}
      </Typography>
      <ReactFlow
        elements={elements}
        panOnScroll
        zoomActivationKeyCode=""
        paneMoveable={false}
        zoomOnDoubleClick={false}
        zoomOnPinch={false}
        zoomOnScroll={false}
        nodesDraggable={false}
        preventScrolling={false}
        selectionKeyCode=""
        edgeTypes={{
          [NodeType.CustomCycleEdge]: CustomCycleEdge as any,
          [NodeType.CustomEdge]: CustomEdge as any,
        }}
        nodeTypes={{
          [NodeType.CycleNode]: CycleNode as any,
        }}
        panOnScrollSpeed={1}
        arrowHeadColor={colors.errorColor}
        onlyRenderVisibleElements
        panOnScrollMode={PanOnScrollMode.Vertical}
      />
    </div>
  );
};
