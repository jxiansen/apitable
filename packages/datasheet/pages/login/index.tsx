import dynamic from 'next/dynamic';
import React from 'react';

const LoginWithNoSSR = dynamic(() => import('pc/components/home'), { ssr: false });

const App = () => {
  return <LoginWithNoSSR />;
};

export default App;
