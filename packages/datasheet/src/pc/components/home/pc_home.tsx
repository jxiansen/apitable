import { useMount } from 'ahooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IReduxState, Strings, t } from '@apitable/core';
import { ActiveAppSumo } from 'pc/components/home/components/active_app_sumo';
import { useAppSelector } from 'pc/store/react-redux';
import { ForgetPassword } from './components/forget_password';
import { Login } from './components/login';
import { SignUp } from './components/sign_up';
import { HomeWrapper } from './home_wrapper';
import styles from './style.module.less';

export enum ActionType {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  ForgetPassword = 'ForgetPassword',
  BindAppSumo = 'BindAppSumo',
}

export const PcHome: React.FC<React.PropsWithChildren<unknown>> = () => {
  const inviteLinkInfo = useAppSelector((state: IReduxState) => state.invite.inviteLinkInfo);
  const inviteEmailInfo = useAppSelector((state: IReduxState) => state.invite.inviteEmailInfo);
  const [action, setAction] = useState<ActionType>(ActionType.SignUp);
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const switchActionType = (actionType: ActionType) => {
    setAction(actionType);
  };
  const loginAction = localStorage.getItem('loginAction');
  useMount(() => {
    if (router.asPath.includes('sumo')) {
      setAction(ActionType.BindAppSumo);
      return;
    }
    if (loginAction === ActionType.SignIn) {
      setAction(ActionType.SignIn);
      localStorage.removeItem('loginAction');
    }
  });

  const homeModal = (action: ActionType) => {
    switch (action) {
      case ActionType.SignIn:
        return <Login switchClick={switchActionType} email={email} setEmail={setEmail} />;
      case ActionType.BindAppSumo:
        return <ActiveAppSumo />;
      case ActionType.SignUp:
        return <SignUp switchClick={switchActionType} />;
      case ActionType.ForgetPassword:
        return <ForgetPassword switchClick={switchActionType} email={email} setEmail={setEmail} />;
    }
  };

  const getTitle = (action: ActionType) => {
    switch (action) {
      case ActionType.SignIn:
        return 'Sign In';
      case ActionType.SignUp:
        return 'Sign Up';
      case ActionType.ForgetPassword:
        return 'Reset Password';
      case ActionType.BindAppSumo:
        return 'Welcome Sumo-ling!';
    }
  };

  return (
    <HomeWrapper action={action}>
      <div className={styles.loginBox}>
        {inviteLinkInfo || inviteEmailInfo ? (
          <div className={styles.invite}>
            <h4>
              {inviteLinkInfo?.data.memberName || inviteEmailInfo?.data.inviter} {t(Strings.invite_your_join)}
            </h4>
            <p>{`"${inviteLinkInfo?.data.spaceName || inviteEmailInfo?.data.spaceName}"`}</p>
          </div>
        ) : (
          <h3 className={styles.title}>{getTitle(action)}</h3>
        )}
        <div className={styles.bgBox1} />
        <div className={styles.bgBox2} />
        <div className={styles.bgBox3} />
        {homeModal(action)}
      </div>
    </HomeWrapper>
  );
};
