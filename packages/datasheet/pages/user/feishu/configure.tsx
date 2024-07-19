

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeiShuConfigureWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu/feishu_configure').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return FeiShuConfigureWithNoSSR && <FeiShuConfigureWithNoSSR />;
};

export default App;
