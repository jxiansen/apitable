

import cls from 'classnames';
import * as React from 'react';
import { IField } from '@apitable/core';
import { getFieldTypeIcon } from 'pc/components/multi_grid/field_setting';
import { stopPropagation } from 'pc/utils';
import EditorTitleContext from '../../editor_title_context';
import styles from './style.module.less';

export interface IChangesetItemHeader {
  field?: IField;
  old?: boolean;
  inline?: boolean;
  block?: boolean;
}

const ChangesetItemHeader: React.FC<React.PropsWithChildren<IChangesetItemHeader>> = (props) => {
  const { field, old, inline = true, block } = props;
  const { updateFocusFieldId } = React.useContext(EditorTitleContext);
  if (!field) return null;
  return (
    <div
      className={cls(styles.changesetItemHeader, {
        [styles.old]: old,
        [styles.inline]: inline,
      })}
      onMouseDown={(e) => {
        if (!old) {
          updateFocusFieldId(field.id);
          stopPropagation(e);
        }
      }}
    >
      <div className={styles.iconType}>{getFieldTypeIcon(field.type, 'currentcolor')}</div>
      <div className={cls(styles.text, { [styles.block]: block })}>{field.name}</div>
    </div>
  );
};

export default ChangesetItemHeader;
