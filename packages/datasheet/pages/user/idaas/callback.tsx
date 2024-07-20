import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const IdassCallbackWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/home/idass_callback/idass_callback').then((components) => {
      return components.IdassCallback;
    }),
  { ssr: false },
);

const App = () => {
  return IdassCallbackWithNoSSR && <IdassCallbackWithNoSSR />;
};

export default App;
