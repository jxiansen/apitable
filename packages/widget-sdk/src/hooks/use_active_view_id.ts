import { useSelector } from 'react-redux';

/**
 * Get the view ID of currently active view, return a value of string.
 * When views switched, re-rendering is triggered.
 *
 * @param
 *
 * @returns
 *
 * ### Example
 * ```js
 * import { useActiveViewId, useViewMeta } from '@apitable/widget-sdk';
 *
 * // Render the currently selected view name
 * function ActiveView() {
 *   const activeViewId = useActiveViewId();
 *   const viewMeta = useViewMeta(activeViewId);
 *   if (!viewMeta) {
 *     return <p>Inactive view</p>
 *   }
 *   return <p>Currently active views: {viewMeta.name}</p>
 * }
 * ```
 */
export function useActiveViewId() {
  return useSelector((state) => state.pageParams?.viewId);
}
