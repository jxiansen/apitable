import classnames from 'classnames';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormApi, IFormProps, StoreActions, Strings, t } from '@apitable/core';
import { Message } from 'pc/components/common';
import { ScreenSize } from 'pc/components/common/component_display';
import { useCatalogTreeRequest, useRequest, useResponsive } from 'pc/hooks';
import { IBasePropEditorProps, IModeEnum } from '../interface';
import styles from './style.module.less';

interface ITitleEditorProps extends IBasePropEditorProps {
  title: string;
}

export const TitleEditor: React.FC<React.PropsWithChildren<ITitleEditorProps>> = (props) => {
  const { mode, nodeId, title } = props;
  const [value, setValue] = useState<string>(title || '');
  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);
  const { renameNodeReq } = useCatalogTreeRequest();
  const { run: renameNode } = useRequest(renameNodeReq, { manual: true });

  const dispatch = useDispatch();

  const updateTitle = (partProps: Partial<IFormProps>) => {
    FormApi.updateFormProps(nodeId, partProps).then((res) => {
      const { success } = res.data;
      if (success) {
        dispatch(StoreActions.updateFormProps(nodeId, partProps));
      } else {
        Message.error({ content: t(Strings.share_settings_tip, { status: t(Strings.fail) }) });
      }
    });
  };

  const onBlur = () => {
    if (value === title) {
      return;
    }
    renameNode(nodeId, value);
    updateTitle({ title: value });
  };

  useEffect(() => {
    if (value !== title) {
      setValue(title);
    }
    // eslint-disable-next-line
  }, [title, setValue]);

  return (
    <div
      className={classnames(styles.titleEditor, {
        [styles.titleEditorMobile]: isMobile,
      })}
    >
      {mode === IModeEnum.Edit ? (
        <input
          className={styles.titleInput}
          value={value}
          placeholder={t(Strings.form_title_placeholder)}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
        />
      ) : (
        title
      )}
    </div>
  );
};
