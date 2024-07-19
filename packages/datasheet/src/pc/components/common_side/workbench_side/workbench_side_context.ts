import * as React from 'react';
import { IRightClickInfo } from '@apitable/core';

export interface IWorkbenchSideContext {
  rightClickInfo: IRightClickInfo | null;
  setRightClickInfo: React.Dispatch<React.SetStateAction<IRightClickInfo | null>>;
  openFavorite: () => void;
  onSetContextMenu: (e: React.MouseEvent<HTMLElement>) => void;
}

export const WorkbenchSideContext = React.createContext({} as IWorkbenchSideContext);
