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
const FeishuConfigWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu_integration/feishu_integration_config').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return (
    FeishuIntegrationWithNoSSR &&
    FeishuConfigWithNoSSR && (
      <FeishuIntegrationWithNoSSR>
        <FeishuConfigWithNoSSR />
      </FeishuIntegrationWithNoSSR>
    )
  );
};

export default App;
