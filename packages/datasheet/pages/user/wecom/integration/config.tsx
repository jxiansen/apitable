

import React from 'react';
// @ts-ignore
import { WecomConfig } from 'enterprise/wecom/wecom_integration/wecom_config';
// @ts-ignore
import { WecomIntegration } from 'enterprise/wecom/wecom_integration/wecom_integration';

const App = () => {
  return (
    <WecomIntegration>
      <WecomConfig />
    </WecomIntegration>
  );
};

export default App;
