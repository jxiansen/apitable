import { FC } from 'react';
import { Typography } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { ScreenSize } from 'pc/components/common/component_display';
import { useResponsive } from 'pc/hooks/use_responsive';
import { LanguageSetting } from './language_setting';
import { RecordVisionSetting } from './record_vision_setting';
import { ThemeSetting } from './theme_setting';
import { TimezoneSetting } from './timezone_setting';
import styles from './style.module.less';

export const PersonalizedSetting: FC<React.PropsWithChildren<unknown>> = () => {
  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);

  return (
    <div className={styles.personalizedSetting}>
      <Typography variant="h6" className={styles.title}>
        {t(Strings.personalized_setting)}
      </Typography>
      <Typography variant="body3">{t(Strings.personalized_setting_tip)}</Typography>

      <ThemeSetting />
      <LanguageSetting />
      <TimezoneSetting />
      {!isMobile && <RecordVisionSetting />}
    </div>
  );
};
