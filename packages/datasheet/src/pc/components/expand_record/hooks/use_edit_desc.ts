

import { useDispatch } from 'react-redux';
import { FieldOperateType, SetFieldFrom, StoreActions } from '@apitable/core';

export const useEditDesc = ({ colIndex, datasheetId, fieldId }: { datasheetId: string; fieldId: string; colIndex?: number }) => {
  const dispatch = useDispatch();

  return (e: MouseEvent) => {
    if (typeof colIndex !== 'number') return;

    const { clientX, clientY } = e;
    const fieldRectLeft = clientX - 410;
    const fieldRectBottom = window.innerHeight - clientY >= 165 ? clientY : clientY - 165;

    dispatch(
      StoreActions.setActiveFieldState(datasheetId, {
        from: SetFieldFrom.EXPAND_RECORD,
        fieldId,
        fieldIndex: colIndex,
        fieldRectLeft: fieldRectLeft,
        fieldRectBottom: fieldRectBottom,
        clickLogOffsetX: 0,
        operate: FieldOperateType.FieldDesc,
      }),
    );
  };
};
