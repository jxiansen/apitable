import { FC } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line no-restricted-imports
import { Select, Typography } from '@apitable/components';
import { RecordVision, StoreActions, Strings, t } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { setStorage, StorageMethod, StorageName } from 'pc/utils/storage';
import styles from './style.module.less';

const options = [
  {
    label: t(Strings.expand_record_vision_setting_center),
    value: RecordVision.Center,
  },
  {
    label: t(Strings.expand_record_vision_setting_side),
    value: RecordVision.Side,
  },
];

export const RecordVisionSetting: FC<React.PropsWithChildren<unknown>> = () => {
  const value = useAppSelector((state) => state.recordVision);

  const dispatch = useDispatch();

  const handleSelected = (option: any) => {
    const newValue: RecordVision = option.value;
    if (newValue === value) {
      return;
    }
    setStorage(StorageName.RecordVision, newValue, StorageMethod.Set);
    dispatch(StoreActions.setRecordVision(newValue));
    dispatch(StoreActions.toggleSideRecord(false));
  };

  return (
    <div className={styles.expandRecordVisionSetting}>
      <Typography variant="h7" className={styles.title}>
        {t(Strings.expand_record_vision_setting)}
      </Typography>
      <Select
        options={options}
        value={value || RecordVision.Center}
        onSelected={handleSelected}
        dropdownMatchSelectWidth
        triggerStyle={{ width: 200 }}
      />
    </div>
  );
};
