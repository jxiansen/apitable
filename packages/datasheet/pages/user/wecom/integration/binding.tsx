

import React from 'react';
// @ts-ignore
import { WecomIntegration } from 'enterprise/wecom/wecom_integration/wecom_integration';
// @ts-ignore
import { WecomToBind } from 'enterprise/wecom/wecom_integration/wecom_to_bind';

const App = () => {
  return (
    <WecomIntegration>
      <WecomToBind />
    </WecomIntegration>
  );
};

export default App;
