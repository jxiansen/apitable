import dynamic from 'next/dynamic';
import React from 'react';

const DynamicComponentWithNoSSR = dynamic(() => import('pc/components/route_manager/management_router'), { ssr: false });
// @ts-ignore
const LogWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/log').then((components) => {
      return components.Log;
    }),
  { ssr: false },
);
const ManageAuthWithNoSSR = dynamic(() => import('pc/components/space_manage/manage_auth'), { ssr: false });

const App = () => {
  return (
    <>
      <DynamicComponentWithNoSSR>
        <ManageAuthWithNoSSR>{LogWithNoSSR && <LogWithNoSSR />}</ManageAuthWithNoSSR>
      </DynamicComponentWithNoSSR>
    </>
  );
};

export default App;
