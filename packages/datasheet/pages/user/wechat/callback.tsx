

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const WechatCallbackWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/home/wechat_callback/wechat_callback').then((components) => {
      return components.WechatCallback;
    }),
  { ssr: false },
);

const App = () => {
  return WechatCallbackWithNoSSR && <WechatCallbackWithNoSSR />;
};

export default App;
