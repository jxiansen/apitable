

import * as React from 'react';
import { ContextMenu, useThemeColors } from '@apitable/components';
import { Selectors, Strings, t, UN_GROUP } from '@apitable/core';
import { AddOutlined, EditOutlined, NarrowOutlined, DeleteOutlined, EyeOpenOutlined } from '@apitable/icons';
import { useShowViewLockModal } from 'pc/components/view_lock/use_show_view_lock_modal';
import { useAppSelector } from 'pc/store/react-redux';
import { flatContextData } from 'pc/utils';

export const KANBAN_GROUP_MORE = 'KANBAN_GROUP_MORE';

export const GroupHeadMenu: React.FC<React.PropsWithChildren<unknown>> = () => {
  const { rowCreatable, fieldPropertyEditable } = useAppSelector(Selectors.getPermissions);
  const colors = useThemeColors();
  const isViewLock = useShowViewLockModal();

  return (
    <ContextMenu
      menuId={KANBAN_GROUP_MORE}
      overlay={flatContextData(
        [
          [
            {
              icon: <AddOutlined color={colors.thirdLevelText} />,
              text: t(Strings.add_kanban_group_card),
              hidden: !rowCreatable,
              onClick: ({ props: { addNewRecord } }: any) => {
                addNewRecord();
              },
            },
            {
              icon: <EditOutlined color={colors.thirdLevelText} />,
              text: t(Strings.editing_group),
              hidden(arg: any) {
                const {
                  props: { groupId },
                } = arg;

                if (!fieldPropertyEditable || groupId === UN_GROUP) {
                  return true;
                }

                return false;
              },
              onClick: ({ props: { setEditing } }: any) => {
                setEditing(true);
              },
            },
            {
              icon: <EyeOpenOutlined color={colors.thirdLevelText} />,
              text: t(Strings.hide_kanban_grouping),
              onClick: ({ props: { hideGroup } }: any) => {
                hideGroup();
              },
              disabled: isViewLock,
              disabledTip: t(Strings.view_lock_setting_desc),
            },
            {
              icon: <NarrowOutlined color={colors.thirdLevelText} />,
              text: t(Strings.collapse_kanban_group),
              onClick: ({ props: { collapseGroup } }: any) => {
                collapseGroup();
              },
            },
          ],
          [
            {
              icon: <DeleteOutlined color={colors.thirdLevelText} />,
              text: t(Strings.delete),
              hidden(arg: any) {
                const {
                  props: { groupId },
                } = arg;

                if (!fieldPropertyEditable || groupId === UN_GROUP) {
                  return true;
                }

                return false;
              },
              onClick: ({ props: { deleteGroup } }: any) => {
                deleteGroup();
              },
            },
          ],
        ],
        true,
      )}
    />
  );
};
