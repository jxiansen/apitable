import { TooltipPlacement } from 'antd/lib/tooltip';
import * as React from 'react';
import { ITheme } from '@apitable/components';
import { ICell } from '@apitable/core';
import { CellBound, ICellScrollState, IScrollHandler } from 'pc/components/gantt_view';

export interface ITooltipInfo {
  title: JSX.Element | string;
  width: number;
  height: number;
  x: number;
  y: number;
  rowIndex: number;
  columnIndex: number;
  visible: boolean;
  placement: TooltipPlacement;
  /**
   * Whether to enable coordinate system for positioning
   */
  coordXEnable?: boolean;
  coordYEnable?: boolean;
  rowsNumber?: number;
}

export interface IDraggingOutlineInfoProps {
  rowIndex: number;
  columnIndex: number;
}

export interface IKonvaGridContext {
  theme: ITheme;
  activeNodePrivate?: boolean;
  tooltipInfo: ITooltipInfo;
  setTooltipInfo: (info: Partial<ITooltipInfo>) => void;
  clearTooltipInfo: () => void;
  activeCellBound: CellBound;
  setActiveCellBound: (cellBound: Partial<CellBound>) => void;
  scrollTo: (params: { scrollTop?: number; scrollLeft?: number }) => void;
  scrollToItem: (params: { rowIndex?: number; columnIndex?: number }) => void;
  onEditorPosition: (activeCell?: ICell) => void | undefined;
  setMouseStyle: (mouseStyle: string) => void;
  isCellDown: boolean;
  setCellDown: (isDown: boolean) => void;
  draggingOutlineInfo: IDraggingOutlineInfoProps | null;
  setDraggingOutlineInfo: (props: IDraggingOutlineInfoProps | null) => void;
  cellScrollState: ICellScrollState;
  setCellScrollState: (state: Partial<ICellScrollState>) => void;
  resetCellScroll: Function;
  scrollHandler: IScrollHandler;
  isMobile?: boolean;
  isTouchDevice?: boolean;
  canAppendRow: boolean;
  onSetCanAppendRow: React.Dispatch<React.SetStateAction<boolean>>;
  activeUrlAction: boolean;
  setActiveUrlAction: React.Dispatch<React.SetStateAction<boolean>>;
}

export const KonvaGridContext = React.createContext({} as IKonvaGridContext);
