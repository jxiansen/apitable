

import * as actions from '../../../shared/store/action_constants';

export interface IShareNodeTree {
  nodeId: string;
  nodeName: string;
  icon: string;
  type: number;
  children: any[];
  nodePrivate: boolean;
}

export interface IShareInfo {
  allowApply?: boolean;
  allowEdit?: boolean;
  allowSaved?: boolean;
  hasLogin?: boolean;
  isDeleted?: boolean;
  lastModifiedAvatar?: string;
  lastModifiedBy?: string;
  shareId?: string;
  shareNodeTree?: IShareNodeTree;
  spaceId?: string | null;
  spaceName?: string;
  allowCopyDataToExternal?: string;
  allowDownloadAttachment?: string;
  featureViewManualSave?: boolean
}

export interface IShareInfoAction {
  type: typeof actions.SET_SHARE_INFO;
  payload: IShareInfo;
}
