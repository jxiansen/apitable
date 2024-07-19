

import classNames from 'classnames';
import { useState } from 'react';
import * as React from 'react';
import { NodeIcon } from 'pc/components/catalog/tree/node_icon';
import { getNodeTypeByNodeId } from 'pc/utils';
import { Tooltip } from '../tooltip';
import styles from './styles.module.less';

interface IInlineNodeNameProps {
  nodeId: string;
  nodeName: string | undefined;
  nodeNameStyle?: React.CSSProperties;
  nodeIcon: string | undefined;
  withIcon?: boolean;
  withBrackets?: boolean;
  withTip?: boolean;
  iconSize?: number;
  size?: number;
  prefix?: string;
  className?: string;
  iconEditable?: boolean;
}

export const InlineNodeName: React.FC<React.PropsWithChildren<IInlineNodeNameProps>> = (props) => {
  const {
    nodeId,
    nodeName,
    nodeIcon,
    withIcon,
    iconSize = 18,
    size = 16,
    withBrackets,
    nodeNameStyle,
    prefix = '',
    className,
    withTip,
    iconEditable,
  } = props;
  const [showTip, setShowTip] = useState(false);

  if (!nodeName && !nodeIcon) return <></>;

  const handleShowTipChange = (show: boolean) => {
    if (withTip) setShowTip(show);
  };
  return (
    <Tooltip title={nodeName} placement="left" open={showTip} mouseEnterDelay={0.5} onOpenChange={handleShowTipChange}>
      <div className={classNames(styles.datasheetInfo, className, iconEditable && styles.iconEditable)}>
        {prefix}
        {withBrackets && '「'}
        {withIcon && (
          <NodeIcon nodeId={nodeId} icon={nodeIcon} type={getNodeTypeByNodeId(nodeId)} size={nodeIcon ? iconSize : size} editable={iconEditable} />
        )}
        <Tooltip title={nodeName} textEllipsis>
          <span className={styles.name} style={nodeNameStyle}>
            {nodeName}
          </span>
        </Tooltip>
        {withBrackets && '」'}
      </div>
    </Tooltip>
  );
};
