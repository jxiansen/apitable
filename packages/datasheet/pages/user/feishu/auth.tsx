

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeiShuUserAuthWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu/feishu_user_auth').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return FeiShuUserAuthWithNoSSR && <FeiShuUserAuthWithNoSSR />;
};

export default App;
