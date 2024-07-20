import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const FeiShuBindSpaceWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/lark/feishu/feishu_bind_space').then((components) => {
      return components.default;
    }),
  { ssr: false },
);

const App = () => {
  return FeiShuBindSpaceWithNoSSR && <FeiShuBindSpaceWithNoSSR />;
};

export default App;
