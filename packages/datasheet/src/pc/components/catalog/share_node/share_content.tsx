
import { Tabs, TabsProps } from 'antd';
import cls from 'classnames';
import { compact } from 'lodash';
import { FC } from 'react';
import { Strings, t } from '@apitable/core';
import { ScreenSize } from 'pc/components/common/component_display';
import { useResponsive } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import { IShareContentProps } from './interface';
import { PermissionAndCollaborator } from './permission_and_collaborator';
import { PublicShareInviteLink } from './public_link';
import styles from './style.module.less';

export const ShareContent: FC<React.PropsWithChildren<IShareContentProps>> = ({ data, defaultActiveKey = 'Invite' }) => {
  const { screenIsAtMost } = useResponsive();
  const nodeId = data.nodeId;
  const activeNodePrivate = useAppSelector((state) =>
    state.catalogTree.treeNodesMap[nodeId]?.nodePrivate || state.catalogTree.privateTreeNodesMap[nodeId]?.nodePrivate
  );
  const isMobile = screenIsAtMost(ScreenSize.md);
  const renderTabs = () => {
    const items: TabsProps['items'] = compact([
      !activeNodePrivate && {
        key: 'Invite',
        label: t(Strings.invite),
        children: <PermissionAndCollaborator data={data} />,
      },
      {
        key: 'Publish',
        label: t(Strings.publish),
        children: <PublicShareInviteLink nodeId={data.nodeId} />,
      },
    ]);
    return <Tabs defaultActiveKey={activeNodePrivate ? 'Publish': defaultActiveKey} items={items} />;
  };

  return <div className={cls(styles.shareContent, { [styles.shareContentMobile]: isMobile })}>{renderTabs()}</div>;
};
