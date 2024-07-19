import classNames from 'classnames';
import { useContext } from 'react';
import { Typography, useContextMenu } from '@apitable/components';
import { MoreStandOutlined, UserGroupOutlined } from '@apitable/icons';

import { RoleContext } from '../context';
import { IRoleItem } from '../interface';
import styles from './style.module.less';

export const ROLE_MENU_EDIT_ID = 'ROLE_MENU_EDIT';

export const RoleItem: React.FC<
  React.PropsWithChildren<{
    selected?: boolean;
    role: IRoleItem;
    icon?: React.ReactElement;
    onEdit?: (role: IRoleItem, roleName: string) => void;
    onDelete?: (role: IRoleItem) => void;
    onClick?: (roleId: string) => void;
  }>
> = (props) => {
  const { selected, role, icon, onEdit, onDelete, onClick } = props;
  const { roleName, roleId } = role;
  const { manageable } = useContext(RoleContext);
  const showMore = manageable && (onEdit || onDelete);
  const { show } = useContextMenu({ id: ROLE_MENU_EDIT_ID });

  return (
    <div className={classNames(styles.roleItem, selected && styles.roleItemSelected)} onClick={() => onClick && onClick(roleId)}>
      {icon ? icon : <UserGroupOutlined className={styles.roleItemIcon} size={16} />}
      <Typography className={styles.roleItemContent} ellipsis variant="body3">
        {roleName}
      </Typography>
      {showMore && (
        <div
          onClick={(e) => {
            show(e, {
              roleName,
              role,
              onEdit,
              onDelete,
            });
            e.stopPropagation();
          }}
          style={{ display: 'flex' }}
        >
          <MoreStandOutlined className={styles.roleItemIcon} size={16} />
        </div>
      )}
    </div>
  );
};
