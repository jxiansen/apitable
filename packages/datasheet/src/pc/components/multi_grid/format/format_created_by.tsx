

import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import * as React from 'react';
import { Switch } from '@apitable/components';
import { IField, ICreatedByField, Strings, t } from '@apitable/core';
import { QuestionCircleOutlined } from '@apitable/icons';
import { useAppSelector } from 'pc/store/react-redux';
import { getEnvVariables } from 'pc/utils/env';
import { Message } from '../../common';
import settingStyles from '../field_setting/styles.module.less';
import styles from './styles.module.less';

interface IFormatCreatedBy {
  currentField: ICreatedByField;
  setCurrentField: Dispatch<SetStateAction<IField>>;
}

export const FormatCreatedBy: React.FC<React.PropsWithChildren<IFormatCreatedBy>> = (props: IFormatCreatedBy) => {
  const handleSubscription = (checked: boolean) => {
    const updateSubscription = () => {
      props.setCurrentField({
        ...props.currentField,
        property: {
          ...props.currentField.property,
          subscription: checked,
        },
      });
    };

    if (checked) {
      Message.info({
        content: t(Strings.field_created_by_property_subscription_open_tip),
      });
      updateSubscription();
    } else {
      updateSubscription();
    }
  };

  const { subscription } = props.currentField.property;

  const embedId = useAppSelector((state) => state.pageParams.embedId);

  const { RECORD_WATCHING_VISIBLE } = getEnvVariables();

  if (!RECORD_WATCHING_VISIBLE) {
    return null;
  }

  return (
    <div className={styles.section}>
      <section className={settingStyles.section}>
        {!embedId && (
          <div className={classNames(settingStyles.sectionTitle, settingStyles.sub)}>
            <div className={styles.subscription}>
              {t(Strings.field_created_by_property_subscription)}
              <a
                href={t(Strings.field_help_created_by_property_subscription)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', cursor: 'pointer' }}
              >
                <span className={styles.requiredTip}>
                  <QuestionCircleOutlined color="currentColor" />
                </span>
              </a>
            </div>
            <Switch size="small" checked={subscription} onChange={handleSubscription} />
          </div>
        )}
      </section>
    </div>
  );
};
