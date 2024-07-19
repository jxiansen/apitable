

import * as React from 'react';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { Api, ConfigConstant, IReduxState, MAX_NAME_STRING_LENGTH, StoreActions, Strings, t } from '@apitable/core';
import { Message } from 'pc/components/common';
import { WithTipTextInput } from 'pc/components/common/input/with_tip_input';
import { NormalModal } from 'pc/components/common/modal/normal_modal';
import { useAppDispatch } from 'pc/hooks/use_app_dispatch';
import { useAppSelector } from 'pc/store/react-redux';
import { verifyTeamName } from '../../utils';

interface IModalProps {
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const RenameTeamModal: FC<React.PropsWithChildren<IModalProps>> = (props) => {
  const dispatch = useAppDispatch();
  const [err, setErr] = useState('');
  const { spaceId, user, rightClickTeamInfoInSpace } = useAppSelector(
    (state: IReduxState) => ({
      spaceId: state.space.activeId || '',
      rightClickTeamInfoInSpace: state.spaceMemberManage.rightClickTeamInfoInSpace,
      user: state.user.info,
    }),
    shallowEqual,
  );
  const [inputContent, setInputContent] = useState(rightClickTeamInfoInSpace.teamTitle);

  const handleOk = () => {
    if (inputContent.length > MAX_NAME_STRING_LENGTH) {
      setErr(t(Strings.team_length_err));
      return;
    }
    const { teamId, parentId } = rightClickTeamInfoInSpace;
    const parent = parentId ? parentId : ConfigConstant.ROOT_TEAM_ID;
    verifyTeamName(spaceId, parent, inputContent).then((res) => {
      if (res) {
        setErr(t(Strings.team_is_exist_err));
      } else {
        Api.updateTeamInfo(teamId, parent, inputContent).then((res) => {
          const { success } = res.data;
          if (success) {
            if (parentId) {
              dispatch(StoreActions.getSubTeam(parentId));
            } else {
              dispatch(StoreActions.getTeamListData(user!));
            }
            props.setModalVisible(false);
            Message.success({ content: t(Strings.rename_team_success) });
          } else {
            Message.error({ content: t(Strings.rename_team_fail) });
          }
        });
      }
    });
  };
  const handleCancel = () => {
    props.setModalVisible(false);
  };

  return (
    <NormalModal
      title={t(Strings.rename_team)}
      onCancel={handleCancel}
      onOk={handleOk}
      okButtonProps={{ disabled: !inputContent || inputContent === rightClickTeamInfoInSpace.teamTitle }}
      maskClosable
    >
      <WithTipTextInput
        value={inputContent}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputContent(e.target.value)}
        error={Boolean(err)}
        helperText={err}
        block
      />
    </NormalModal>
  );
};
