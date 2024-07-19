

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const DingTalkAdminWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/dingtalk/dingtalk').then((components) => {
      return components.DingTalkAdmin;
    }),
  { ssr: false },
);

const App = () => {
  return DingTalkAdminWithNoSSR && <DingTalkAdminWithNoSSR />;
};

export default App;
