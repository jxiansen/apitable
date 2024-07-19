import { Api, ITagsInSpace, ISubTeamListInSpaceBase, IMemberInfoInSpace, ISpaceInfo, ISpaceBasicInfo } from '@apitable/core';
// @ts-ignore
import { socialPlatPreOperate } from 'enterprise/home/social_platform/utils';

export const verifyTeamName = async (_spaceId: string, teamId: string, inputContent: string) => {
  let questRes = false;
  const {
    data: { success, data },
  } = await Api.getSubTeams(teamId);
  if (success && data.length) {
    if (data.find((item: { teamName: string }) => item.teamName === inputContent)) {
      questRes = true;
    }
  }
  return questRes;
};

// Conversion group name
export const getContent = (arr: ITagsInSpace[] | ISubTeamListInSpaceBase[], name: string) => {
  let content = '';
  if (arr) {
    arr.forEach((item: ITagsInSpace | ISubTeamListInSpaceBase, index) => {
      if (index === arr.length - 1) {
        content = content.concat(item[name]);
      } else {
        content = content.concat(item[name], ';');
      }
    });
  }
  return content;
};
export const isPrimaryOrOwnFunc = (info: IMemberInfoInSpace, userMemberId: string) => {
  return info.isPrimary || info.memberId === userMemberId;
};

export const socialPlatPreOperateCheck = (fn: () => void, spaceInfo: ISpaceInfo | ISpaceBasicInfo | null) => {
  if (!socialPlatPreOperate) {
    fn();
    return;
  }
  socialPlatPreOperate(spaceInfo, fn);
};
