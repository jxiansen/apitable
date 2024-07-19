

import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { Switch } from '@apitable/components';
import { IURLField, IField, Strings, t } from '@apitable/core';

import settingStyles from '../field_setting/styles.module.less';
import styles from './styles.module.less';

interface IFormURLProps {
  currentField: IURLField;
  setCurrentField: Dispatch<SetStateAction<IField>>;
}

export const FormatURL = ({ currentField, setCurrentField }: IFormURLProps): JSX.Element => {
  const onRecogURLChange = (newFlag: boolean) => {
    setCurrentField({
      ...currentField,
      property: {
        isRecogURLFlag: newFlag,
      },
    });
  };

  return (
    <div className={styles.section} style={{ marginBottom: 10, marginTop: 17 }}>
      <section className={settingStyles.section} style={{ marginBottom: 0 }}>
        <div className={classNames(settingStyles.sectionTitle, settingStyles.sub)} style={{ display: 'flex', marginBottom: 0 }}>
          <Switch size="small" checked={currentField.property?.isRecogURLFlag} onChange={onRecogURLChange} style={{ marginRight: 8, marginTop: 2 }} />
          {t(Strings.url_preview_setting)}
        </div>
      </section>
    </div>
  );
};
