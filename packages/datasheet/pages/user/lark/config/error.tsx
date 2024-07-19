

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeishuCallbackWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu_integration/feishu_callback').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return FeishuCallbackWithNoSSR && <FeishuCallbackWithNoSSR />;
};

export default App;
