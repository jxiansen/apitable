

import { memo } from 'react';
import { Box, Typography } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { CONST_MAX_ACTION_COUNT, CONST_MAX_TRIGGER_COUNT } from 'pc/components/automation/config';
import { CONST_BG_CLS_NAME } from 'pc/components/automation/content';
import { useActionTypes, useAutomationRobot, useTriggerTypes } from '../hooks';
import { RobotActions } from './action/robot_actions';
import { EditType, RobotTrigger } from './trigger/robot_trigger';
import { useCssColors } from './trigger/use_css_colors';

export const RobotDetailForm = memo(() => {
  const { loading, data: actionTypes } = useActionTypes();
  const { loading: triggerTypeLoading, data: triggerTypes } = useTriggerTypes();
  const { robot } = useAutomationRobot();

  const colors = useCssColors();
  if (loading || !actionTypes || triggerTypeLoading || !triggerTypes || !robot) {
    return null;
  }

  return (
    <>
      <Box paddingTop={'40px'} paddingBottom={'16px'} className={CONST_BG_CLS_NAME}>
        <Typography variant="h5" color={colors.textCommonPrimary}>
          {t(Strings.when)} ( {robot?.triggers?.length ?? 0} / {CONST_MAX_TRIGGER_COUNT} )
        </Typography>
      </Box>

      <RobotTrigger editType={EditType.entry} robotId={robot.robotId} triggerTypes={triggerTypes} />

      <Box paddingTop={'40px'} paddingBottom={'16px'} className={CONST_BG_CLS_NAME}>
        <Typography variant="h5" color={colors.textCommonPrimary}>
          {t(Strings.then)} ( {robot?.actions?.length ?? 0} / {CONST_MAX_ACTION_COUNT} )
        </Typography>
      </Box>
      <RobotActions robotId={robot.robotId} triggerTypes={triggerTypes} />
    </>
  );
});
