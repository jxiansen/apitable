

import Image from 'next/image';
import { FC, useState } from 'react';
import { Button, Message, TextInput, Typography, ThemeName } from '@apitable/components';
import { StoreActions, Strings, t } from '@apitable/core';
import { WithTipWrapper } from 'pc/components/common';
import { useRequest, useUserRequest } from 'pc/hooks';
import { useContactUs } from 'pc/hooks/use_contact_us';
import { useAppSelector } from 'pc/store/react-redux';
import { dispatch } from 'pc/worker/store';
import CreateSpaceIconDark from 'static/icon/space/space_add_name_dark.png';
import CreateSpaceIconLight from 'static/icon/space/space_add_name_light.png';
import styles from './style.module.less';

interface ISubmitInviteCode {
  submitAndSuccess: () => void;
  myInviteCode: string;
}

export const SubmitInviteCode: FC<React.PropsWithChildren<ISubmitInviteCode>> = ({ submitAndSuccess, myInviteCode }) => {
  const [val, setVal] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const contactUs = useContactUs();
  const { submitInviteCodeReq } = useUserRequest();
  const { run: submitInviteCode, loading } = useRequest(submitInviteCodeReq, { manual: true });
  const themeName = useAppSelector((state) => state.theme);
  const imgUrl = themeName === ThemeName.Light ? CreateSpaceIconLight : CreateSpaceIconDark;
  const submit = () => {
    if (val === myInviteCode) {
      setErrMsg(t(Strings.invite_code_cannot_use_mine));
      return;
    }
    submitInviteCode(val).then((res) => {
      if (!res.success) {
        setErrMsg(res.message);
      } else {
        Message.success({ content: t(Strings.got_v_coins) });
        submitAndSuccess();
        dispatch(StoreActions.setUsedInviteReward(true));
      }
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let s = e.target.value;
    s = s.replace(/[^\d]/g, '');
    if (!loading && s.length < 8) {
      setErrMsg('');
    }
    setVal(s);
  };

  const checkValid = () => {
    return val.length === 8;
  };

  return (
    <div className={styles.submitInviteCode}>
      <div className={styles.topImgBox}>
        <Image src={imgUrl} width={120} height={90} alt="" />
      </div>
      <Typography variant="h7" className={styles.desc}>
        {t(Strings.invite_code_tab_sumbit_get_v_coin_both)}
      </Typography>
      <div className={styles.form}>
        <WithTipWrapper tip={errMsg}>
          <TextInput
            error={Boolean(errMsg)}
            placeholder={t(Strings.invite_code_tab_submit_input_placeholder)}
            maxLength={8}
            value={val}
            onChange={onChange}
            block
          />
        </WithTipWrapper>
        <Button color="primary" block className={styles.submitBtn} onClick={submit} disabled={!checkValid()} loading={loading}>
          {t(Strings.submit)}
        </Button>
      </div>
      <div className={styles.bottomTip}>
        {t(Strings.invite_code_no)}
        <span
          className={styles.btn}
          onClick={() => {
            contactUs();
          }}
        >
          {t(Strings.invite_code_add_official)}
        </span>
      </div>
    </div>
  );
};
