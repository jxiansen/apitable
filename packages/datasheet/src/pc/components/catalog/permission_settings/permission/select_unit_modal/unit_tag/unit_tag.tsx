import classNames from 'classnames';
import { FC } from 'react';
import { CloseOutlined } from '@apitable/icons';
import { Avatar, AvatarSize, AvatarType } from 'pc/components/common/avatar/avatar';
import styles from './style.module.less';

export interface IUnitTagProps {
  unitId: string;
  avatar: string;
  name: string;
  nickName?: string;
  avatarColor?: number | null;
  title?: string | JSX.Element;
  isTeam?: boolean;
  className?: string;
  deletable?: boolean;
  onClose?: (id: string) => void;
  isLeave?: boolean;
  maxWidth?: number;
}

export const UnitTag: FC<React.PropsWithChildren<IUnitTagProps>> = (props) => {
  const { deletable = true, avatar, avatarColor, nickName, name, isTeam = false, onClose, unitId, isLeave, title, maxWidth } = props;
  return (
    <div className={classNames(styles.unitTag, props.className, { [styles.isLeave]: isLeave })}>
      <div className={classNames([styles.wrapper, isTeam ? styles.rect : styles.circle])}>
        <Avatar
          id={unitId}
          src={avatar}
          avatarColor={avatarColor}
          title={nickName || name}
          size={AvatarSize.Size20}
          type={isTeam ? AvatarType.Team : AvatarType.Member}
        />
        <div className={styles.name} style={{ maxWidth }}>
          {title || name}
        </div>
        {deletable && <CloseOutlined className={styles.closeBtn} size={8} onClick={() => onClose && onClose(unitId)} />}
      </div>
    </div>
  );
};
