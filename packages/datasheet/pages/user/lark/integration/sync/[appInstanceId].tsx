

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeishuIntegrationWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu_integration/feishu_integration').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return FeishuIntegrationWithNoSSR && <FeishuIntegrationWithNoSSR />;
};

export default App;
