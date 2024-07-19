

import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const IdassCallbackWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise').then((components) => {
      return components.IdassCallback;
    }),
  { ssr: false },
);

const App = () => {
  return IdassCallbackWithNoSSR && <IdassCallbackWithNoSSR />;
};

export default App;
