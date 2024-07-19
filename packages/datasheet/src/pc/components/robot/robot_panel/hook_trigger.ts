import axios from 'axios';
import { useAtomValue } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { getLanguage } from '@apitable/core';

import { getFilterActionTypes } from 'pc/components/robot/helper';
import { IActionType, ITriggerType } from 'pc/components/robot/interface';
import { loadableWithDefault } from 'pc/components/robot/robot_detail/api';
import { covertThemeIcon } from 'pc/components/robot/utils';
import { useAppSelector } from 'pc/store/react-redux';

const nestReq = axios.create({
  baseURL: '/nest/v1/',
});

const [triggerTypesAtom] = atomsWithQuery((get) => ({
  queryKey: [`/automation/trigger-types?lang=${getLanguage()}`],
  queryFn: async ({ queryKey: [url] }) => {
    const resp = await nestReq.get(String(url));
    return resp?.data?.data;
  },
  cacheTime: Infinity,
}));

const loadableTriggerAtom = loadableWithDefault(triggerTypesAtom, []);

const [actionTypesAtom] = atomsWithQuery((get) => ({
  queryKey: [`/automation/action-types?lang=${getLanguage()}`],
  queryFn: async ({ queryKey: [url] }) => {
    const r = await nestReq.get(String(url));
    return r?.data?.data;
  },
  cacheTime: Infinity,
}));

const loadableActionTypesAtom = loadableWithDefault(actionTypesAtom, []);

export const useTriggerTypes = (): { loading: boolean; data: ITriggerType[] } => {
  const themeName = useAppSelector((state) => state.theme);
  const value = useAtomValue(loadableTriggerAtom);

  if (value.loading) {
    return {
      loading: true,
      data: [],
    };
  }

  return {
    loading: false,
    // @ts-ignore
    data: covertThemeIcon(value.data, themeName),
  };
};

export const useActionTypes = (): { loading: boolean; originData: IActionType[]; data: IActionType[] } => {
  const themeName = useAppSelector((state) => state.theme);
  const actionTypeData = useAtomValue(loadableActionTypesAtom);
  const themedList = covertThemeIcon(actionTypeData?.data, themeName);
  if (actionTypeData.loading) {
    return {
      loading: true,
      data: [],
      originData: [],
    };
  }
  return {
    loading: false,
    originData: themedList,
    // @ts-ignore
    data: getFilterActionTypes(themedList),
  };
};
