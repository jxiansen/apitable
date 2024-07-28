import { Selectors, FieldType, CollaCommandName, t, Strings, ExecuteResult } from '@apitable/core';
import { ShortcutActionManager, ShortcutActionName } from 'modules/shared/shortcut_key';
import { Modal } from 'pc/components/common/modal/modal/modal';
import { notify } from 'pc/components/common/notify';
import { resourceService } from 'pc/resource_service';
import { store } from 'pc/store';
import { NotifyKey } from '../notify/notify.interface';
import { deleteLinkFieldConfirm } from './delete_link_field_confirm';

export function fieldChangeConfirm(props: { fieldId: string; datasheetId?: string; onCancel?: () => void; onOk?: () => void }) {
  const { fieldId, datasheetId, onCancel, onOk } = props;

  const state = store.getState();
  const snapshot = Selectors.getSnapshot(state, datasheetId)!;
  const field = snapshot.meta.fieldMap[fieldId];
  if (field.type === FieldType.Link && field.property.brotherFieldId) {
    return deleteLinkFieldConfirm(props);
  }
  const fieldRanges = Selectors.getFieldRanges(state);
  const visibleColumns = Selectors.getVisibleColumns(state);

  const fieldIds = fieldRanges ? fieldRanges.filter((fieldId) => fieldId !== visibleColumns[0].fieldId) : [];
  const count = fieldIds.length;

  const onConfirmClose = async () => {
    if (!datasheetId) {
      await ShortcutActionManager.trigger(ShortcutActionName.Focus);
    }
    onCancel && onCancel();
  };

  Modal.confirm({
    title:
      count > 1
        ? t(Strings.delete_n_columns, {
            count,
          })
        : t(Strings.delete_field_tips_title),
    content:
      count > 1
        ? t(Strings.these_columns_you_chose_would_be_deleted, { count })
        : t(Strings.delete_field_tips_content, {
            field_title: field.name,
          }),
    cancelText: t(Strings.cancel),
    okText: t(Strings.confirm),
    onOk: () => {
      const { result } = resourceService.instance!.commandManager.execute({
        cmd: CollaCommandName.DeleteField,
        data: fieldRanges ? fieldIds.map((fieldId) => ({ fieldId })) : [{ fieldId }],
        datasheetId,
      });
      if (ExecuteResult.Success === result) {
        onOk && onOk();
        notify.open({
          message: t(Strings.delete_field_success),
          btnText: t(Strings.undo),
          key: NotifyKey.DeleteField,
          btnFn: async (): Promise<void> => {
            await ShortcutActionManager.trigger(ShortcutActionName.Undo);
            notify.close(NotifyKey.DeleteField);
          },
        });
      }
    },
    onCancel: onConfirmClose,
    type: 'danger',
  });
}
