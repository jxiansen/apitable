import Image from 'next/image';
import { Box, Button, Typography, useTheme, ThemeName } from '@apitable/components';
import { Api, Selectors, Strings, SystemConfig, t } from '@apitable/core';
import { useApplyOpenFunction } from 'pc/components/navigation/account_center_modal/test_function/hooks';
import { useRequest } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import { WECOM_ROBOT_URL } from 'pc/utils';
import ImageNoRecordDark from 'static/icon/datasheet/automation_empty_dark.png';
import ImageNoRecordLight from 'static/icon/datasheet/automation_empty_light.png';

import { useAutomationNavigateController } from '../../automation/controller/controller';
import { useAddNewRobot, useShowRobot } from '../hooks';
// @ts-ignore
import { isWecomFunc } from 'enterprise/home/social_platform/utils';

export const RobotEmptyList = () => {
  const theme = useTheme();
  const { canAddNewRobot } = useAddNewRobot();
  const isShowRobot = useShowRobot();

  const applyOpenTestFunction = useApplyOpenFunction();

  const { data: labsFeatureListData } = useRequest(Api.getLabsFeatureList);
  const themeName = useAppSelector((state) => state.theme);
  const ImageNoRecord = themeName === ThemeName.Light ? ImageNoRecordLight : ImageNoRecordDark;

  const { createNewRobot } = useAutomationNavigateController();

  const datasheetId = useAppSelector(Selectors.getActiveDatasheetId);
  const openTestFunction = () => {
    const { space: spaceLabs = [] } = labsFeatureListData!.data.data.features;
    const { url: _url, key } = spaceLabs.find((lab) => lab.key === SystemConfig.test_function.robot.feature_key) || {};
    const url = key === 'robot' && isWecomFunc?.() ? WECOM_ROBOT_URL : _url;
    url && applyOpenTestFunction(url);
  };

  return (
    <Box display="flex" flexDirection="column" margin="0 auto" marginTop="24vh" alignItems="center">
      <Image src={ImageNoRecord} alt="" width={200} height={150} />
      <Typography variant="body3" color={theme.color.fc1} style={{ marginTop: 16, width: 212 }}>
        {t(Strings.robot_panel_no_robot_tip)}
      </Typography>
      <Box marginTop="24px" width="212px">
        <Button
          disabled={!canAddNewRobot}
          color="primary"
          onClick={() => (isShowRobot ? canAddNewRobot && createNewRobot(datasheetId) : openTestFunction())}
          block
        >
          {isShowRobot ? t(Strings.new_automation) : t(Strings.test_function_btnmodal_btntext)}
        </Button>
        {!isShowRobot && (
          <Box marginTop="8px" fontSize="12px" lineHeight="18px" color={theme.color.fc3}>
            {t(Strings.test_function_form_submit_tip)}
          </Box>
        )}
      </Box>
    </Box>
  );
};
