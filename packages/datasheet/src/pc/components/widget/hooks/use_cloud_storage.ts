import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { CollaCommandName, ResourceType } from '@apitable/core';
import { resourceService } from 'pc/resource_service';

import { useAppSelector } from 'pc/store/react-redux';

/**
 * Widget data storage.
 * For the currently running widget, provide a `useState` - like interface to store,
 * data is read and written by a specified key,
 * if you set the value multiple times the data will be sent to the collaborator at 500ms intervals,
 * key-value pairs are stored persistently.
 * When the value changes, re-render is triggered, changes in value may from other collaborator,
 * and it is not recommended to set default value when the widget first installed, because the initial default value
 * is the same of multiple collaborators. Setting defaults multiple times can result in pointless performance waste or event dead loops,
 * and data should be set up after changes in external data.
 */
export function useCloudStorage<S>(key: string, widgetId: string): [S, Dispatch<SetStateAction<S>>] {
  const [_initValue] = useState();
  const cloudStorageData = useAppSelector((state) => state.widgetMap[widgetId]?.widget?.snapshot.storage ?? null);

  return useMemo(() => {
    if (!resourceService.instance) {
      return ['', () => {}];
    }
    const value = cloudStorageData?.[key] as any;
    const setValue = (v: any) => {
      resourceService.instance!.commandManager.execute({
        cmd: CollaCommandName.SetGlobalStorage,
        key,
        value: v,
        resourceType: ResourceType.Widget,
        resourceId: widgetId,
      });
    };
    return [value || _initValue, setValue];
  }, [cloudStorageData, widgetId, key, _initValue]);
}
