import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const DingTalkLoginWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/dingtalk/dingtalk').then((components) => {
      return components.DingTalkLogin;
    }),
  { ssr: false },
);

const App = () => {
  return DingTalkLoginWithNoSSR && <DingTalkLoginWithNoSSR />;
};

export default App;
