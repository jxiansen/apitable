import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const DingTalkH5WithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/dingtalk/dingtalk_h5').then((components) => {
      return components.DingTalkH5;
    }),
  { ssr: false },
);

const App = () => {
  return DingTalkH5WithNoSSR && <DingTalkH5WithNoSSR />;
};

export default App;
