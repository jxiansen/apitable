

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeishuErrWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu/feishu_err').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return FeishuErrWithNoSSR && <FeishuErrWithNoSSR />;
};

export default App;
