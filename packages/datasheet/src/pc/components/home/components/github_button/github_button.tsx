import { colorVars, Typography, useThemeColors } from '@apitable/components';
import { GithubFilled } from '@apitable/icons';
import { getEnvVariables } from '../../../../utils/env';
import styles from './style.module.less';

export const GithubButton = () => {
  const colors = useThemeColors();
  if (getEnvVariables().LOGIN_SOCIAL_ICONS_DISABLE) {
    return null;
  }
  return (
    <div className={styles.githubBtnBox}>
      <a className={styles.githubBtn} href="https://github.com/apitable/apitable" target="_blank" rel="noreferrer">
        <GithubFilled color={colorVars.textCommonPrimary} size={24} />
        <Typography variant="h7" color={colors.textCommonPrimary}>
          Star us on Github
        </Typography>
      </a>
    </div>
  );
};
