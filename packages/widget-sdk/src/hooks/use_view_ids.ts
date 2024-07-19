

import { Datasheet } from 'model';
import { useViews } from './private/use_views';

/**
 * Gets the ID of all view of the currently datasheet.
 * Rerendering is triggered when the number of views changes.
 * 
 * @returns
 * 
 * ### Example
 * ```js
 * import { useViewIds, useDatasheet } from '@apitable/widget-sdk';
 *
 * // Display the total number of views 
 * function ViewCount() {
 *   const viewIds = useViewIds();
 *   return <p>There are currently {viewIds.length} views</p>;
 * }
 * // Displays the total number of views corresponding to the datasheetId(dstXXXXXXXX) datasheet
 * function DatasheetViewCount() {
 *   const datasheet = useDatasheet('dstXXXXXXXX');
 *   const viewIds = useViewIds(datasheet);
 *   return <p>There are currently {viewIds.length} views</p>;
 * }
 * ```
 * 
 */
export function useViewIds(datasheet?: Datasheet) {
  const viewsData = useViews(datasheet?.datasheetId);
  return viewsData.map(view => view.id);
}
