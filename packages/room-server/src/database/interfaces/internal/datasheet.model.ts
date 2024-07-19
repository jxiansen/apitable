import {
  IBaseDatasheetPack,
  IFieldPermissionMap,
  IGetRecords,
  IOperation,
  IRecord,
  IRecordMap,
  IRemoteChangeset,
  IServerDatasheetPack,
  ISnapshot,
  IUnitValue,
  IUserValue,
  IViewPack,
  IViewProperty,
  ResourceType,
} from '@apitable/core';
import { NodeInfo } from './node.model';
import { INamedUser } from '../../../shared/interfaces';

export class ChangesetView implements IRemoteChangeset {
  userId!: string;
  spaceId!: string;
  messageId!: string;
  revision!: number;
  resourceId!: string;
  resourceType!: ResourceType;
  operations!: IOperation[];
  createdAt!: number;
}

export class RecordsMapView implements IGetRecords {
  revision!: number;
  recordMap?: IRecordMap;
}

export class UnitInfo implements IUnitValue {
  unitId!: string;
  type!: number;
  name!: string;
  uuid?: string;
  userId?: string;
  avatar?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  nickName?: string;
  avatarColor?: number;
}

export class UserInfo implements IUserValue {
  uuid!: string;
  userId!: string;
  name!: string;
  avatar?: string;
  nickName?: string;
  avatarColor?: number;
}

export class FieldPermissionMap {
  fieldPermissionMap?: IFieldPermissionMap;
}

export class DatasheetPack extends FieldPermissionMap implements IServerDatasheetPack {
  snapshot!: ISnapshot;
  datasheet!: NodeInfo;
  foreignDatasheetMap?: { [foreignDatasheetId: string]: IBaseDatasheetPack };
  units?: (UserInfo | UnitInfo)[];
}

export class ViewPack implements IViewPack {
  view!: IViewProperty;
  revision!: number;
}

export class ArchivedRecord {
  record!: IRecord | undefined;
  archivedUser!: INamedUser | undefined;
  archivedAt!: number;
}
