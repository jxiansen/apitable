import cls from 'classnames';
import { useState } from 'react';
import { Box, IconButton, Typography, useTheme } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { CheckCircleFilled, ChevronDownOutlined, PauseFilled, WarnCircleFilled } from '@apitable/icons';
import styles from 'style.module.less';
import { timeFormatter } from 'pc/utils';
import { IRobotRunHistoryItem, RobotRunStatusEnums } from '../../interface';
import { RobotRunHistoryItemDetail } from './robot_run_history_item_detail';

export interface IRobotRunHistoryItemProps {
  item: IRobotRunHistoryItem;
}

export const RobotRunHistoryItem = ({ item }: IRobotRunHistoryItemProps) => {
  const theme = useTheme();
  const [showDetail, setShowDetail] = useState(false);

  const StatusTextMap = {
    [RobotRunStatusEnums.RUNNING]: t(Strings.robot_run_history_running),
    [RobotRunStatusEnums.SUCCESS]: t(Strings.robot_run_history_success),
    [RobotRunStatusEnums.ERROR]: t(Strings.robot_run_history_fail),
  };

  const StatusColorMap = {
    [RobotRunStatusEnums.RUNNING]: theme.color.fc0,
    [RobotRunStatusEnums.SUCCESS]: theme.color.fc15,
    [RobotRunStatusEnums.ERROR]: theme.color.fc10,
  };
  const StatusIconMap = {
    [RobotRunStatusEnums.RUNNING]: PauseFilled,
    [RobotRunStatusEnums.SUCCESS]: CheckCircleFilled,
    [RobotRunStatusEnums.ERROR]: WarnCircleFilled,
  };

  const isRunning = item.status === RobotRunStatusEnums.RUNNING;
  const toggleDetail = () => {
    if (isRunning) {
      return;
    }
    setShowDetail(!showDetail);
  };
  const IconComponent = StatusIconMap[item.status];
  return (
    <Box marginTop="16px" borderRadius="8px" border={`1px solid ${theme.color.fc5}`}>
      <Box
        background={theme.color.fc8}
        borderRadius="8px"
        key={item.taskId}
        padding="16px"
        height="52px"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        onClick={toggleDetail}
        style={{ cursor: 'pointer' }}
      >
        <Box display="flex" alignItems="center">
          <IconComponent color={StatusColorMap[item.status]} />
          <Typography variant="body3" color={StatusColorMap[item.status]} style={{ marginLeft: '4px' }}>
            {StatusTextMap[item.status]}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body3">{timeFormatter(item.createdAt)}</Typography>
          <Box width="16px" />
          {!isRunning && (
            <span className={cls(styles.arrowIcon, { [styles.rotated]: showDetail })}>
              <IconButton icon={ChevronDownOutlined} className={styles.dropIcon} onClick={toggleDetail} />
            </span>
          )}
        </Box>
      </Box>
      {showDetail && <RobotRunHistoryItemDetail taskId={item.taskId} />}
    </Box>
  );
};
