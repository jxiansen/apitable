import { WidgetProps } from '@rjsf/core';
import { TextInput } from 'components/text_input';
import React from 'react';
import styled, { css } from 'styled-components';
import { applyDefaultTheme } from 'theme';
import { useControllableValue } from 'ahooks';

const HelperText = styled.div.attrs(applyDefaultTheme)<{ error: boolean }>`
  height: 22px;
  font-size: 10px;
  padding: 4px 0 0 8px;
  ${(props) =>
    props.error &&
    css`
      color: ${props.theme.color.errorColor};
    `}
`;

export const TextWidget = (props: WidgetProps) => {
  // TODO: useControllableValue hook should support debounce
  const [state, setState] = useControllableValue<string>(props, {
    defaultValue: '',
  });
  const { rawErrors, placeholder } = props;
  const helperTextVisible = Boolean(rawErrors?.length);
  const helperText = rawErrors?.join(',');
  return (
    <>
      <TextInput placeholder={placeholder} value={state} onChange={(e) => setState(e.target.value)} block />
      {helperTextVisible && <HelperText error>{helperText}</HelperText>}
    </>
  );
};
