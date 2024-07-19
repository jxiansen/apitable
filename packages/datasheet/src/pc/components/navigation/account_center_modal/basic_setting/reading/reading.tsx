import parser from 'html-react-parser';
import Image from 'next/image';
import { FC } from 'react';
import { Typography, useThemeColors } from '@apitable/components';
import { Strings, t, ThemeName } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import InfoStateDark from 'static/icon/common/info_state_dark.png';
import InfoStateLight from 'static/icon/common/info_state_light.png';
import styles from './styles.module.less';

interface IReadingProps {
  [key: string]: any;
}

const size = 160;

export const Reading: FC<React.PropsWithChildren<IReadingProps>> = () => {
  const colors = useThemeColors();
  const theme = useAppSelector((state) => state.theme);
  const InfoState = theme === ThemeName.Light ? InfoStateLight : InfoStateDark;

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <Image src={InfoState} width={size} height={size} alt="Info" />
      </div>

      <Typography
        variant="h6"
        style={{
          textAlign: 'center',
        }}
      >
        {t(Strings.log_out_reading_h6)}
      </Typography>
      <div className={styles.detail}>
        <Typography
          variant="h8"
          style={{
            margin: '8px 0',
          }}
        >
          {t(Strings.log_out_reading_h8)}
        </Typography>
        <Typography variant="body2" color={colors.fc2}>
          {parser(t(Strings.log_out_user_list))}
        </Typography>
      </div>
    </div>
  );
};
