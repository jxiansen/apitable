import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const WecomLoginWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/wecom/login/login').then((components) => {
      return components.WecomLogin;
    }),
  { ssr: false },
);

const App = () => {
  return WecomLoginWithNoSSR && <WecomLoginWithNoSSR />;
};

export default App;
