import { isObject } from 'lodash';
import { useState, useEffect } from 'react';
import { Selectors } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
// @ts-ignore
import { isSocialWecom } from 'enterprise/home/social_platform/utils';
// @ts-ignore
import { WecomOpenDataType } from 'enterprise/wecom/wecom_open_data/wecom_open_data';

interface IWxTitleMap {
  userNames?: { name: string; unitId: string }[];
}

// Enterprise Wecom members canvas name collection
export const useWxTitleMap = (props: IWxTitleMap = {}) => {
  const { userNames } = props;
  const unitMap = useAppSelector(Selectors.getUnitMap);
  const spaceInfo = useAppSelector((state) => state.space.curSpaceInfo);
  // Enterprise Wecom member name collection
  const [unitTitleMap, setUnitTitleMap] = useState<object>({});
  const WWOpenData: {
    initCanvas?: () => void;
    prefetch: (e: any, t: any) => void;
  } = (window as any).WWOpenData;
  useEffect(() => {
    const units = userNames || (unitMap && Object.values(unitMap));
    if (isSocialWecom?.(spaceInfo) && Array.isArray(units) && isObject(WWOpenData)) {
      // IOS system probability undefined
      if (WWOpenData.initCanvas) {
        WWOpenData.initCanvas();
        const items = units.map((item) => ({ type: WecomOpenDataType.UserName, id: item.name }));
        const fetchData = async () => {
          const result: { items: { data: string }[] } = await new Promise((resolve, reject) => {
            WWOpenData.prefetch({ items }, (err: any, data: any) => {
              if (err) {
                return reject(err);
              }
              resolve(data);
            });
          });
          const newTitles = {};
          result?.items.forEach((r, idx) => {
            newTitles[units[idx]?.unitId] = r.data;
          });
          setUnitTitleMap(newTitles);
        };
        fetchData();
      }
    }
    // eslint-disable-next-line
  }, [unitMap, WWOpenData, spaceInfo]);
  return {
    unitTitleMap,
  };
};
