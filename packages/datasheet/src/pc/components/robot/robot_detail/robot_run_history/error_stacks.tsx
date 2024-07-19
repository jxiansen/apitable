

import styled from 'styled-components';
import { Box, useTheme } from '@apitable/components';
import { t } from '@apitable/core';

interface IErrorStacksProps {
  errorStacks?: { message: any }[];
}

const ErrorInfo = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  text-align: inherit;
`;

export const ErrorStacks = (props: IErrorStacksProps) => {
  const theme = useTheme();
  return (
    <Box marginTop="8px" padding="0 16px" boxShadow={`inset 1px 0px 0px ${theme.color.fc5}`}>
      {props.errorStacks?.map((error, index) => {
        return (
          <ErrorInfo key={index} style={{ color: theme.color.red[500] }}>
            {t('action_execute_error', {
              value: error.message,
            })}
          </ErrorInfo>
        );
      })}
    </Box>
  );
};
