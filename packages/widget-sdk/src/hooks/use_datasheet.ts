

import { useContext, useMemo } from 'react';
import { IWidgetContext } from 'interface';
import { WidgetContext } from '../context';
import { useMeta } from './use_meta';
import { Datasheet } from '../model';
import { getWidgetDatasheetPack } from 'store';
import { eventMessage, widgetMessage } from 'message';
import { isSandbox } from 'utils/private';

/**
 * A hook for connecting a React component to your datasheet's schema.
 * Datasheet will provide the interface to make update to datasheet date, and check permission.
 * 
 * @param
 * 
 * @returns Datasheet instance
 * ### Example
 * ```js
 * import { useDatasheet } from '@apitable/widget-sdk';
 *
 * function AddRecord() {
 *   const datasheet = useDatasheet();
 *   const [error, setError] = useState();
 *   // The key of the parameter is the fieldId and the value is the cell value
 *   const valuesMap = {
 *     fld1234567980: 'this is a text value',
 *     fld0987654321: 1024,
 *   }
 *   function addRecord(valuesMap) {
 *     if (!datasheet) {
 *       return;
 *     }
 *     const permission = datasheet.checkPermissionsForAddRecord(valuesMap)
 *     if (permission.acceptable) {
 *       datasheet.addRecord(valuesMap);
 *       return;
 *     }
 *     setError(permission.message);
 *   }
 *   return (<div>
 *     {error && <p>{error}</p>}
 *     <button onClick={() => addRecord(valuesMap)}>add a new record</button>
 *   </div>);
 * }
 * 
 * ```
 * 
 */

export function useDatasheet(datasheetId?: string | undefined) {
  const context = useContext<IWidgetContext>(WidgetContext);
  const { datasheetId: metaDatasheetId } = useMeta();
  const _datasheetId = datasheetId || metaDatasheetId;
  const datasheetObj = getWidgetDatasheetPack(context.widgetStore.getState(), datasheetId);
  if (datasheetId && (!datasheetObj || datasheetObj.datasheet?.isPartOfData)) {
    isSandbox() ? widgetMessage.fetchDatasheet({ datasheetId }) : eventMessage.fetchDatasheet({ datasheetId }, context.id);
  }

  return useMemo(() => {
    if (!_datasheetId) return undefined;
    return new Datasheet(_datasheetId, context);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_datasheetId, context, datasheetObj]);
}
