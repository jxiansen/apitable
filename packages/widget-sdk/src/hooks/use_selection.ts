

import { shallowEqual, useSelector } from 'react-redux';
import { useMeta } from './use_meta';
import { IWidgetState } from 'interface';
import { isCurrentDatasheetActive } from '../store/selector';
import { Selectors } from 'core';
import { IReduxState } from '@apitable/core';

const getSelectedFieldIds = (state: IWidgetState, currentDatasheetId?: string) => {
  if (!isCurrentDatasheetActive(state, currentDatasheetId)) {
    return;
  }

  // TODO: to read directly from the Range.
  const matrix = Selectors.getCellMatrixFromSelection(state as unknown as IReduxState);

  if (!matrix) {
    return;
  }

  const fieldIds: string[] = [];
  const recordIds: string[] = [];
  const columnsCell = matrix[0] || [];
  matrix.forEach(row => {
    if (!row[0]) {
      return;
    }
    recordIds.push(row[0].recordId);
  });
  columnsCell.forEach(col => {
    fieldIds.push(col.fieldId);
  });
  return {
    recordIds,
    fieldIds,
  };
};

/**
 * Get the recordId and fieldId of the region selected by the current cell cursor. 
 * Rerendering is triggered when the cursor is moved or the view is switched.
 *
 * If you only need information about the active cell, please use {@link useActiveCell}.
 *
 * @returns
 * 
 * ### Example
 * ```js
 * import { useSelection, useRecords, useFields, useActiveViewId } from '@apitable/widget-sdk';
 *
 * // Render the currently selection information
 * function Selection() {
 *   const selection = useSelection();
 *   const viewId = useActiveViewId();
 *   const records = useRecords(viewId, { ids: selection?.recordIds });
 *   const fields = useFields(viewId, { ids: selection?.fieldIds });
 *
 *   return (<table>
 *     <thead>
 *       <tr>
 *         {fields.map(field => <th key={field.id}>{field.name || '_'}</th>)}
 *       </tr>
 *     </thead>
 *     <tbody>
 *       {records.map(record =>
 *         <tr key={record.id}>
 *           {fields.map(field =>
 *             <td key={field.id}>{record.getCellValueString(field.id) || '_'}</td>
 *           )}
 *        </tr>
 *       )}
 *     </tbody>
 *   </table>);
 * }
 * ```
 * 
 */
export function useSelection() {
  const { datasheetId } = useMeta();
  return useSelector(state => {
    return getSelectedFieldIds(state, datasheetId);
  }, shallowEqual);
}