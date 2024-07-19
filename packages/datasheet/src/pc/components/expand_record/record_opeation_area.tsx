

import { Tooltip } from 'antd';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { colorVars, IconButton, LinkButton } from '@apitable/components';
import { StoreActions, Strings, t } from '@apitable/core';
import { CloseOutlined, ExpandOutlined, GotoOutlined, NarrowOutlined } from '@apitable/icons';

import { useAppSelector } from 'pc/store/react-redux';
import { RecordPageTurn } from './record_page_turn/record_page_turn';
import styles from './style.module.less';

interface IRecordOperationArea {
  datasheetId: string;
  viewId: string;
  recordIds: string[];
  activeRecordId: string;
  fromCurrentDatasheet: boolean;
  switchRecord: (index: number) => void;
  gotoSourceDst: () => void;
  modalClose: () => void;
  showPageTurn?: boolean;
}

export const RecordOperationArea: React.FC<React.PropsWithChildren<IRecordOperationArea>> = (props) => {
  const { datasheetId, activeRecordId, recordIds, fromCurrentDatasheet, modalClose, switchRecord, gotoSourceDst, showPageTurn } = props;
  const dispatch = useDispatch();
  const isEmbed = useAppSelector((state) => Boolean(state.pageParams.embedId));
  const isRecordFullScreen = useAppSelector((state) => state.space.isRecordFullScreen);
  const showLinkBtn = !fromCurrentDatasheet && !isEmbed;
  const showOperateArea = showLinkBtn || showPageTurn;
  return (
    <div className={styles.operateAreaWrapper}>
      {showOperateArea && (
        <div className={styles.operateArea}>
          <span className={styles.divideLine} />
          {showLinkBtn && (
            <LinkButton
              underline={false}
              component="button"
              prefixIcon={<GotoOutlined color={colorVars.fc3} />}
              color={colorVars.fc2}
              className={styles.sourceButton}
              onClick={gotoSourceDst}
            >
              {t(Strings.goto_datasheet_record)}
            </LinkButton>
          )}
          {showPageTurn && (
            <RecordPageTurn activeRecordId={activeRecordId} datasheetId={datasheetId} recordIds={recordIds} switchRecord={switchRecord} />
          )}
          <span className={styles.divideLine} />
        </div>
      )}
      <Tooltip title={t(Strings.expand_record_vision_btn_tooltip_full_screen)}>
        <IconButton
          component="button"
          shape="square"
          icon={() => (isRecordFullScreen ? <NarrowOutlined size={16} color={colorVars.fc3} /> : <ExpandOutlined size={16} color={colorVars.fc3} />)}
          onClick={() => {
            dispatch(StoreActions.toggleRecordFullScreen());
          }}
          style={{ marginLeft: 4 }}
        />
      </Tooltip>
      <IconButton
        component="button"
        shape="square"
        icon={() => <CloseOutlined size={16} color={colorVars.fc3} />}
        onClick={() => modalClose()}
        style={{ marginLeft: 8 }}
      />
    </div>
  );
};
