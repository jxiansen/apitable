import { DropdownSelect as Select } from '@apitable/components';
import { t, Strings } from '@apitable/core';
import { IWidgetProps } from '../../core/interface';
import { literal2Operand, operand2Literal } from '../utils';

export const SelectWidget = ({ options: { enumOptions }, value, onChange, rawErrors }: IWidgetProps) => {
  // const hasError = Boolean(rawErrors?.length);
  const style = { width: '100%' };
  // hasError ? { border: '1px solid red', width: '100%' } :

  return (
    <>
      <Select
        options={(enumOptions || []) as any}
        value={operand2Literal(value)}
        onSelected={(option) => {
          onChange(literal2Operand(option.value));
        }}
        dropdownMatchSelectWidth
        noDataTip={t(Strings.no_option)}
        triggerStyle={style}
        placeholder={t(Strings.robot_select_option)}
      />
    </>
  );
};
