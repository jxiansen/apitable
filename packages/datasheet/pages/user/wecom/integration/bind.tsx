import React from 'react';
// @ts-ignore
import { WecomIntegration } from 'enterprise/wecom/wecom_integration/wecom_integration';
// @ts-ignore
import { WecomIntegrationBind } from 'enterprise/wecom/wecom_integration/wecom_integration_bind/wecom_integration_bind';

const App = () => {
  return (
    <WecomIntegration>
      <WecomIntegrationBind />
    </WecomIntegration>
  );
};

export default App;
