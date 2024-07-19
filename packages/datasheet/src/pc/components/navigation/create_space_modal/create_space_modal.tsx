import { Drawer, Form, Input } from 'antd';
import cls from 'classnames';
import Image from 'next/image';
import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, useThemeColors, ThemeName } from '@apitable/components';
import { IReduxState, StatusCode, StoreActions, Strings, t } from '@apitable/core';
import { CloseOutlined } from '@apitable/icons';
import { Modal } from 'pc/components/common/modal/modal/modal';
import { useRequest, useSpaceRequest } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import CreateSpaceIconDark from 'static/icon/space/space_add_name_dark.png';
import CreateSpaceIconLight from 'static/icon/space/space_add_name_light.png';
import styles from './style.module.less';

export interface ICreateSpaceModalProps {
  setShowCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}

export const CreateSpaceModal: FC<React.PropsWithChildren<ICreateSpaceModalProps>> = (props) => {
  const { isMobile } = props;
  const [spaceName, setSpaceName] = useState('');
  const dispatch = useDispatch();
  const err = useAppSelector((state: IReduxState) => state.space.err);
  const colors = useThemeColors();
  const themeName = useAppSelector((state) => state.theme);
  const { createSpaceReq } = useSpaceRequest();
  const spaceNameImg = themeName === ThemeName.Light ? CreateSpaceIconLight : CreateSpaceIconDark;
  const { run: createSpace, loading } = useRequest(createSpaceReq, { manual: true });

  useEffect(() => {
    return () => {
      dispatch(StoreActions.setSpaceErr(null));
    };
  }, [dispatch]);

  useEffect(() => {
    if (err && err.code === StatusCode.STATUS_OK) {
      props.setShowCreateModal(false);
    }
  }, [err, props]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (err) {
      dispatch(StoreActions.setSpaceErr(null));
    }
    const value = e.target.value;
    setSpaceName(value);
  };

  const handleSubmit = async () => {
    const rlt = await createSpace(spaceName);
    if (rlt?.success) {
      props.setShowCreateModal(false);
    }
  };

  const renderContent = () => {
    return (
      <div>
        <div className={styles.spaceNameImg}>
          <Image src={spaceNameImg} alt="createSpace Logo" width={320} height={240} />
        </div>
        {!isMobile && <div className={styles.title}>{t(Strings.new_space)}</div>}
        <div className={styles.subTitle}>{t(Strings.new_space_tips)}</div>
        <Form>
          <Input
            className={err && err.code !== StatusCode.STATUS_OK ? 'error' : ''}
            placeholder={t(Strings.placeholder_input_workspace_name, {
              minCount: 2,
              maxCount: 100,
            })}
            onChange={handleChange}
            autoFocus
          />
          <div className={styles.errorMsg}>{err && err.code !== StatusCode.STATUS_OK ? err.msg : ''}</div>
          <Button
            color="primary"
            className={styles.submit}
            disabled={!spaceName || loading}
            loading={loading}
            size="large"
            block
            onClick={handleSubmit}
          >
            {t(Strings.submit)}
          </Button>
        </Form>
        <p className={styles.tip}>{t(Strings.change_space_name_tip)}</p>
      </div>
    );
  };

  if (isMobile) {
    return (
      <Drawer
        title={t(Strings.new_space)}
        placement="bottom"
        visible
        onClose={() => !loading && props.setShowCreateModal(false)}
        height={566}
        className={cls(styles.createSpaceWrapper, { [styles.createSpaceWrapperMobile]: isMobile })}
        headerStyle={{ borderBottom: 'none' }}
        closeIcon={<CloseOutlined size={16} color={colors.thirdLevelText} />}
      >
        {renderContent()}
      </Drawer>
    );
  }

  return (
    <Modal
      width={'90%'}
      visible
      footer={null}
      wrapClassName={styles.createSpaceWrapper}
      bodyStyle={{
        width: '370px',
        height: '720px',
        margin: '0 auto',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
      }}
      style={{ maxWidth: '1170px', minWidth: '800px' }}
      maskClosable
      onCancel={() => !loading && props.setShowCreateModal(false)}
      centered
    >
      {renderContent()}
    </Modal>
  );
};
