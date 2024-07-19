

import { Space } from 'antd';
import { FC } from 'react';
import { useThemeColors } from '@apitable/components';
import { INodesMapItem, Strings, t } from '@apitable/core';
import { Tag } from 'pc/components/common';
import { getNodeIcon } from '../tree/node_icon';
import styles from './style.module.less';

export interface IContextMenuTitleProps {
  node: INodesMapItem;
}

export const MobileNodeContextMenuTitle: FC<React.PropsWithChildren<IContextMenuTitleProps>> = ({ node }) => {
  const colors = useThemeColors();
  return (
    <div>
      <div className={styles.title}>
        {getNodeIcon(node.icon, node.type)}
        <div className={styles.name}>{node.nodeName}</div>
      </div>
      {(node.nodeShared || node.nodePermitSet) && (
        <Space className={styles.tags} size={16}>
          {node.nodeShared && <Tag color={colors.primaryColor}>{t(Strings.permission_specific_show)}</Tag>}
          {node.nodePermitSet && <Tag color={colors.rc05}>{t(Strings.share_permisson_model_open_share_label)}</Tag>}
        </Space>
      )}
    </div>
  );
};
