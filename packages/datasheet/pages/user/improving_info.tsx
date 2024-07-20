import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const ImprovingInfoWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/home/improving_info').then((components) => {
      return components.ImprovingInfo;
    }),
  { ssr: false },
);

const App = () => {
  return ImprovingInfoWithNoSSR && <ImprovingInfoWithNoSSR />;
};

export default App;
