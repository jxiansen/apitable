import classNames from 'classnames';
import { memo, FC, useContext, useEffect, useState } from 'react';
import { Selectors, StatusCode, Strings, t } from '@apitable/core';
import { ShareContext } from 'pc/components/share/share';
import { useAppSelector } from 'pc/store/react-redux';
import { ServerError } from '../invalid_page/server_error';
import { NoPermission } from '../no_permission';
import { TabBar } from './form_tab/tab_bar';
import { ViewContainer } from './view_container';
// @ts-ignore
import { WeixinShareWrapper } from 'enterprise/wechat/weixin_share_wrapper/weixin_share_wrapper';
import styles from './style.module.less';

const FormPanelBase: FC<React.PropsWithChildren<{ loading?: boolean }>> = (props) => {
  const { shareId, templateId, embedId } = useAppSelector((state) => state.pageParams);
  const formErrCode = useAppSelector((state) => Selectors.getFormErrorCode(state));
  const [preFill, setPreFill] = useState(false);
  const loading = useAppSelector((state) => {
    const form = Selectors.getForm(state);
    const formLoading = Selectors.getFormLoading(state);
    return Boolean(!form) || formLoading;
  });

  useEffect(() => {
    const load = () => {
      window.parent.postMessage(
        {
          message: 'pageLoaded',
        },
        '*',
      );
    };

    window.addEventListener('load', load);
    return () => {
      window.removeEventListener('load', load);
    };
  }, []);

  const isNoPermission =
    formErrCode === StatusCode.FORM_FOREIGN_DATASHEET_NOT_EXIST ||
    formErrCode === StatusCode.FORM_DATASHEET_NOT_EXIST ||
    formErrCode === StatusCode.NOT_PERMISSION ||
    formErrCode === StatusCode.NODE_NOT_EXIST ||
    formErrCode === StatusCode.NODE_DELETED;
  const { shareInfo } = useContext(ShareContext);
  const userLoading = useAppSelector((state) => state.user.loading);

  const noPermissionDesc = formErrCode === StatusCode.FORM_FOREIGN_DATASHEET_NOT_EXIST ? t(Strings.current_form_is_invalid) : '';

  const embedInfo = useAppSelector((state) => state.embedInfo);

  const showTabBar = embedId ? embedInfo.viewControl?.tabBar : true;

  const childComponent = (
    <div
      className={classNames(styles.formSpace, loading && styles.loading)}
      style={{
        borderRadius: (shareId && shareInfo.isFolder) || templateId ? 8 : 0,
      }}
    >
      {!formErrCode ? (
        <>
          {!shareId && showTabBar && <TabBar loading={loading} setPreFill={setPreFill} preFill={preFill} />}
          <ViewContainer loading={loading || (shareId && (!shareInfo || userLoading)) || props.loading} preFill={preFill} setPreFill={setPreFill} />
        </>
      ) : isNoPermission ? (
        <NoPermission desc={noPermissionDesc} />
      ) : (
        <ServerError />
      )}
    </div>
  );

  return <>{WeixinShareWrapper ? <WeixinShareWrapper>{childComponent}</WeixinShareWrapper> : childComponent}</>;
};

export const FormPanel = memo(FormPanelBase);
