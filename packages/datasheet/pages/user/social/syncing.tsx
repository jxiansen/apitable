import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const ContactSyncingWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/dingtalk/dingtalk').then((components) => {
      return components.ContactSyncing;
    }),
  { ssr: false },
);

const App = () => {
  return ContactSyncingWithNoSSR && <ContactSyncingWithNoSSR />;
};

export default App;
