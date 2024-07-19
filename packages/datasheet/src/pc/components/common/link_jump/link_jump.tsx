import { Tooltip } from 'antd';
import path from 'path-browserify';
import { FC } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { useThemeColors } from '@apitable/components';
import { Navigation, StoreActions, Strings, t } from '@apitable/core';
import { GotoOutlined } from '@apitable/icons';
import { Method } from 'pc/components/route_manager/const';
import { navigationToUrl } from 'pc/components/route_manager/navigation_to_url';
import { Router } from 'pc/components/route_manager/router';
import { useAppSelector } from 'pc/store/react-redux';
import { stopPropagation } from 'pc/utils/dom';
import styles from './style.module.less';

export enum JumpIconMode {
  Badge,
  Normal,
}

interface ILinkJumpProps {
  foreignDatasheetId: string;
  viewId?: string;
  foreignFieldId?: string | null;
  iconColor?: string;
  mode?: JumpIconMode;
  hideOperateBox?: () => void;
}

export const LinkJump: FC<React.PropsWithChildren<ILinkJumpProps>> = (props) => {
  const colors = useThemeColors();
  const { mode = JumpIconMode.Normal, children, foreignDatasheetId, foreignFieldId, viewId, hideOperateBox } = props;
  const { hasShareId, hasTemplateId, isEmbed } = useAppSelector(
    (state) => ({
      hasShareId: Boolean(state.pageParams.shareId),
      hasTemplateId: Boolean(state.pageParams.templateId),
      isEmbed: Boolean(state.pageParams.embedId),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  if (hasShareId || hasTemplateId || isEmbed) {
    return <>{children}</>;
  }

  const handleClick = (e: React.SyntheticEvent) => {
    stopPropagation(e);
    if (!foreignFieldId) {
      const url = new URL(window.location.href);
      url.pathname = path.join('workbench', foreignDatasheetId, viewId || '');
      navigationToUrl(url.href, { method: Method.Push });
      return;
    }
    foreignFieldId && dispatch(StoreActions.setHighlightFieldId(foreignFieldId, foreignDatasheetId));
    hideOperateBox && hideOperateBox();
    Router.push(Navigation.WORKBENCH, { params: { nodeId: foreignDatasheetId, viewId } });
  };

  return (
    <Tooltip title={t(Strings.jump_link_url)}>
      <span className={mode === JumpIconMode.Badge ? styles.textWrapper : styles.iconWrapper} onClick={handleClick}>
        <sup>
          <GotoOutlined color={colors.primaryColor} size={10} />
        </sup>
      </span>
    </Tooltip>
  );
};
