import { FC } from 'react';
import { IReduxState } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { ShareNode } from '../share_node';

export interface IShareProps {
  nodeId: string;
  onClose?: () => void;
  isTriggerRender?: boolean;
}

export const Share: FC<React.PropsWithChildren<IShareProps>> = ({ nodeId, onClose, isTriggerRender }) => {
  const activeNodePrivate = useAppSelector((state) => {
    if (!nodeId) {
      return false;
    }
    return state.catalogTree.treeNodesMap[nodeId]?.nodePrivate || state.catalogTree.privateTreeNodesMap[nodeId]?.nodePrivate;
  });
  const nodeKey = activeNodePrivate ? 'privateTreeNodesMap' : 'treeNodesMap';
  const nodesMap = useAppSelector((state: IReduxState) => state.catalogTree[nodeKey]);
  if (!nodeId) {
    return null;
  }
  return (
    <ShareNode
      data={{
        nodeId: nodeId,
        type: nodesMap[nodeId]?.type,
        icon: nodesMap[nodeId]?.icon,
        name: nodesMap[nodeId]?.nodeName,
      }}
      onClose={onClose}
      visible
      isTriggerRender={isTriggerRender}
    />
  );
};
