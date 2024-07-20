import React from 'react';
// @ts-ignore
import { isWecomFunc } from 'enterprise/home/social_platform/utils';
// @ts-ignore
import { WecomInvite } from 'enterprise/wecom/wecom_invite/wecom_invite';

const App = () => {
  if (!isWecomFunc?.()) {
    return null;
  }
  return <WecomInvite />;
};

export default App;
