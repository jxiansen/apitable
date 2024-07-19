import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { uniqBy } from 'lodash';

/**
 * Get information(including yourself) about collaborators of the environment where the widget is currently running,
 * which include dashboard, datasheet, mirror.
 *
 *
 * Writing to member field cells using collaborator IDs is not supported at this time.
 *
 * Note: Since the datasheet can be shared, the id, name, and avatar of the collaborator in the case of not being logged in are undefined.
 *
 * @returns
 *
 * ### Example
 * ```js
 * import { useCollaborators } from '@apitable/widget-sdk';
 *
 * // show the currently environment collaborator of the widget
 * function Meta() {
 *   const collaborators = useCollaborators();
 *   return (<div>
 *     <div>Current collaborator: {collaborators.map(collaborator => {
 *       return <p>{collaborator.name || 'Aliens'}</p>
 *     })}</div>
 *   </div>);
 * }
 * ```
 *
 */
export function useCollaborators() {
  const collaborators = useSelector((state) => {
    return state.collaborators;
  });
  return useMemo(() => {
    return uniqBy(collaborators, 'userId').map((collaborator) => ({
      id: collaborator.userId,
      name: collaborator.memberName || collaborator.userName,
      avatar: collaborator.avatar,
    }));
  }, [collaborators]);
}
