import { FC, useState, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { IReduxState, Api, IAddIsActivedMemberInfo, UnitItem, ITeam, IMember } from '@apitable/core';
import { SelectUnitModal, SelectUnitSource } from 'pc/components/catalog/permission_settings/permission/select_unit_modal';
import { useMemberManage } from 'pc/hooks';

import { useAppSelector } from 'pc/store/react-redux';

interface IAddMember {
  onCancel: () => void;
}
export const AddMember: FC<React.PropsWithChildren<IAddMember>> = ({ onCancel }) => {
  const { selectedTeamInfoInSpace, spaceId } = useAppSelector(
    (state: IReduxState) => ({
      selectedTeamInfoInSpace: state.spaceMemberManage.selectedTeamInfoInSpace,
      spaceId: state.space.activeId || '',
    }),
    shallowEqual,
  );

  const { teamAddMember } = useMemberManage();
  // The group already has members
  const [existMemberArr, setExistMemberArr] = useState<string[]>([]);
  // Check the existing members under this group
  useEffect(() => {
    if (!selectedTeamInfoInSpace) {
      return;
    }
    Api.getTeamAndMemberWithoutSub(selectedTeamInfoInSpace.teamId).then((res) => {
      const { success, data } = res.data;
      const arr: string[] = [selectedTeamInfoInSpace.teamId];
      if (success && data.length) {
        data.forEach((item: { memberId: string }) => {
          arr.push(item.memberId);
        });
      }
      setExistMemberArr(arr);
    });
  }, [selectedTeamInfoInSpace, spaceId]);
  const onSubmit = (checkedList: UnitItem[]) => {
    const list: IAddIsActivedMemberInfo[] = [];
    checkedList.forEach((item) => {
      const isTeam = 'teamId' in item;
      const isMember = 'memberId' in item;

      if (isTeam || isMember) {
        list.push({
          id: isTeam ? (item as ITeam).teamId : (item as IMember).memberId,
          type: isTeam ? 1 : 2,
        });
      }
    });
    const teamId = selectedTeamInfoInSpace?.teamId;
    teamAddMember(teamId || '', list);
  };
  return (
    <SelectUnitModal source={SelectUnitSource.TeamAddMember} disableIdList={existMemberArr} onCancel={onCancel} onSubmit={onSubmit} maskClosable />
  );
};
