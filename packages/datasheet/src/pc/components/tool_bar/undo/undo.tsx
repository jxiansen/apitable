import { Tooltip } from 'antd';
import * as React from 'react';
import { shallowEqual } from 'react-redux';
import { IconButton, useThemeColors } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { RedoOutlined, UndoOutlined } from '@apitable/icons';
import { ShortcutActionName } from 'modules/shared/shortcut_key';
import { getShortcutKeyString } from 'modules/shared/shortcut_key/keybinding_config';
import { notify } from 'pc/components/common/notify';
import { NotifyKey } from 'pc/components/common/notify/notify.interface';
import { resourceService } from 'pc/resource_service';
import { useAppSelector } from 'pc/store/react-redux';
import styles from '../style.module.less';

export const Undo: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className }) => {
  const colors = useThemeColors();
  const undo = () => {
    if (undoLength) {
      resourceService.instance!.undoManager?.undo();
      notify.open({ message: t(Strings.shortcut_key_undo), key: NotifyKey.Undo });
    }
  };

  const redo = () => {
    if (redoLength) {
      resourceService.instance!.undoManager?.redo();
      notify.open({ message: t(Strings.shortcut_key_redo), key: NotifyKey.Undo });
    }
  };

  const { undoLength, redoLength } = useAppSelector(() => {
    return {
      undoLength: resourceService.instance!.undoManager?.getStockLength('undo'),
      redoLength: resourceService.instance!.undoManager?.getStockLength('redo'),
    };
  }, shallowEqual);
  const ReactUndoIcon = () => <UndoOutlined size={16} color={colors.secondLevelText} className={styles.toolIcon} />;
  const ReactRedoIcon = () => <RedoOutlined size={16} color={colors.secondLevelText} className={styles.toolIcon} />;
  return (
    <div className={className}>
      <Tooltip title={`${t(Strings.undo)} ${getShortcutKeyString(ShortcutActionName.Undo)}`}>
        <IconButton
          disabled={!undoLength}
          shape="square"
          onClick={undo}
          style={{ marginRight: 8, color: colors.secondLevelText }}
          data-test-id={'undo'}
          icon={ReactUndoIcon}
        />
      </Tooltip>
      <Tooltip title={`${t(Strings.redo)} ${getShortcutKeyString(ShortcutActionName.Redo)}`}>
        <IconButton
          shape="square"
          style={{ color: colors.secondLevelText }}
          disabled={!redoLength}
          onClick={redo}
          data-test-id={'redo'}
          icon={ReactRedoIcon}
        />
      </Tooltip>
    </div>
  );
};
