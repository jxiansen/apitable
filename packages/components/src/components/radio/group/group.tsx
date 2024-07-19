import React, { useEffect } from 'react';
import { RadioGroupContext } from '../context';
import { IRadioGroup } from './interface';
import { RadioGroupStyled } from './styled';
import { Radio } from '../radio';

export const RadioGroup = React.forwardRef(
  ({ children, name, disabled, onChange, options, value: _value, ...restProps }: IRadioGroup, ref: React.Ref<HTMLDivElement>) => {
    const [value, setValue] = React.useState(() => _value);
    useEffect(() => {
      setValue(_value);
    }, [_value]);
    const handleChange = (event: React.ChangeEvent<any>) => {
      const targetValue = event.target.value;
      setValue(targetValue);
      if (onChange) {
        onChange(event, targetValue);
      }
    };
    return (
      <RadioGroupContext.Provider value={{ name, disabled, onChange: handleChange, value, isBtn: restProps.isBtn }}>
        <RadioGroupStyled {...restProps} ref={ref}>
          {options
            ? options.map((option, idx) => {
                const { label, ...restOption } = option;
                return (
                  <Radio key={idx} {...restOption}>
                    {label}
                  </Radio>
                );
              })
            : children}
        </RadioGroupStyled>
      </RadioGroupContext.Provider>
    );
  }
);
