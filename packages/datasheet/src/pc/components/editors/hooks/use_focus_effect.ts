

import { DependencyList, EffectCallback, useEffect } from 'react';
import { usePlatform } from 'pc/hooks/use_platform';

export const useFocusEffect = (focusFn: EffectCallback, deps: DependencyList = []) => {
  const { mobile } = usePlatform();

  useEffect(() => {
    if (mobile) {
      return;
    }
    focusFn();
    // eslint-disable-next-line
  }, deps);
};
