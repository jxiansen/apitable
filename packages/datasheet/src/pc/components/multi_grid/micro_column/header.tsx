import { FC } from 'react';
import { useThemeColors } from '@apitable/components';
import { IField } from '@apitable/core';
import { getFieldTypeIcon } from '../field_setting';
import styles from './styles.module.less';

interface IHeaderProps {
  field: IField;
}

export const Header: FC<React.PropsWithChildren<IHeaderProps>> = (props) => {
  const colors = useThemeColors();
  const { field } = props;

  return (
    <div className={styles.head}>
      <div className={styles.iconType}>{getFieldTypeIcon(field.type, colors.secondLevelText)}</div>
      <div className={styles.fieldName}>{field.name}</div>
    </div>
  );
};
