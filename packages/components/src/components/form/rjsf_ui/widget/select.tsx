

import { WidgetProps } from '@rjsf/core';
import React from 'react';
import styled from 'styled-components';
import { DropdownSelect as Select } from '../../../select/dropdown';
import { applyDefaultTheme } from 'theme';

const ErrorText = styled.div.attrs(applyDefaultTheme)`
  font-size: 10px;
  padding: 4px 0 0 8px;
  color: ${(props) => props.theme.color.errorColor};
`;

export const SelectWidget = ({
  options: { enumOptions }, value, onChange, rawErrors, placeholder
}: WidgetProps) => {
  // const hasError = Boolean(rawErrors?.length);
  const style = { width: '100%' };
      // hasError ? { border: '1px solid red', width: '100%' } :

  return (
    <>
      <Select
        placeholder={placeholder}
        options={(enumOptions || []) as any}
        value={value}
        onSelected={(option) => {
          onChange(option.value);
        }}
        dropdownMatchSelectWidth
        triggerStyle={style}
      />
      {
        rawErrors?.map(error => <ErrorText>{error}</ErrorText>)
      }
    </>
  );
};
