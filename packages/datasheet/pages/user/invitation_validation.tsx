import dynamic from 'next/dynamic';
import React from 'react';

// @ts-ignore
const InvitationValidationWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/home/invitation_validation').then((components) => {
      return components.InvitationValidation;
    }),
  { ssr: false },
);

const App = () => {
  return InvitationValidationWithNoSSR && <InvitationValidationWithNoSSR />;
};

export default App;
