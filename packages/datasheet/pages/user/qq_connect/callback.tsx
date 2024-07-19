

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const QqCallbackWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/home/qq_callback/qq_callback').then((components) => {
      return components.QqCallback;
    }),
  { ssr: false },
);

const App = () => {
  return QqCallbackWithNoSSR && <QqCallbackWithNoSSR />;
};

export default App;
