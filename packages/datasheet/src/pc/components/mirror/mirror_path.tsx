

import { Tooltip } from 'antd';
import throttle from 'lodash/throttle';
import * as React from 'react';
import { Message, useThemeColors } from '@apitable/components';
import { ConfigConstant, INodeMeta, IPermissions, ISourceDatasheetInfo, Navigation, Selectors, Strings, t } from '@apitable/core';
import { InlineNodeName } from 'pc/components/common/inline_node_name';
import { NodeInfoBar } from 'pc/components/common/node_info_bar';
import { Router } from 'pc/components/route_manager/router';
import { useSideBarVisible } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import { gstMirrorIconByViewType } from './mirror_list/utils';
import styles from './style.module.less';

interface IMirrorPath {
  breadInfo: ISourceDatasheetInfo;
  permission: IPermissions;
  nodeInfo: INodeMeta;
}

export const MirrorPath: React.FC<React.PropsWithChildren<IMirrorPath>> = (props) => {
  const colors = useThemeColors();
  const { breadInfo, permission, nodeInfo } = props;
  const { sideBarVisible } = useSideBarVisible();
  const { shareId, templateId } = useAppSelector((state) => state.pageParams);
  const view = useAppSelector((state) => {
    const snapshot = Selectors.getSnapshot(state, breadInfo.datasheetId)!;
    if (!snapshot) {
      return;
    }
    return Selectors.getViewById(snapshot, breadInfo.viewId);
  });
  
  const isGhostNode = useAppSelector((state) => {
    return Selectors.getDatasheet(state, breadInfo.datasheetId)?.isGhostNode;
  });
  const isOriginDstReadable = useAppSelector((state) => {
    return Boolean(Selectors.getDatasheet(state, breadInfo.datasheetId)?.permissions.readable);
  });

  // Jump to source datasheet entry temporarily closed
  const jumpHandler = throttle(() => {
    // The original datasheet is a ghost node and should not be jumped
    if (isGhostNode) {
      return;
    }

    if (!isOriginDstReadable) {
      return Message.warning({
        content: t(Strings.no_access_view),
      });
    }

    Router.push(Navigation.WORKBENCH, { params: { nodeId: breadInfo.datasheetId, viewId: breadInfo.viewId } });
  }, 5000);

  if (!view) {
    return null;
  }

  return (
    <div style={{ height: 48 }}>
      <div className={styles.breadcrumbsBar} style={{ paddingLeft: !sideBarVisible ? 60 : '' }}>
        <div className={styles.container}>
          <div>
            <NodeInfoBar
              data={{
                nodeId: nodeInfo.id!,
                name: nodeInfo.name,
                type: ConfigConstant.NodeType.MIRROR,
                icon: nodeInfo.icon,
                role: nodeInfo.role === ConfigConstant.Role.Foreigner && permission.editable ? ConfigConstant.Role.Editor : nodeInfo.role,
                favoriteEnabled: nodeInfo.nodeFavorite,
                nameEditable: permission.manageable,
                iconEditable: permission.iconEditable,
              }}
              hiddenModule={{ favorite: Boolean(shareId || templateId) }}
              style={{ maxWidth: '256px', width: 'auto' }}
            />
          </div>
          {/* Source Information */}
          {!shareId && (
            <div className={styles.sourceInfo}>
              <span style={{ whiteSpace: 'pre-wrap' }}>{t(Strings.mirror_from)}</span>
              <InlineNodeName
                className={styles.datasheetInfo}
                nodeId={breadInfo.datasheetId!}
                nodeName={breadInfo.datasheetName}
                nodeIcon={breadInfo.datasheetIcon}
                withIcon
                iconSize={16}
                iconEditable={false}
              />
              <span style={{ margin: '0 4px' }}>/</span>
              <Tooltip
                title={isGhostNode ? t(Strings.ghost_node_no_access) : t(Strings.form_to_datasheet_view)
                }
              >
                <span className={styles.viewInfo} onClick={jumpHandler}>
                  <span className={styles.viewIcon}>{gstMirrorIconByViewType(view!.type, colors.fourthLevelText)}</span>
                  <span className={styles.viewName}>{view?.name}</span>
                </span>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
