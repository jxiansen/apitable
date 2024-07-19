import { template } from 'lodash';
import { useCallback } from 'react';
import { Selectors } from '@apitable/core';

import { useAppSelector } from 'pc/store/react-redux';

export const useApplyOpenFunction = () => {
  const spaceId = useAppSelector(Selectors.activeSpaceId);
  return useCallback(
    (url: string) => {
      const toUrl = template(url)({ spaceID: spaceId });
      toUrl && window.open(toUrl);
    },
    [spaceId],
  );
};
