import classNames from 'classnames';
import { get } from 'lodash';
import * as React from 'react';
import { ICellValue, Strings, t } from '@apitable/core';
import { FileOutlined } from '@apitable/icons';
import styles from '../../../expand_record/expand_work_doc/styles.module.less';
import { ICellComponentProps } from '../cell_value/interface';

type ICellWorkDoc = ICellComponentProps & {
  cellValue: ICellValue;
};

export const CellWorkdoc: React.FC<React.PropsWithChildren<ICellWorkDoc>> = (props) => {
  const { cellValue } = props;
  const title = get(cellValue, '0.title') || t(Strings.workdoc_unnamed);
  return (
    <div className={classNames('expandWorkdoc', styles.expandWorkdoc)}>
      <div className={classNames('workdocBtn', styles.workdocBtn)}>
        <FileOutlined />
        <div className={styles.workdocTitle}>{title}</div>
      </div>
    </div>
  );
};
