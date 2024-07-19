

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IQuery } from 'pc/components/route_manager/interface';

export function useQuery() {
  if (process.env.SSR) {
    return new Map();
  }
  return new URLSearchParams(window.location.search);
}

/**
 * URLSearchParams
 * @param urlSearchParams
 * @returns
 */
const urlSearchParamsToObject = (urlSearchParams: URLSearchParams) => {
  const queryObj = {};
  urlSearchParams.forEach((value, key) => {
    queryObj[key] = value;
  });
  return queryObj;
};

export function useUrlQuery(): IQuery {
  const router = useRouter();
  const [query, setQuery] = useState<IQuery>(router.query);
  useEffect(() => {
    const routeChangeCompleteFn = (url: string) => {
      const queryStr = url?.split('?')?.[1];
      const urlSearchParams = new URLSearchParams(queryStr);
      setQuery(urlSearchParamsToObject(urlSearchParams));
    };
    router.events.on('routeChangeComplete', routeChangeCompleteFn);
    return () => router.events.off('routeChangeComplete', routeChangeCompleteFn);
  }, [router.events, setQuery]);
  return query;
}
