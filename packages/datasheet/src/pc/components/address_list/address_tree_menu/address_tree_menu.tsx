

import { Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import { AntTreeNodeSelectedEvent } from 'antd/lib/tree';
import { FC } from 'react';
import { ITeamTreeNode, IReduxState, StoreActions } from '@apitable/core';
import { TriangleRightFilled } from '@apitable/icons';
// eslint-disable-next-line no-restricted-imports
import { Tooltip } from 'pc/components/common';
import { useAppDispatch } from 'pc/hooks/use_app_dispatch';
import { useAppSelector } from 'pc/store/react-redux';
import styles from './style.module.less';

const { TreeNode, DirectoryTree } = Tree;

export interface IAddressTreeMenu {
  inSearch: boolean;
  listData: ITeamTreeNode[];
  onSelect: (keys: string[], event: AntTreeNodeSelectedEvent) => void;
}
export const AddressTreeMenu: FC<React.PropsWithChildren<IAddressTreeMenu>> = (props) => {
  const { listData, onSelect } = props;
  const { teamId } = useAppSelector((state: IReduxState) => state.addressList.selectedTeamInfo);
  const dispatch = useAppDispatch();

  const renderTreeNode = (data: ITeamTreeNode[]) => {
    if (!data || data.length === 0) {
      return <></>;
    }
    return data.map((item) => {
      return (
        <TreeNode
          title={
            <Tooltip title={item.teamName} placement="bottomLeft" textEllipsis>
              <span>{item.teamName}</span>
            </Tooltip>
          }
          key={item.teamId}
          isLeaf={!item.hasChildren}
        >
          {item.children && item.children.length > 0 && renderTreeNode(item.children)}
        </TreeNode>
      );
    });
  };
  const teamClick = (keys: DataNode['key'][], event: any) => {
    onSelect(keys as string[], event);
  };

  const onExpand = (
    expandedKeys: DataNode['key'][],
    info: {
      expanded: boolean;
      node: DataNode;
    },
  ) => {
    if (info.expanded && !info.node.children) {
      const teamId = expandedKeys[expandedKeys.length - 1];

      dispatch(StoreActions.getSubTeam(teamId));
    }
  };

  return (
    <div className={styles.treeWrapper}>
      {listData.length > 0 && (
        <DirectoryTree
          onSelect={teamClick}
          onExpand={onExpand}
          expandAction={false}
          selectedKeys={[teamId]}
          switcherIcon={
            <div>
              <TriangleRightFilled size={12} />
            </div>
          }
          showIcon={false}
        >
          {renderTreeNode(listData)}
        </DirectoryTree>
      )}
    </div>
  );
};
