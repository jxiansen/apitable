// Use antd first, then replace it with your own component
import { Radio } from 'antd';
import { getLiteralOperandValue } from '@apitable/core';
import { literal2Operand } from '../../../ui/utils';
import { IWidgetProps } from '../../interface';

export const RadioGroupWidget = ({ options, value, onChange }: IWidgetProps) => {
  const { enumOptions } = options;
  const _value = getLiteralOperandValue(value);
  const _onChange = (e: any) => {
    const newValue = literal2Operand(e.target.value);
    onChange(newValue);
  };
  return (
    <Radio.Group onChange={_onChange} value={_value}>
      {(enumOptions as any[])?.map((item) => (
        <Radio key={item.value} value={item.value}>
          {item.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};
