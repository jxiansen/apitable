import { useMemo } from 'react';
import { useThemeColors } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { DeleteFilled, FolderNormalFilled, LockFilled, UserAdminFilled } from '@apitable/icons';
import { IHooksParams, IMultiLineItemProps } from '../interface';
import { calcPercent } from './utils';

export const useOthers = ({ spaceInfo, subscription }: IHooksParams): IMultiLineItemProps[] => {
  const colors = useThemeColors();
  return useMemo(() => {
    return [
      {
        unit: t(Strings.unit_ge),
        total: subscription?.fieldPermissionNums,
        used: spaceInfo?.fieldRoleNums,
        name: t(Strings.field_permission),
        icon: <LockFilled color={colors.black[500]} />,
        percent: calcPercent(spaceInfo?.fieldRoleNums, subscription?.fieldPermissionNums),
        showProgress: false,
      },
      {
        unit: t(Strings.unit_ge),
        total: subscription?.nodePermissionNums,
        used: spaceInfo?.nodeRoleNums,
        name: t(Strings.node_permission),
        icon: <FolderNormalFilled color={colors.black[500]} />,
        percent: calcPercent(spaceInfo?.nodeRoleNums, subscription?.nodePermissionNums),
        showProgress: false,
      },
      {
        unit: t(Strings.unit_ge),
        total: subscription?.maxAdminNums,
        used: spaceInfo?.adminNums,
        name: t(Strings.admins_per_space),
        icon: <UserAdminFilled color={colors.black[500]} />,
        percent: calcPercent(spaceInfo?.adminNums, subscription?.maxAdminNums),
        showProgress: false,
      },
      {
        unit: t(Strings.unit_ge),
        total: subscription?.maxWidgetNums,
        used: spaceInfo?.widgetNums,
        name: t(Strings.widget_per_space),
        icon: <UserAdminFilled color={colors.black[500]} />,
        percent: calcPercent(spaceInfo?.widgetNums, subscription?.maxWidgetNums),
        showProgress: false,
      },
      {
        unit: t(Strings.unit_ge),
        total: 0,
        used: 0,
        name: t(Strings.trash),
        icon: <DeleteFilled color={colors.black[500]} />,
        showProgress: false,
        customIntro: (
          <span style={{ color: colors.fc2 }}>
            {t(Strings.dating_back_to)}{' '}
            <span
              style={{
                color: colors.fc1,
                fontFamily: 'BebasNeue',
                letterSpacing: '0.5px',
                fontSize: 24,
              }}
            >
              {subscription?.maxRemainTrashDays}
            </span>{' '}
            {t(Strings.end_day)}
          </span>
        ),
      },
    ];
  }, [spaceInfo, subscription, colors]);
};
