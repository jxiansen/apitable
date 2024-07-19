

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeishuAdminWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu_manage/admin/admin').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return FeishuAdminWithNoSSR && <FeishuAdminWithNoSSR />;
};

export default App;
