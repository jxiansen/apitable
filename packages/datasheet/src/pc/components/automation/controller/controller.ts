import { useAtom, useSetAtom } from 'jotai';
import { useCallback, useContext } from 'react';
import { useResponsive } from '../../../hooks';
import { ScreenSize } from '../../common/component_display';
import { createAutomationRobot } from '../../robot/api';
import { useAutomationRobot } from '../../robot/hooks';
import { AutomationScenario, IRobotContext } from '../../robot/interface';
import { ShareContext } from '../../share';
import {
  automationPanelAtom,
  automationStateAtom,
  PanelName,
  automationDrawerVisibleAtom,
  automationLocalMap,
  automationTriggerDatasheetAtom,
  formListDstIdAtom,
  getResourceAutomationDetailIntegrated,
  automationCacheAtom,
} from './index';
export const useAutomationNavigateController = () => {
  const [, setShowAtom] = useAtom(automationDrawerVisibleAtom);
  const updateLocalState = useSetAtom(automationLocalMap);
  const [automationState, setAutomationAtom] = useAtom(automationStateAtom);

  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.lg);

  const [, setPanel] = useAtom(automationPanelAtom);
  const setFormListAtom = useSetAtom(formListDstIdAtom);
  const { reset } = useAutomationRobot();
  const setDataSheet = useSetAtom(automationTriggerDatasheetAtom);

  const { shareInfo } = useContext(ShareContext);

  const navigateDatasheetAutomation = async (resourceId: string, robotId: string) => {
    const itemDetail = await getResourceAutomationDetailIntegrated(resourceId, robotId, {
      shareId: shareInfo?.shareId,
    });
    const newState: IRobotContext = {
      scenario: AutomationScenario.datasheet,
      robot: itemDetail,
      currentRobotId: robotId,
      resourceId,
    };
    setFormListAtom(resourceId);
    setDataSheet({
      formId: undefined,
      id: resourceId,
    });

    await setAutomationAtom(newState);
    await setShowAtom(true);
    updateLocalState(new Map());
    await setPanel((p) => ({ ...p, panelName: isMobile ? undefined : PanelName.BasicInfo }));
  };
  const createNewRobot = async (resourceId?: string) => {
    const rId = resourceId ?? automationState?.resourceId;
    if (!rId) {
      return;
    }
    reset();

    const newRobotId = await createAutomationRobot({
      resourceId: rId,
      name: '',
    });
    await navigateDatasheetAutomation(newRobotId.resourceId, newRobotId.robotId);
  };

  const setAutomationLocalState = useSetAtom(automationLocalMap);

  const initialize = useCallback(() => {
    setAutomationLocalState(new Map());
  }, [setAutomationLocalState]);

  return { createNewRobot, navigateAutomation: navigateDatasheetAutomation, initialize };
};
