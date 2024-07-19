import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import { Button } from '@apitable/components';
import { Navigation, Strings, t } from '@apitable/core';
import { Logo } from 'pc/components/common';
import { Router } from 'pc/components/route_manager/router';
import { useAppSelector } from 'pc/store/react-redux';
import IconFail from 'static/icon/common/common_img_invite_linkfailure.png';
import styles from './style.module.less';

export const ShareFail: React.FC<React.PropsWithChildren<unknown>> = () => {
  const backToSpace = () => {
    Router.replace(Navigation.HOME);
  };

  const theme = useAppSelector((state) => state.theme);

  return (
    <div className={styles.container}>
      <Head>
        <meta property="og:title" content={t(Strings.unavailable_og_title_content)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content={t(Strings.og_site_name_content)} />
        <meta property="og:description" content={t(Strings.share_fail_og_description_content)} />
      </Head>
      <div className={styles.logo}>
        <Logo size="large" theme={theme} />
      </div>
      <div className={styles.main}>
        <Image src={IconFail} width={240} height={180} alt="" />
        <p className={styles.desc}>{t(Strings.link_failed)}</p>
        <Button color={'primary'} size={'large'} block onClick={backToSpace}>
          {t(Strings.back_to_space)}
        </Button>
      </div>
    </div>
  );
};
