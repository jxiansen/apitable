import * as actions from '../action_constants';

export interface IEmbedInfo {
  viewControl?: {
    viewId?: string;
    tabBar?: boolean;
    titleBar?: boolean;
    nodeInfoBar?: boolean;
    collaboratorStatusBar?: boolean;
    toolBar: {
      shareBtn?: boolean;
      widgetBtn?: boolean;
      apiBtn?: boolean;
      formBtn?: boolean;
      historyBtn?: boolean;
      robotBtn?: boolean;
      addWidgetBtn?: boolean;
      fullScreenBtn?: boolean;
      formSettingBtn?: boolean;
    };
  };
  primarySideBar?: boolean;
  bannerLogo?: boolean;
  spaceId?: string;
  permissionType?: PermissionType;
  isShowEmbedToolBar?: boolean;
  viewManualSave?: boolean;
}

export enum PermissionType {
  READONLY = 'readOnly',
  PUBLICEDIT = 'publicEdit',
  PRIVATEEDIT = 'privateEdit',
}

export interface IEmbedInfoAction {
  type: typeof actions.SET_EMBED_INFO;
  payload: IEmbedInfo;
}
