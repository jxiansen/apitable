

import React from 'react';
// @ts-ignore
import { WecomBindSuccess } from 'enterprise/wecom/wecom_integration/wecom_bind_success';
// @ts-ignore
import { WecomIntegration } from 'enterprise/wecom/wecom_integration/wecom_integration';

const App = () => {
  return (
    <WecomIntegration>
      <WecomBindSuccess />
    </WecomIntegration>
  );
};

export default App;
