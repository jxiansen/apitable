import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { colors, IconButton } from '@apitable/components';
import { RecordVision, StoreActions, Strings, t } from '@apitable/core';
import { IIconProps, MiddlescreenOutlined, SidescreenOutlined } from '@apitable/icons';
// eslint-disable-next-line no-restricted-imports
import { Tooltip } from 'pc/components/common';
import { useAppSelector } from 'pc/store/react-redux';
import { setStorage, StorageMethod, StorageName } from 'pc/utils/storage';
import styles from './style.module.less';

interface IIconButtonProps {
  active: boolean;
  tooltipText: string;
  onClick: () => void;
  icon: React.FC<React.PropsWithChildren<IIconProps>>;
}

const OptionButton = ({ active, onClick, tooltipText, icon: Icon }: IIconButtonProps): JSX.Element => {
  return (
    <Tooltip title={tooltipText}>
      <IconButton
        component="button"
        shape="square"
        className={active ? styles.activeIcon : styles.icon}
        icon={() => <Icon size={16} color={active ? colors.fc0 : colors.fc3} />}
        onClick={() => onClick()}
      />
    </Tooltip>
  );
};

const ExpandRecordVisionOptionBase: FC<React.PropsWithChildren<unknown>> = () => {
  const recordVision = useAppSelector((state) => state.recordVision);
  const dispatch = useDispatch();
  const isRecordFullScreen = useAppSelector((state) => state.space.isRecordFullScreen);

  return (
    <div className={styles.visionOptionWrap}>
      <div className={styles.visionOption}>
        <span className={styles.divideLine} />
        <OptionButton
          active={!isRecordFullScreen && recordVision === RecordVision.Center}
          tooltipText={t(Strings.expand_record_vision_btn_tooltip_center)}
          icon={MiddlescreenOutlined}
          onClick={() => {
            setStorage(StorageName.RecordVision, RecordVision.Center, StorageMethod.Set);
            dispatch(StoreActions.setRecordVision(RecordVision.Center));
            dispatch(StoreActions.toggleSideRecord(false));
            dispatch(StoreActions.toggleRecordFullScreen(false));
          }}
        />
        <OptionButton
          active={!isRecordFullScreen && recordVision === RecordVision.Side}
          tooltipText={t(Strings.expand_record_vision_btn_tooltip_side)}
          icon={SidescreenOutlined}
          onClick={() => {
            setStorage(StorageName.RecordVision, RecordVision.Side, StorageMethod.Set);
            dispatch(StoreActions.setRecordVision(RecordVision.Side));
            dispatch(StoreActions.toggleSideRecord(true));
            // setIsFullScreen(false);
            dispatch(StoreActions.toggleRecordFullScreen(false));
          }}
        />
      </div>
    </div>
  );
};

export const ExpandRecordVisionOption = React.memo(ExpandRecordVisionOptionBase);
