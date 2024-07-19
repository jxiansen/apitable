

import { FC, useState } from 'react';
// eslint-disable-next-line no-restricted-imports
import { Select, Typography } from '@apitable/components';
import { getLanguage, Strings, t } from '@apitable/core';
import { Message } from 'pc/components/common/message/message';
import { useRequest } from 'pc/hooks/use_request';
import { useUserRequest } from 'pc/hooks/use_user_request';
import { getEnvVariables } from 'pc/utils/env';
import styles from './style.module.less';

/**
 * read Settings in config
 */
declare const window: any;
declare const global: any;

const _global = global || window;

const options: any[] = [];

Object.keys(_global.languageManifest || {}).forEach((item) => {
  if (item.indexOf('-') !== -1) {
    options.push({
      label: _global.languageManifest[item],
      value: item,
    });
  }
});

export const LanguageSetting: FC<React.PropsWithChildren<unknown>> = () => {
  const lang = getLanguage();

  const [value, setValue] = useState<string>(lang);
  const { updateLangReq } = useUserRequest();
  const { run: updateLang } = useRequest(updateLangReq, { manual: true });

  const handleSelected = async (option: any) => {
    const newValue: string = option.value;
    if (newValue === value) {
      return;
    }

    const { success, message } = await updateLang(newValue);

    if (!success) {
      Message.error({ content: message });
      return;
    }
    setValue(newValue);
    // cache client locale
    localStorage.setItem('client-lang', newValue);
    window.location.reload();
  };

  return (
    <div className={styles.languageSetting}>
      <Typography variant="h7" className={styles.title}>
        {t(Strings.language_setting)}
      </Typography>
      <div className={styles.tip}>
        {t(Strings.give_feedback_to_translation)}
        <a className={styles.learnMore} href={getEnvVariables().TRANSLATION_FEEDBACK_HELP_URL} rel="noopener noreferrer" target="_blank">
          {t(Strings.give_feedback_to_translation_learn_more)}
        </a>
      </div>
      <Select
        options={options}
        value={value}
        onSelected={handleSelected}
        dropdownMatchSelectWidth
        triggerStyle={{ width: 200 }}
        searchPlaceholder={t(Strings.search)}
        openSearch
      />
    </div>
  );
};
