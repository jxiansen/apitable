import { FieldType, IReduxState, Selectors, StoreActions } from '@apitable/core';
import { store } from 'pc/store';

export const getDatasheetOrLoad = (
  state: IReduxState,
  foreignDatasheetId: string,
  dstId?: string,
  assignDstId?: boolean,
  forceFetch?: boolean,
  ignoreMirror?: boolean,
) => {
  const { formId, mirrorId } = state.pageParams;
  const datasheetId = dstId || state.pageParams.datasheetId;
  const datasheet = Selectors.getDatasheet(state, foreignDatasheetId);
  const datasheetLoading = Selectors.getDatasheetLoading(state, foreignDatasheetId);
  const datasheetErrorCode = Selectors.getDatasheetErrorCode(state, foreignDatasheetId);
  const fieldMap = datasheet?.snapshot.meta?.fieldMap;
  // check if foreign datasheet has link relationship
  const isforeignDatasheetIdRelated = fieldMap
    ? Object.values(fieldMap).some(
        (field) => [FieldType.Link, FieldType.OneWayLink].includes(field.type) && field.property.foreignDatasheetId === foreignDatasheetId,
      )
    : true;

  if (
    isforeignDatasheetIdRelated &&
    (forceFetch || (!datasheet && !datasheetLoading && !datasheetErrorCode) || (datasheet?.isPartOfData && !datasheetLoading && !datasheetErrorCode))
  ) {
    if (formId) {
      store.dispatch(StoreActions.fetchForeignDatasheet(formId, foreignDatasheetId, forceFetch));
      return null;
    }
    if (mirrorId && !ignoreMirror) {
      store.dispatch(StoreActions.fetchForeignDatasheet(mirrorId, foreignDatasheetId, forceFetch));
      return null;
    }
    if (assignDstId && datasheetId) {
      store.dispatch(StoreActions.fetchForeignDatasheet(datasheetId, foreignDatasheetId, forceFetch));
      return null;
    }
  }
  return datasheet;
};
