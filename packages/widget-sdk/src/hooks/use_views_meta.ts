import { pickViewProperty } from './use_view_meta';
import { Datasheet } from 'model';
import { useViews } from './private/use_views';

/**
 * `Beta API`, possible feature changes.
 *
 * Get the metadata property of the all views.
 * Rerendering is triggered when the order of views changes or the metadata property changes.
 *
 * @returns
 *
 * ### Example
 * ```js
 * import { useViewsMeta, useDatasheet } from '@apitable/widget-sdk';
 *
 * // Show all views name
 * function ViewNames() {
 *   const viewsMeta = useViewsMeta();
 *   return (<div>
 *     {viewsMeta.map(viewMeta => <p>View names: {viewMeta.name}</p>)}
 *   </div>);
 * }
 *
 * // Show the names of all views corresponding to the datasheetId(dstXXXXXXXX) datasheet
 * function DatasheetViewNames() {
 *   const datasheet = useDatasheet('dstXXXXXXXX');
 *   const viewsMeta = useViewsMeta(datasheet);
 *   return (<div>
 *     {viewsMeta.map(viewMeta => <p>View names: {viewMeta.name}</p>)}
 *   </div>);
 * }
 * ```
 *
 */
export function useViewsMeta(datasheet?: Datasheet) {
  const viewsData = useViews(datasheet?.datasheetId);
  return viewsData.map((viewData) => {
    return pickViewProperty(viewData);
  });
}
