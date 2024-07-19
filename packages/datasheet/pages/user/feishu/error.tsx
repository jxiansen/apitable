

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeishuConfigureErrWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu_manage/configure_err').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return FeishuConfigureErrWithNoSSR && <FeishuConfigureErrWithNoSSR />;
};

export default App;
