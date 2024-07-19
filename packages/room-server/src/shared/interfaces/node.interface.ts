import { NodeTypeEnum } from '../enums/node.enum';

export interface IAPINode {
  id: string;
  name: string;
  type: NodeTypeEnum;
  icon: string; // emoji id
  isFav: boolean;
  permission?: number;
}

export interface IAPIFolderNode extends IAPINode {
  children: IAPINode[];
}

export interface IAPINodeInfo {
  id: string;
  name: string;
  type: NodeTypeEnum;
  icon: string;
  parentId?: string;
  isFav: boolean;
  permission: number;
}

export type IAPINodeDetail = IAPINode | IAPIFolderNode;
