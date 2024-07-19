import { IFieldPermissionMap, IRoleMember, IViewProperty } from '../../../exports/store/interfaces';
import { MemberType } from 'types';
import { ITeamData } from '../../../exports/store/interfaces';

export interface IFieldPermissionRoleListData {
  enabled: boolean;
  members: IFieldPermissionMember[];
  roles: IFieldPermissionRole[];
  setting: {
    formSheetAccessible: boolean;
  };
}

export type IFieldPermissionMember = IRoleMember & { isAdmin: boolean };

export type IFieldPermissionAdmin = IFieldPermissionRole;

export interface IFieldPermissionRole {
  avatar: string;
  canEdit: boolean;
  canRead: boolean;
  canRemove: boolean;
  memberCount: number;
  nodeManageable: boolean;
  permissionExtend: boolean;
  role: string;
  roleInvalid: boolean;
  teams: string;
  unitId: string;
  unitType: MemberType;
  unitName: string;
  isAdmin: boolean;
  isOwner: boolean;
  teamData?: ITeamData[];
  unitRefId?: string;
}

export interface IFieldPermissionResponse {
  datasheetId: string;
  fieldPermissionMap: IFieldPermissionMap;
}

export interface IFixupDstViewDataPack {
  view: IViewProperty;
  version: number;
}

export interface IGetCommentsByIdsResponse {
  [commentId: string]: any;
}

export interface ISubOrUnsubByRecordIdsReq {
  datasheetId: string;
  mirrorId?: string;
  recordIds: string[];
}

export interface IGetTreeSelectDataReq {
  spaceId: string;
  datasheetId: string;
  linkedViewId: string;
  linkedFieldIds: string[];
}

export interface ICascaderNode {
  linkedFieldId: string;
  linkedRecordId: string;
  text: string;
  children?: ICascaderNode[];
}

export interface ILinkedField {
  id: string;
  name: string;
  type: number;
}

export interface IGetTreeSelectDataRes {
  data?: {
    linkedFields: ILinkedField[];
    treeSelects: ICascaderNode[];
  };
}

export interface IGetTreeSelectSnapshotReq {
  datasheetId: string;
  fieldId: string;
  linkedFieldIds: string[];
}

export interface IGetTreeSelectSnapshotRes {
  treeSelectNodes: ICascaderNode[];
}

export interface IUpdateTreeSelectSnapshotReq {
  spaceId: string;
  datasheetId: string;
  fieldId: string;
  linkedDatasheetId: string;
  linkedViewId: string;
}

export interface ITablebundleUserInfo {
  id: string;
  uuid: string;
  avatar: string | null;
  nikeName: string;
  isSocialNameModified: number;
  color: number | null;
}

export interface IDatasheetTablebundles {
  id: string;
  tbdId: string;
  name: string;
  spaceId: string;
  dstId: string;
  statusCode: number;
  createdAt: string;
  deletedAt: string;
  createdBy: string;
  expiredAt: string;
  creatorInfo: ITablebundleUserInfo;
  deleteInfo?: ITablebundleUserInfo;
  isDeleted: boolean;
  deletedBy?: string;
  type: number;
}

export interface IRecoverDatasheetTablebundles {
  dstId: string;
  nodeName: string;
  spaceId: string;
  parentId: string;
}
