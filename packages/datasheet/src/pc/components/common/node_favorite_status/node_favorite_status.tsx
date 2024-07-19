

import { FC } from 'react';
import { t, Strings } from '@apitable/core';
import { StarOutlined, StarFilled } from '@apitable/icons';
import { useCatalogTreeRequest, useRequest } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import { Tooltip } from '../tooltip';
import styles from './style.module.less';

export interface INodeFavoriteStatusProps {
  nodeId: string;
  enabled: boolean;
}

export const NodeFavoriteStatus: FC<React.PropsWithChildren<INodeFavoriteStatusProps>> = ({ nodeId, enabled }) => {
  const activeNodePrivate = useAppSelector((state) => {
    return state.catalogTree.treeNodesMap[nodeId]?.nodePrivate || state.catalogTree.privateTreeNodesMap[nodeId]?.nodePrivate;
  });
  const { updateNodeFavoriteStatusReq } = useCatalogTreeRequest();
  const { run: updateNodeFavoriteStatus, loading } = useRequest(updateNodeFavoriteStatusReq, { manual: true });

  const clickHandler = () => {
    if (loading) {
      return;
    }
    updateNodeFavoriteStatus(nodeId, activeNodePrivate);
  };

  return (
    <Tooltip title={enabled ? t(Strings.remove_favorite) : t(Strings.favorite)} trigger="hover">
      <div className={styles.favoriteStatus} onClick={clickHandler}>
        {enabled ? <StarFilled size={16} className={styles.favorite} /> : <StarOutlined size={16} className={styles.unFavorite} />}
      </div>
    </Tooltip>
  );
};
