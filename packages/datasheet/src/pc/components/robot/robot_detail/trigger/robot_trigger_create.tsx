import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { debounce } from 'lodash';
import * as React from 'react';
import { useCallback, useEffect, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { applyDefaultTheme, SearchSelect } from '@apitable/components';
import { Selectors, Strings, t } from '@apitable/core';
import { CONST_MAX_TRIGGER_COUNT } from 'pc/components/automation/config';
import { useAppSelector } from 'pc/store/react-redux';
import { getEnvVariables } from 'pc/utils/env';
import {
  automationCurrentTriggerId,
  automationPanelAtom,
  automationStateAtom,
  PanelName,
  useAutomationController,
} from '../../../automation/controller';
import { useAutomationResourcePermission } from '../../../automation/controller/use_automation_permission';
import { createTrigger, ICronSchemaTimeZone } from '../../api';
import { getNodeTypeOptions } from '../../helper';
import { getDefaultSchema, useDefaultTriggerFormData } from '../../hooks';
import { AutomationScenario, ITriggerType } from '../../interface';
import { NewItem } from '../../robot_list/new_item';
import itemStyle from './select_styles.module.less';

interface IRobotTriggerCreateProps {
  robotId: string;
  preTriggerId: string | undefined;
  triggerTypes: ITriggerType[];
}

export const StyledListContainer = styled.div.attrs(applyDefaultTheme)<{ width: string; minWidth: string }>`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  padding: 4px 0;
  ${(props) => css`
    background-color: ${props.theme.color.highestBg};
    box-shadow: ${props.theme.color.shadowCommonHighest};
  `}
  border-radius: 4px;
`;

/**
 * Renders the form for creating a trigger when the robot is detected to have no trigger
 */
export const RobotTriggerCreateForm = ({ robotId, triggerTypes, preTriggerId }: IRobotTriggerCreateProps) => {
  const defaultFormData = useDefaultTriggerFormData();

  const userTimezone = useAppSelector(Selectors.getUserTimeZone)!;

  const permissions = useAutomationResourcePermission();
  const {
    api: { refresh },
  } = useAutomationController();
  const state = useAtomValue(automationStateAtom);
  const [, setAutomationPanel] = useAtom(automationPanelAtom);
  const setAutomationCurrentTriggerId = useSetAtom(automationCurrentTriggerId);

  const triggerList = state?.robot?.triggers ?? [];

  const timeScheduleTriggerType = useMemo(() => {
    return triggerTypes.find((item) => item.endpoint === 'scheduled_time_arrive');
  }, [triggerTypes]);

  const triggerTypeOptions = useMemo(() => {
    let list = triggerTypes;
    if (state?.scenario === AutomationScenario.datasheet) {
      list = triggerTypes.filter((item) => item.endpoint !== 'button_field' && item.endpoint !== 'button_clicked');
    }
    return getNodeTypeOptions(list);
  }, [state?.scenario, triggerTypes]);

  // TODO temporary solution, need to be removed
  useEffect(() => {
    // TriggerCommands.open_guide_wizard?.(ConfigConstant.WizardIdConstant.AUTOMATION_TRIGGER);
    // setTimeout(() => {
    //   TriggerCommands.open_guide_wizard?.(ConfigConstant.WizardIdConstant.AUTOMATION_TRIGGER);
    //   Player.doTrigger(Events.guide_use_automation_first_time);
    // }, 3000);
  }, []);

  const createRobotTrigger = useCallback(
    async (triggerTypeId: string) => {
      const triggerType = triggerTypes.find((item) => item.triggerTypeId === triggerTypeId);
      // When the trigger is created for a record, the default value needs to be filled in.
      let input = triggerType?.endpoint === 'record_created' ? defaultFormData : undefined;

      let scheduleConfig: ICronSchemaTimeZone | undefined = undefined;
      if (triggerType?.endpoint === 'scheduled_time_arrive') {
        scheduleConfig = {
          timeZone: userTimezone,
        };
        input = getDefaultSchema(userTimezone);
      }
      if (!state?.resourceId) {
        console.error('.resourceId unfound ');
        return;
      }
      if (!state?.currentRobotId) {
        console.error('currentRobotId unfound ');
        return;
      }
      const triggerRes = await createTrigger(state?.resourceId, {
        robotId,
        prevTriggerId: preTriggerId,
        triggerTypeId,
        input,
      });

      if (triggerRes?.data?.data?.[0]) {
        await refresh({
          resourceId: state.resourceId,
          robotId: state.currentRobotId,
        });

        setAutomationCurrentTriggerId(triggerRes.data.data[0].triggerId);
        setAutomationPanel({
          panelName: PanelName.Trigger,
          dataId: triggerRes.data.data?.[0]?.triggerId,
          data: triggerRes.data.data,
        });

        return triggerRes.data;
      }
    },
    [
      triggerTypes,
      defaultFormData,
      state?.robot,
      state?.resourceId,
      state?.currentRobotId,
      robotId,
      preTriggerId,
      refresh,
      setAutomationCurrentTriggerId,
      setAutomationPanel,
    ],
  );

  const debouncedCreateTrigger = debounce(createRobotTrigger, 1000);

  const { IS_ENTERPRISE } = getEnvVariables();
  if (!triggerTypes) {
    return null;
  }

  const handleCreateFormChange = (triggerTypeId: string) => {
    if (triggerTypeId === timeScheduleTriggerType?.triggerTypeId && !IS_ENTERPRISE) {
      window.open('https://aitable.ai/pricing/');
      return;
    }

    if (triggerTypeId) {
      debouncedCreateTrigger(triggerTypeId);
    }
  };

  return (
    <SearchSelect
      disabled={!permissions.editable || triggerList.length >= CONST_MAX_TRIGGER_COUNT}
      clazz={{
        item: itemStyle.item,
        icon: itemStyle.icon,
      }}
      options={{
        placeholder: t(Strings.search_field),
        noDataText: t(Strings.empty_data),
      }}
      list={triggerTypeOptions}
      onChange={(item) => {
        // @ts-ignore
        handleCreateFormChange(String(item.value));
      }}
    >
      <NewItem itemId={'ROBOT_ITEM_TRIGGER_CREATE'} disabled={!permissions.editable}>
        {t(Strings.add_a_trigger)}
      </NewItem>
    </SearchSelect>
  );
};
