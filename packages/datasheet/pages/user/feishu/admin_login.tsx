

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeiShuAdminLoginWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu/feishu_admin_login').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return FeiShuAdminLoginWithNoSSR && <FeiShuAdminLoginWithNoSSR />;
};

export default App;
