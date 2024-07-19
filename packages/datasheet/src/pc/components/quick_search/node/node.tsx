

import classNames from 'classnames';
import { FC } from 'react';
import * as React from 'react';
import { INode, Strings, t } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { getNodeIcon } from '../../catalog/tree/node_icon';
import styles from './style.module.less';

export type ISearchNode = INode & { superiorPath: string };

export interface INodeProps {
  node: ISearchNode;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}

export const Node: FC<React.PropsWithChildren<INodeProps>> = (props) => {
  const { node, onMouseDown } = props;
  const spaceName = useAppSelector((state) => state.user.info?.spaceName);
  const nodeCatalog = node.nodePrivate ? t(Strings.catalog_private) : t(Strings.catalog_team);

  return (
    <div className={classNames(styles.nodeContainer, props.className)} data-node-id={node.nodeId} data-node-type={node.type} onMouseUp={onMouseDown}>
      <div className={styles.node}>
        <div className={styles.icon}>{getNodeIcon(node.icon, node.type, { emojiSize: 16 })}</div>
        <div className={styles.nodeName} dangerouslySetInnerHTML={{ __html: node.nodeName }} />
      </div>
      <div className={styles.superiorPath}>{spaceName + ` / ${nodeCatalog} ` + node.superiorPath}</div>
    </div>
  );
};
