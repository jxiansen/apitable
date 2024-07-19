import * as React from 'react';
import ReactJson from 'react18-json-view';
import { Box, Typography, useTheme } from '@apitable/components';
import 'react18-json-view/src/style.css';

interface IKeyValueDisplayProps {
  label: string;
  value: any;
}

export const KeyValueDisplay = (props: IKeyValueDisplayProps) => {
  const { label, value } = props;
  const theme = useTheme();
  if (!value) return null;
  return (
    <Box>
      <Typography variant="body3" color={theme.color.fc1}>
        {label}
      </Typography>
      <Typography variant="body4" color={theme.color.fc2}>
        {typeof value === 'object' ? <ReactJson src={value} collapsed={3} /> : value.toString()}
      </Typography>
    </Box>
  );
};

interface IStyledTitleProps {
  hasError?: boolean;
}

export const StyledTitle = (props: React.PropsWithChildren<IStyledTitleProps>) => {
  const theme = useTheme();
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body2" color={props.hasError ? theme.color.fc10 : theme.color.fc1}>
        {props.children}
      </Typography>
    </Box>
  );
};
