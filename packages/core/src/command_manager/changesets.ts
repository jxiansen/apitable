

import { IResourceOpsCollect } from 'command_manager';
import { ILocalChangeset } from 'engine';
import { IReduxState } from 'exports/store/interfaces';
import { getDashboard } from 'modules/database/store/selectors/resource/dashboard';
import { getDatasheet } from 'modules/database/store/selectors/resource/datasheet/base';

import { ResourceType } from 'types';
import { generateRandomString } from 'utils';

export function resourceOpsToChangesets(resourceOpsCollects: IResourceOpsCollect[], state: IReduxState): ILocalChangeset[] {
  const changesetMap: Map<string, ILocalChangeset> = new Map();
  resourceOpsCollects.forEach(collect => {
    const { resourceId, resourceType, operations } = collect;
    // One datasheet, one changeset
    let changeset = changesetMap.get(resourceId);
    if (!changeset) {
      let revision;
      if (resourceType == ResourceType.Dashboard) {
        revision = getDashboard(state, resourceId)?.revision;
      } else {
        revision = getDatasheet(state, resourceId)?.revision;
      }
      changesetMap.set(
        resourceId,
        (changeset = {
          baseRevision: revision!,
          messageId: generateRandomString(),
          resourceId,
          resourceType,
          operations,
        }),
      );
    } else {
      changeset.operations.push(...operations);
    }
  });
  return [...changesetMap.values()];
}
