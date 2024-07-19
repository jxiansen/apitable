

import * as React from 'react';
import { MemberType, Strings, t, IMember, ISpaceInfo, ISpaceBasicInfo, UnitItem } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { generateUserInfo } from 'pc/utils';
import { UnitTag } from './unit_tag';
// @ts-ignore
import { getSocialWecomUnitName } from 'enterprise/home/social_platform/utils';
import { SelectUnitSource } from '.';
import styles from './style.module.less';

interface ISelectUnitRightProps {
  source?: SelectUnitSource;
  checkedList: UnitItem[];
  cancelCheck(unitId: string): void;
  spaceInfo?: ISpaceInfo | ISpaceBasicInfo | null;
}

export const SelectUnitRight: React.FC<React.PropsWithChildren<ISelectUnitRightProps>> = (props) => {
  const { source, checkedList, cancelCheck, spaceInfo: wecomSpaceInfo = null } = props;
  const spaceInfo = useAppSelector((state) => state.space.curSpaceInfo) || wecomSpaceInfo;
  return (
    <div className={styles.right}>
      <div className={styles.title}>{t(Strings.selected)}</div>
      <div className={styles.listWrapper}>
        <div className={styles.list}>
          {checkedList.map((item) => {
            let userInfo;
            // Compatible with the selected IMemberValue passed in
            if (source === 'member' && 'type' in item && 'name' in item) {
              const title =
                getSocialWecomUnitName?.({
                  name: item['name'],
                  isModified: item['isMemberNameModified'],
                  spaceInfo,
                }) || item['name'];
              userInfo = {
                avatar: item['avatar'],
                name: item['name'],
                nickName: item['nickName'],
                avatarColor: item['avatarColor'],
                isTeam: item['type'] === MemberType.Team,
                title,
              };
            } else {
              userInfo = generateUserInfo(item, spaceInfo);
            }

            const isLeave = !userInfo.isTeam && (!(item as IMember).isActive || (item as IMember).isDeleted);
            return (
              <UnitTag
                unitId={item.unitId}
                key={item.unitId}
                className={styles.item}
                avatar={userInfo.avatar}
                avatarColor={userInfo.avatarColor}
                name={userInfo.name}
                nickName={userInfo.nickName}
                title={userInfo.title}
                isTeam={userInfo.isTeam}
                onClose={cancelCheck}
                isLeave={isLeave}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
