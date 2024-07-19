

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeiShuBindUserWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu/feishu_bind_user').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return FeiShuBindUserWithNoSSR && <FeiShuBindUserWithNoSSR />;
};

export default App;
