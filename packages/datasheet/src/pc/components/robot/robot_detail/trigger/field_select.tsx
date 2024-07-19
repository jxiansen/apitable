

import { ITheme, DropdownSelect as Select, useTheme } from '@apitable/components';
import { FieldType, IField } from '@apitable/core';
import { FieldIconMapFieldType as FieldIconMap } from '@apitable/widget-sdk';

const transformOptions = (fields: IField[], theme: ITheme) => {
  return fields.map((field) => {
    const res = {
      label: field.name,
      value: field.id,
    };
    const FieldIcon = FieldIconMap[field.type];
    return {
      ...res,
      disabled: field.type === FieldType.DeniedField,
      prefixIcon: <FieldIcon color={theme.color.fc3} />,
    };
  });
};

interface IFieldSelectProps {
  fields: IField[];
  value: string;
  disabled?: boolean;
  onChange?: (value: any) => void;
}
export const FieldSelect = ({ disabled, fields, value, onChange }: IFieldSelectProps) => {
  const theme = useTheme();
  const options = transformOptions(fields, theme);
  return (
    <Select
      disabled={disabled}
      options={options}
      value={value}
      onSelected={(option) => {
        onChange && onChange(option.value);
      }}
      // FIXME：Adjusting maxHeight inside the dropdown list and limiting it outside will result in double scrollbars
      // listStyle={{
      //   maxHeight: 320,
      //   overflow: 'scroll',
      // }}
      hideSelectedOption={!value}
      dropdownMatchSelectWidth
      openSearch={options.length > 7}
    />
  );
};
