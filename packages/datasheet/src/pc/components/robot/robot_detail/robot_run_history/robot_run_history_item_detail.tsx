import axios from 'axios';
import useSWR from 'swr';
import { Box, Typography } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { useNodeTypeByIds } from '../../hooks';
import { IRobotHistoryTask } from '../../interface';
import { useCssColors } from '../trigger/use_css_colors';
import { RobotRunHistoryActionDetail } from './robot_run_history_item_detail_action';
import { RobotRunHistoryNodeWrapper } from './robot_run_history_item_detail_node_wrapper';
import { RobotRunHistoryTriggerDetail } from './robot_run_history_item_detail_trigger';

const nestReq = axios.create({
  baseURL: '/api/v1/',
});

interface IRobotRunHistoryItemDetailProps {
  taskId: string;
}

export const useRunTaskDetail = (taskId: string) => {
  const taskDetailUrl = `/automation/run-history/${taskId}`;
  const { data, error, isLoading } = useSWR(taskDetailUrl, nestReq);

  const taskDetail: IRobotHistoryTask = data?.data?.data;
  return {
    isLoading,
    data: taskDetail,
    error,
  };
};
export const RobotRunHistoryItemDetail = (props: IRobotRunHistoryItemDetailProps) => {
  const { taskId } = props;
  const { data, error, isLoading } = useRunTaskDetail(taskId);
  const taskDetail = data?.data;
  const colors = useCssColors();
  const nodeTypeByIds = useNodeTypeByIds();
  if (isLoading) {
    return null;
  }
  if (error || !taskDetail) {
    return (
      <Box padding="16px" backgroundColor={colors.bgCommonDefault}>
        <Typography variant="h8" color={colors.textDangerDefault}>
          {t(Strings.robot_run_history_fail_unknown_error)} (taskId: {taskId})
        </Typography>
      </Box>
    );
  }
  // Older versions of data are not supported for display.
  if (!taskDetail.nodeByIds) {
    return (
      <Box padding="16px">
        <Typography variant="body3">{t(Strings.robot_run_history_old_version_tip)}</Typography>
      </Box>
    );
  }

  const nodeTypes = taskDetail.executedNodeIds.map((nodeId) => nodeTypeByIds[taskDetail.nodeByIds[nodeId].typeId]).filter(Boolean);
  const trigger = nodeTypes[0];
  return (
    <Box flex={'1'} overflowY={'auto'}>
      <Box padding="0px 16px 0px 0">
        {nodeTypes.map((nodeType, index) => {
          const nodeDetail = taskDetail.nodeByIds[taskDetail.executedNodeIds[index]];
          const isTrigger = index === 0;
          return (
            <RobotRunHistoryNodeWrapper
              isLast={index === nodeTypes.length - 1}
              status={data?.status}
              key={index}
              index={index}
              nodeType={nodeType}
              nodeDetail={nodeDetail}
            >
              {isTrigger ? (
                <RobotRunHistoryTriggerDetail nodeType={nodeType} nodeDetail={nodeDetail} />
              ) : (
                <RobotRunHistoryActionDetail nodeType={nodeType} nodeDetail={nodeDetail} />
              )}
            </RobotRunHistoryNodeWrapper>
          );
        })}
      </Box>
    </Box>
  );
};
