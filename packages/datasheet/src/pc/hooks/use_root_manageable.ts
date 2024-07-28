import { useAppSelector } from 'pc/store/react-redux';

export function useRootManageable(): {
  rootManageable: boolean;
  isRootNodeId: (nodeId: string) => boolean;
} {
  const spacePermissions = useAppSelector((state) => state.spacePermissionManage.spaceResource?.permissions);
  const isSpaceAdmin = spacePermissions && spacePermissions.includes('MANAGE_WORKBENCH');
  const spaceFeatures = useAppSelector((state) => state.space.spaceFeatures);
  const rootManageable = Boolean(isSpaceAdmin || spaceFeatures?.rootManageable);

  const rootId = useAppSelector((state) => state.catalogTree.rootId);
  const topLevelIds = useAppSelector((state) => state.catalogTree.treeNodesMap[rootId]?.children || []);

  const isRootNodeId = (nodeId: string) => topLevelIds.includes(nodeId);

  return {
    rootManageable,
    isRootNodeId,
  };
}
