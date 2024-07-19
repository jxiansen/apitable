
import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const WoaCallbackWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/woa/woa_callback/woa_callback').then((components) => {
      return components.WoaCallback;
    }),
  { ssr: false },
);

const App = () => {
  return WoaCallbackWithNoSSR && <WoaCallbackWithNoSSR />;
};

export default App;
