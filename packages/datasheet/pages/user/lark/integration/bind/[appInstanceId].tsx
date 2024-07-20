import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeishuIntegrationWithNoSSR: any = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu_integration/feishu_integration').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

// @ts-ignore
const FeishuIntegrationBindWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu_integration/detail/bind').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return (
    FeishuIntegrationWithNoSSR &&
    FeishuIntegrationBindWithNoSSR && (
      <FeishuIntegrationWithNoSSR>
        <FeishuIntegrationBindWithNoSSR />
      </FeishuIntegrationWithNoSSR>
    )
  );
};

export default App;
