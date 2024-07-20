import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const DingtalkUnboundErrWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/dingtalk/dingtalk_h5').then((components) => {
      return components.DingtalkUnboundErr;
    }),
  { ssr: false },
);

const App = () => {
  return DingtalkUnboundErrWithNoSSR && <DingtalkUnboundErrWithNoSSR />;
};

export default App;
