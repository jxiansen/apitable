import { useDebounceEffect } from 'ahooks';
import { shallowEqual } from 'react-redux';
import { colors } from '@apitable/components';
import { CollaCommandName, Selectors, Strings, t } from '@apitable/core';
import { CloseOutlined } from '@apitable/icons';
import { Message } from 'pc/components/common';
import { resourceService } from 'pc/resource_service';
import { useAppSelector } from 'pc/store/react-redux';
import { executeCommandWithMirror } from 'pc/utils/execute_command_with_mirror';
import { GRID_ROW_HEAD_WIDTH } from '../constant';
import styles from '../style.module.less';

interface IUseGridMessageProps {
  text?: string;
  containerWidth: number;
  firstColumnWidth: number;
}

export const useGridMessage = (props: IUseGridMessageProps) => {
  const { text = t(Strings.freeze_tips_when_windows_too_narrow), containerWidth, firstColumnWidth } = props;
  const { view, visibleColumns } = useAppSelector((state) => {
    return {
      view: Selectors.getCurrentView(state)!,
      visibleColumns: Selectors.getVisibleColumns(state),
    };
  }, shallowEqual);
  const firstFieldId = visibleColumns[0].fieldId;

  useDebounceEffect(() => {
    if (containerWidth <= 0) return;
    Message.destroy();

    const maxWidth = containerWidth - GRID_ROW_HEAD_WIDTH;
    if (firstColumnWidth > maxWidth) {
      const onClick = () => {
        const finalWidth = Math.floor(maxWidth * 0.8);
        executeCommandWithMirror(
          () => {
            resourceService.instance!.commandManager.execute({
              cmd: CollaCommandName.SetColumnsProperty,
              viewId: view.id,
              fieldId: firstFieldId,
              data: {
                width: finalWidth,
              },
            });
          },
          {
            columns: visibleColumns.map((column) => {
              return column.fieldId === firstFieldId ? { ...column, width: finalWidth } : column;
            }),
          },
        );
      };

      Message.warning({
        content: (
          <div className={styles.tooltip}>
            {text}
            <a className={styles.frozenBtn} onClick={onClick}>
              {t(Strings.freeze_click_when_windows_too_narrow)}
            </a>
            <CloseOutlined color={colors.secondLevelText} className={styles.closeBtn} onClick={() => Message.destroy()} />
          </div>
        ) as any,
        duration: undefined,
      });
    }
  }, [containerWidth, firstColumnWidth, text]);
};
