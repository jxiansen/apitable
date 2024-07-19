

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const ApplyLogoutWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/home/apply_logout/apply_logout').then((components) => {
      return components.ApplyLogout;
    }),
  { ssr: false },
);

const App = () => {
  return ApplyLogoutWithNoSSR && <ApplyLogoutWithNoSSR />;
};

export default App;
