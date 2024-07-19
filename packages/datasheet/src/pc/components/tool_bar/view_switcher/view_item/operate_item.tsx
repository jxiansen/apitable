

import { Tooltip } from 'antd';
import * as React from 'react';
import { stopPropagation, useThemeColors } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { CopyOutlined, DeleteOutlined, DragOutlined, EditOutlined } from '@apitable/icons';
import { ScreenSize } from 'pc/components/common/component_display';
import { RenameInput } from 'pc/components/common/rename_input';
import { useResponsive } from 'pc/hooks/use_responsive';
import styles from './style.module.less';

interface IOperateData {
  delete?: {
    show: boolean;
    tooltip: string;
    onClick(e: React.MouseEvent, id: string): void;
  };
  rename?: {
    show: boolean;
    tooltip: string;
    onClick(e: React.MouseEvent, id: string): void;
  };
  duplicate?: {
    show: boolean;
    tooltip: string;
    onClick(e: React.MouseEvent, id: string): void;
  };
}

interface IOperateItemProps {
  allowSort: boolean;
  editing: boolean;
  prefixIcon: JSX.Element;
  isActive: boolean;
  onItemClick(e?: React.MouseEvent): void;
  operateData: IOperateData;
  id: string;
  inputData: {
    errMsg: string;
    value: string;
    onEnter(e?: React.KeyboardEvent | React.FocusEvent): void;
    onChange(e?: React.ChangeEvent): void;
  };
  suffixIcon?: JSX.Element;
}

export const OperateItem: React.FC<React.PropsWithChildren<IOperateItemProps>> = (props) => {
  const { editing, allowSort, prefixIcon, isActive, onItemClick, operateData, id, inputData, suffixIcon } = props;
  const colors = useThemeColors();

  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);

  const operateIconColor = isMobile ? colors.thirdLevelText : colors.secondLevelText;
  return (
    <div className={styles.operateItem}>
      {allowSort && (
        <div className={styles.iconMove}>
          <DragOutlined size={14} color={colors.secondLevelText} />
        </div>
      )}
      {!editing && (
        <div className={styles.iconType}>
          {React.cloneElement(prefixIcon, {
            color: isActive ? colors.primaryColor : colors.thirdLevelText,
          })}
        </div>
      )}
      <div style={isActive ? { color: colors.primaryColor } : {}} className={styles.text}>
        {editing ? (
          <RenameInput
            errorMsg={inputData.errMsg}
            customStyle={styles.editViewNameInput}
            defaultValue={inputData.value}
            onChange={inputData.onChange}
            onClick={stopPropagation}
            onPressEnter={inputData.onEnter}
            prefix={React.cloneElement(prefixIcon, {
              fill: colors.secondLevelText,
            })}
            onBlur={inputData.onEnter}
            autoFocus
          />
        ) : (
          <span onClick={onItemClick} className={styles.name}>
            {inputData.value}
            {suffixIcon}
          </span>
        )}
      </div>
      {operateData.duplicate && operateData.duplicate.show && (
        <div
          className={styles.iconRename}
          onClick={(e) => {
            operateData.duplicate!.onClick(e, id);
          }}
          data-test-id={'copyViewIcon'}
        >
          {!isMobile ? (
            <Tooltip title={t(Strings.duplicate)} placement="bottom">
              <CopyOutlined size={16} color={operateIconColor} />
            </Tooltip>
          ) : (
            <CopyOutlined size={16} color={operateIconColor} />
          )}
        </div>
      )}
      {operateData.rename && operateData.rename.show && (
        <div
          className={styles.iconRename}
          onClick={(e) => {
            operateData.rename!.onClick(e, id);
          }}
          data-test-id={'renameViewIcon'}
        >
          {!isMobile ? (
            <Tooltip title={t(Strings.rename)} placement="bottom">
              <EditOutlined size={16} color={operateIconColor} />
            </Tooltip>
          ) : (
            <EditOutlined size={16} color={operateIconColor} />
          )}
        </div>
      )}
      {operateData.delete && operateData.delete.show && (
        <div
          className={styles.iconDelete}
          onClick={(e) => {
            operateData.delete!.onClick(e, id);
          }}
          data-test-id={'deleteViewIcon'}
        >
          {!isMobile ? (
            <Tooltip title={t(Strings.delete)} placement="bottom">
              <DeleteOutlined size={16} color={operateIconColor} />
            </Tooltip>
          ) : (
            <DeleteOutlined size={16} color={operateIconColor} />
          )}
        </div>
      )}
    </div>
  );
};
