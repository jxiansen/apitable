

import { useMount } from 'ahooks';
import { useEffect, useRef, useState } from 'react';
import { Loading, Message } from '@apitable/components';
import { ConfigConstant, Api } from '@apitable/core';
import { useRoleRequest } from 'pc/hooks/use_role';
import { useAppSelector } from 'pc/store/react-redux';
import { Left } from './content/left';
import { IRightRefs, Right } from './content/right';
import { RoleContext } from './context';
import { Empty } from './empty';
import { Header } from './header';
import styles from './style.module.less';

const Role = () => {
  const [activeRoleId, setActiveRoleId] = useState<string>();
  const [activeRoleName, setActiveRoleName] = useState<string>();
  const rightRef = useRef<IRightRefs>(null);
  const manageable = useAppSelector(
    (state) => state.spacePermissionManage.spaceResource?.permissions.includes(ConfigConstant.PermissionCode.MANAGE_ROLE),
  );
  const { run: refreshRoleList, data } = useRoleRequest();
  const { isOpen, roles: roleList } = data;
  const [firstLoading, setFirstLoading] = useState<boolean>(true);

  useMount(async () => {
    await refreshRoleList();
    setFirstLoading(false);
  });

  useEffect(() => {
    if (!isOpen) {
      setActiveRoleId(undefined);
    }
  }, [isOpen]);

  const beginUse = () => {
    Api.initRoles().then((res) => {
      const { success, message } = res.data;
      if (!success) {
        Message.error({ content: message });
        return;
      }
      refreshRoleList();
    });
  };

  if (firstLoading) {
    return <Loading />;
  }

  return (
    <RoleContext.Provider
      value={{
        manageable,
        activeRoleName,
        setActiveRoleName,
        refreshMemberList: rightRef.current?.refreshMemberList,
      }}
    >
      {!isOpen || !roleList ? (
        <Empty onClick={beginUse} />
      ) : (
        <div className={styles.roleManage}>
          <Header />
          <div className={styles.roleManageContent}>
            <div className={styles.roleManageContentLeft}>
              <Left activeRoleId={activeRoleId} setActiveRoleId={setActiveRoleId} roleList={roleList} refreshRoleList={refreshRoleList} />
            </div>
            <div className={styles.roleManageContentRight}>{activeRoleId && <Right ref={rightRef} activeRoleId={activeRoleId} />}</div>
          </div>
        </div>
      )}
    </RoleContext.Provider>
  );
};

export default Role;
