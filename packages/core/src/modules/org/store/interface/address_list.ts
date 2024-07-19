import * as actions from '../../../shared/store/action_constants';
import { ITeamTreeNode } from './invite';

export interface IUpdateTeamListAction {
  type: typeof actions.UPDATE_TEAM_LIST;
  payload: ITeamTreeNode[];
}
export interface IUpdateMemberListAction {
  type: typeof actions.UPDATE_MEMBER_LIST;
  payload: IMemberInfoInAddressList[];
}

export interface IUpdateSelectedTeamInfoAction {
  type: typeof actions.UPDATE_SELECTED_TEAM_INFO;
  payload: ISelectedTeamInfo;
}

export interface IUpdateMemberInfoAction {
  type: typeof actions.UPDATE_MEMBER_INFO;
  payload: Partial<IMemberInfoInAddressList>;
}

export interface IUpdateSingleMemberInMemberListAction {
  type: typeof actions.UPDATE_SINGLE_MEMBER_IN_MEMBERLIST;
  payload: Partial<IMemberInfoInAddressList>;
}

export interface IUpdateAddressTreeAction {
  type: typeof actions.UPDATE_ADDRESS_TREE;
  payload: { parentId: string; childrenTree: ITeamTreeNode[] };
}

export interface IUpdateMemberListPageNoAction {
  type: typeof actions.UPDATE_MEMBER_LIST_PAGE_NO;
  payload: number;
}

export interface IUpdateMemberListTotalAction {
  type: typeof actions.UPDATE_MEMBER_LIST_TOTAL;
  payload: number;
}

export interface IUpdateMemberListLodingAction {
  type: typeof actions.UPDATE_MEMBER_LIST_LOADING;
  payload: boolean;
}

export interface IUpdateMemberListPageAction {
  type: typeof actions.UPDATE_MEMBER_LIST_PAGE;
  payload: IMemberInfoInAddressList[];
}

export interface ITeamData {
  teamId: string;
  fullHierarchyTeamName?: string;
}

/**
 * member info
 */
export interface IMemberInfoInAddressList {
  memberId: string;
  email: string;
  mobile?: string;
  memberName?: string;
  isMemberNameModified?: boolean;
  jobNumber?: string;
  createdAt?: string;
  updatedAt?: string;
  operate?: string;
  position?: string;
  isAdmin?: boolean;
  isMainAdmin?: boolean;
  avatar?: string;
  avatarColor?: number;
  nickName?: string;
  isActive?: string;
  teamData?: ITeamData[];
  isPrimary?: boolean;
  isSubAdmin?: boolean;
  role?: string;
}

export interface IAddressList {
  teamList: ITeamTreeNode[] | [];
  memberList: IMemberInfoInAddressList[];
  selectedTeamInfo: ISelectedTeamInfo;
  memberInfo: IMemberInfoInAddressList;
  memberListPageNo: number;
  memberListTotal: number;
  memberListLoading: boolean;
}

export interface ISelectedTeamInfo {
  teamTitle: string;
  memberCount?: number;
  teamId: string;
}
/**
 * search result - team
 */
export interface ITeamsInSearch {
  teamId: string;
  teamName: string;
  parentName: string;
  shortName: string;
  originName: string;
}
/**
 * search result - member
 */
export interface IMembersInSearch {
  memberId: string;
  memberName: string;
  avatar: string;
  team: string;
  originName: string;
  teamData: ITeamData[];
  isMemberNameModified?: boolean;
}
