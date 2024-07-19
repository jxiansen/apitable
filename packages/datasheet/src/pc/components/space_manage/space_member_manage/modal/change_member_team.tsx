

import { FC } from 'react';
import * as React from 'react';
import { shallowEqual } from 'react-redux';
import { IReduxState, UnitItem, ITeam, ITeamsInSpace } from '@apitable/core';
import { SelectUnitModal, SelectUnitSource } from 'pc/components/catalog/permission_settings/permission/select_unit_modal';
import { useMemberManage } from 'pc/hooks';

import { useAppSelector } from 'pc/store/react-redux';

interface IAddMember {
  onCancel: () => void;
  inEditMember?: boolean;
  setTeamList?: React.Dispatch<React.SetStateAction<ITeamsInSpace[]>>;
  teamList?: ITeamsInSpace[];
}
export const ChangeMemberTeam: FC<React.PropsWithChildren<IAddMember>> = ({ onCancel, inEditMember, setTeamList, teamList }) => {
  const { selectedTeamInfoInSpace, selectMemberListInSpace } = useAppSelector(
    (state: IReduxState) => ({
      selectedTeamInfoInSpace: state.spaceMemberManage.selectedTeamInfoInSpace,
      selectMemberListInSpace: state.spaceMemberManage.selectMemberListInSpace,
    }),
    shallowEqual,
  );

  const { changeMemberTeam } = useMemberManage();
  const onSubmit = (checkedList: UnitItem[]) => {
    if (inEditMember) {
      if (setTeamList && teamList) {
        const arr: ITeamsInSpace[] = [...teamList];
        const teamListIdArr = teamList.map((item) => item.teamId);
        checkedList.forEach((item) => {
          if (teamListIdArr.includes((item as ITeam).teamId)) {
            return;
          }
          arr.push({
            teamId: (item as ITeam).teamId,
            teamName: (item as ITeam).originName || (item as ITeam).teamName,
          });
        });
        setTeamList(arr);
      }
    }
    if (!inEditMember && selectedTeamInfoInSpace && checkedList.length > 0) {
      const newTeamIds = checkedList.map((item) => (item as ITeam).teamId);
      changeMemberTeam(selectedTeamInfoInSpace ? selectedTeamInfoInSpace.teamId : '', selectMemberListInSpace, newTeamIds);
    }
  };
  const disableIdList = inEditMember ? teamList?.map((item) => (item as ITeam).teamId) : [];
  return <SelectUnitModal source={SelectUnitSource.ChangeMemberTeam} onCancel={onCancel} onSubmit={onSubmit} disableIdList={disableIdList} />;
};
