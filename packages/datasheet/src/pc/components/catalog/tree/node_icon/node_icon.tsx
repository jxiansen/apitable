import { FC } from 'react';
import { colorVars } from '@apitable/components';
import { ConfigConstant } from '@apitable/core';
import { makeNodeIconComponent } from 'pc/components/catalog/node_context_menu/node_icons';
import { ScreenSize } from 'pc/components/common/component_display';
import { Emoji } from 'pc/components/common/emoji/emoji';
import { useResponsive } from 'pc/hooks/use_responsive';
import { nodeConfigData } from 'pc/utils/catalog';
import { emojiUrl } from 'pc/utils/emoji_url';
import { EmojiPopover } from '../../emoji_popover';
import styles from './style.module.less';

export interface INodeIconProps {
  nodeId: string;
  type?: ConfigConstant.NodeType;
  icon?: string;
  expanded?: boolean;
  hasChildren?: boolean;
  editable?: boolean;
  actived?: boolean;
  size?: number;
}

export const NodeIcon: FC<React.PropsWithChildren<INodeIconProps>> = ({
  nodeId,
  icon,
  type = ConfigConstant.NodeType.DATASHEET,
  expanded = false,
  hasChildren = false,
  editable = true,
  actived = false,
  size = 18,
}) => {
  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);

  return (
    <EmojiPopover nodeId={nodeId} type={type} iconEditable={editable && !isMobile}>
      <span className={styles.iconWrapper}>{getNodeIcon(icon, type, { expanded, hasChildren, size, emojiSize: size, actived })}</span>
    </EmojiPopover>
  );
};

/**
 * Get the icon of the node by specifying the parameters
 * @param icon emoji
 * @param type
 * @param options Other parameters (size: size of the default node icon, emojiSize: size of the emoji, expanded:
 *  whether it is open, hasChildren: whether there are child nodes)
 */
export const getNodeIcon = (
  icon: string | null | undefined,
  type: ConfigConstant.NodeType,
  options: {
    size?: number;
    emojiSize?: number;
    expanded?: boolean;
    hasChildren?: boolean;
    actived?: boolean;
    normalColor?: string;
    activedColor?: string;
  } = {},
) => {
  const {
    size = 20,
    emojiSize = 20,
    expanded,
    hasChildren = true,
    actived = false,
    normalColor = colorVars.fourthLevelText,
    activedColor = colorVars.primaryColor,
  } = options;
  if (icon) {
    const url = emojiUrl(icon);
    return url ? (
      <img
        src={url}
        style={{
          width: emojiSize,
          height: emojiSize,
        }}
        alt=""
      />
    ) : (
      <Emoji emoji={icon} size={emojiSize} />
    );
  }
  const nodeConfig = nodeConfigData.find((item) => item.type === type);
  if (!nodeConfig) return;
  let iconName = nodeConfig.icon;
  if (hasChildren && nodeConfig?.notEmptyIcon) {
    iconName = nodeConfig.notEmptyIcon;
  }
  if (expanded && nodeConfig?.openedIcon) {
    iconName = nodeConfig.openedIcon;
  }

  return makeNodeIconComponent(iconName, { size, color: actived ? activedColor : normalColor });
};
