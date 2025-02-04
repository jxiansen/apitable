import { Radio, Space } from 'antd';
import classNames from 'classnames';
import Image from 'next/image';
import * as React from 'react';
import { FC, useContext } from 'react';
import { Typography, useThemeColors } from '@apitable/components';
import { hiddenMobile, integrateCdnHost, Settings, Strings, t } from '@apitable/core';
import { AccountType } from '../log_out/enum';
import { StepContext } from '../log_out/step_context';
import styles from './styles.module.less';

interface IChooseAccountTypeProps {
  accountType: AccountType | undefined;
  setAccountType: React.Dispatch<React.SetStateAction<AccountType | undefined>>;
}

export const ChooseAccountType: FC<React.PropsWithChildren<IChooseAccountTypeProps>> = (props) => {
  const { accountType, setAccountType } = props;
  const colors = useThemeColors();

  const {
    userData: { email, mobile, areaCode },
  } = useContext(StepContext);

  const radioData = [
    {
      value: AccountType.MOBILE,
      alt: 'mobile',
      imgSrc: integrateCdnHost(Settings.delete_account_step2_mobile_icon.value),
      h7: t(Strings.send_verification_code_to, {
        mobile: `${areaCode} ${hiddenMobile(mobile!)}`,
      }),
      body4: t(Strings.verify_via_phone),
    },
    {
      value: AccountType.EMAIL,
      imgSrc: integrateCdnHost(Settings.delete_account_step2_email_icon.value),
      alt: 'email',
      h7: email,
      body4: t(Strings.verify_via_email),
    },
  ];

  return (
    <div className={styles.content}>
      <Typography
        variant="body2"
        style={{
          marginBottom: 16,
          color: colors.fc2,
        }}
      >
        {t(Strings.log_out_verify_tip)}
      </Typography>

      <Radio.Group
        onChange={(e) => {
          setAccountType(e.target.value);
        }}
        value={accountType}
      >
        <Space direction="vertical" size={16}>
          {radioData.map((item) => {
            const checked = accountType === item.value;
            return (
              <Radio
                key={item.value}
                value={item.value}
                className={classNames(styles.radio, {
                  [styles.checked]: checked,
                })}
              >
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <span className={styles.img}>
                      <Image src={item.imgSrc} alt={item.alt} width={40} height={40} />
                    </span>
                  </div>
                  <div className={styles.text}>
                    <Typography variant="h7" color={checked ? colors.primaryColor : colors.fc2} ellipsis>
                      {item.h7}
                    </Typography>
                    <Typography variant="body4" color={checked ? colors.primaryColor : colors.fc2} ellipsis>
                      {item.body4}
                    </Typography>
                  </div>
                </div>
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};
