import { Modal as AntdModal } from 'antd';
import React from 'react';
import { ThemeProvider } from '@apitable/components';
import { Selectors } from '@apitable/core';

import { useAppSelector } from 'pc/store/react-redux';

export const ModalWithTheme = (props: any) => {
  const cacheTheme = useAppSelector(Selectors.getTheme);
  return (
    <ThemeProvider theme={cacheTheme}>
      <div>
        <AntdModal {...props} />
      </div>
    </ThemeProvider>
  );
};
