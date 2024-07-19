

import React, { FC } from 'react';
import { useCssColors } from '../../hooks/use_css_colors';
import { Box } from '../box';
import { Typography } from '../typography';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import { CronConverter } from './utils';
import styled, { css } from 'styled-components';
dayjs.extend(timezone);

const GapBox = styled(Box)<{ gap: string }>`
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`;

export const NextTimePreview: FC<{
  cron: string;
  title: string;
  tz?: string;
  options: {
    userTimezone: string;
  };
}> = ({ title, cron, tz = 'Asia/Shanghai', options }) => {
  const colors = useCssColors();

  return (
    <GapBox
      borderColor={colors.borderCommonDefault}
      borderWidth={'1px'}
      borderStyle={'solid'}
      paddingTop={'16px'}
      padding={'8px 12px'}
      borderRadius={'4px'}
    >
      <Typography
        color={colors.textCommonTertiary}
        variant={'body4'}
        style={{
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>

      <Box display={'flex'} flexDirection={'column'} gap={'4px'} marginTop={'4px'}>
        {CronConverter.getHumanReadableInformation(cron, tz, options).map((time, index) => {
          return (
            <Typography key={index} color={colors.textCommonTertiary} variant={'body4'}>
              {time}
            </Typography>
          );
        })}
      </Box>
    </GapBox>
  );
};
