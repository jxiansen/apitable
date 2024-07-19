

import { useState } from 'react';
import * as React from 'react';
import { LinkButton, useThemeColors } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { DeleteOutlined, DownloadOutlined, LinkOutlined, MoreStandOutlined } from '@apitable/icons';
import { Message } from 'pc/components/common';
import { Popover } from 'pc/components/common/mobile/popover';
import { copy2clipBoard } from 'pc/utils';
import style from './style.module.less';

interface IMoreToolProps {
  readonly: boolean;
  onDelete(): void;
  downloadSrc: string;
  disabledDownload?: boolean;
}

export const MoreTool: React.FC<React.PropsWithChildren<IMoreToolProps>> = (props) => {
  const colors = useThemeColors();
  const { readonly, onDelete, downloadSrc, disabledDownload } = props;

  const content = (
    <div className={style.content}>
      {!disabledDownload && (
        <div
          className={style.moreToolItem}
          onClick={() => {
            setVisible(false);

            const a = document.createElement('a');
            a.setAttribute('download', '');
            a.href = downloadSrc;
            a.click();
          }}
        >
          <LinkButton underline={false} className={style.moreToolBtn} prefixIcon={<DownloadOutlined size={16} color={colors.textCommonTertiary} />}>
            <span className={style.toolName}>{t(Strings.download)}</span>
          </LinkButton>
        </div>
      )}

      <div className={style.moreToolItem}>
        <LinkButton
          underline={false}
          className={style.moreToolBtn}
          prefixIcon={<LinkOutlined size={16} color={colors.textCommonTertiary} />}
          onClick={() => {
            copy2clipBoard(downloadSrc, () => {
              Message.success({ content: t(Strings.preview_copy_attach_url_succeed) });
            });
            setVisible(false);
          }}
          disabled={readonly}
        >
          <span className={style.toolName}>{t(Strings.preview_copy_attach_url)}</span>
        </LinkButton>
      </div>
      <div
        className={style.moreToolItem}
        onClick={() => {
          if (!readonly) {
            onDelete();
            setVisible(false);
          }
        }}
      >
        <LinkButton
          underline={false}
          className={style.moreToolBtn}
          prefixIcon={<DeleteOutlined size={16} color={colors.textCommonTertiary} />}
          disabled={readonly}
        >
          <span className={style.toolName}>{t(Strings.delete)}</span>
        </LinkButton>
      </div>
    </div>
  );

  const [visible, setVisible] = useState(false);

  return (
    <Popover content={content} popupVisible={visible} onPopupVisibleChange={(visible) => setVisible(visible)}>
      <div className={style.trigger}>
        <MoreStandOutlined size={16} color={colors.staticWhite0} />
      </div>
    </Popover>
  );
};
