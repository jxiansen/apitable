

import { createContext, useContext } from 'react';

import { useAppSelector } from 'pc/store/react-redux';

export enum SideBarType {
  User,
  UserWithoutPanel,
  Panel,
  None,
}

export enum SideBarClickType {
  User,
  ToolBar,
  FindInput,
  None,
}

export interface ISideBarContextProps {
  toggleType: SideBarType;
  clickType: SideBarClickType;
  onSetToggleType?: (toggleType: SideBarType) => void;
  onSetClickType?: (clickType: SideBarClickType) => void;
  onSetPanelVisible?: (visible: boolean) => void;
  onSetSideBarVisibleByUser?: (visible: boolean, panelVisible?: boolean) => void;
  onSetSideBarVisibleByOhter?: (visible: boolean) => void;
  newTdbId?: string;
  setNewTdbId?: (newTdbId: string) => void;
}

export const SideBarContext = createContext<ISideBarContextProps>({
  toggleType: SideBarType.None,
  clickType: SideBarClickType.None,
});

export const useSideBar = () => {
  const sideBarVisible = useAppSelector((state) => state.space.sideBarVisible);
  const { toggleType, clickType, onSetClickType, onSetToggleType, onSetPanelVisible, onSetSideBarVisibleByOhter, onSetSideBarVisibleByUser } =
    useContext(SideBarContext);

  return {
    toggleType,
    clickType,
    sideBarVisible,
    onSetClickType,
    onSetToggleType,
    onSetPanelVisible,
    onSetSideBarVisibleByOhter,
    onSetSideBarVisibleByUser,
  };
};
