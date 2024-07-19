

import { useMount } from 'ahooks';
import { useSetAtom } from 'jotai';
import { Provider } from 'jotai/react';
import React, { memo } from 'react';
import { SWRConfig } from 'swr';
import { Box, ThemeProvider, useTheme } from '@apitable/components';
import { Selectors } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { automationStateAtom } from '../../automation/controller';
import { AutomationScenario } from '../interface';
import { FormEditProvider } from '../robot_detail/form_edit';
import { RobotList } from '../robot_list';
import { AutomationDrawer } from './automation_modal';
import { RobotListHead } from './robot_list_head';

const RobotBase = () => {
  const cachedTheme = useAppSelector(Selectors.getTheme);

  const theme = useTheme();

  const setAutomationAtom = useSetAtom(automationStateAtom );

  useMount(()=> {
    setAutomationAtom({
      scenario: AutomationScenario.datasheet,
    });
  });

  return (
    <FormEditProvider>
      <Provider>

        <ThemeProvider theme={cachedTheme}>
          <SWRConfig
            value={{
              revalidateOnFocus: false,
            }}
          >
            <AutomationDrawer />
            <Box
              height="50px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="16px 8px"
              borderBottom={`1px solid ${theme.color.lineColor}`}
              position="relative"
              backgroundColor={theme.color.bgCommonDefault}
            >
              <RobotListHead />
            </Box>
            <Box overflow="auto" padding="0 8px" backgroundColor={theme.color.fc8} height="calc(100vh - 49px)">
              <RobotList />
            </Box>
          </SWRConfig>
        </ThemeProvider>
      </Provider>
    </FormEditProvider>
  );
};

const RobotPanel = memo(RobotBase);

export default RobotPanel;
