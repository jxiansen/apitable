import { useDispatch } from 'react-redux';
import { FieldOperateType, SetFieldFrom, StoreActions } from '@apitable/core';

export const useEditField = ({ datasheetId, fieldId, colIndex }: { datasheetId: string; fieldId: string; colIndex?: number }) => {
  const dispatch = useDispatch();
  return (e: MouseEvent) => {
    if (typeof colIndex !== 'number') return;

    const { clientX, clientY } = e;
    const fieldRectLeft = clientX - 340;
    const fieldRectBottom = window.innerHeight - clientY >= 360 ? clientY : clientY - 360;
    console.log({
      clientX,
      clientY,
      fieldRectLeft,
      fieldRectBottom,
      target: e.target,
    });
    dispatch(
      StoreActions.setActiveFieldState(datasheetId, {
        from: SetFieldFrom.EXPAND_RECORD,
        fieldId,
        fieldIndex: colIndex,
        fieldRectLeft: fieldRectLeft,
        fieldRectBottom: fieldRectBottom,
        clickLogOffsetX: 0,
        operate: FieldOperateType.FieldSetting,
      }),
    );
  };
};
