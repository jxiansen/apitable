

import { useSize } from 'ahooks';
import { useState, useRef, useImperativeHandle, forwardRef, ForwardRefRenderFunction } from 'react';
// eslint-disable-next-line no-restricted-imports
import { Select, TextInput, ITextInputProps, IOption } from '@apitable/components';
import { SystemConfig, t, Strings, getLanguage } from '@apitable/core';
import { TelephoneFilled } from '@apitable/icons';
import styles from './style.module.less';

// Area code and city collection
const countryAndPhoneAreaCode = SystemConfig.country_code_and_phone_code;
// Converting data into the data structure required by the Select component
const optionData = (() => {
  const tempArr: { value: string; label: string }[] = [];
  for (const country in countryAndPhoneAreaCode) {
    const areaCode = countryAndPhoneAreaCode[country].phoneCode;
    tempArr.push({
      value: `+${areaCode}`,
      label: `${t(Strings[country])}（+${areaCode}）`,
    });
  }
  const lang = getLanguage().split('-')[0];
  if (lang === 'en') {
    tempArr.sort((a, b) => a.label.localeCompare(b.label));
  }
  return tempArr;
})();

export interface IPhoneInputRefProps {
  focus: () => void;
}

export interface IPhoneInputProps extends Omit<ITextInputProps, 'onChange'> {
  // Default Area Code
  defaultAreaCode?: string;
  // Triggered when area code or mobile phone number changes
  onChange?: (areaCode: string, phone: string) => void;
}

export const PhoneInputBase: ForwardRefRenderFunction<any, IPhoneInputProps> = ({ className, onChange, defaultAreaCode = '+86', ...rest }, ref) => {
  const [areaCode, setAreaCode] = useState(defaultAreaCode);
  const [phone, setPhone] = useState('');
  const inputWrapperRef = useRef<any>(null);
  const inputRef = useRef<any>(null);
  const size = useSize(inputWrapperRef);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  const handleOptionSelected = (option: IOption) => {
    const value = option.value as string;
    onChange && onChange(value, phone);
    setAreaCode(value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const newValue = value.replace(/\D/g, '');
    onChange && onChange(areaCode, newValue);
    setPhone(newValue);
  };

  const PhoneCodeSelect = () => {
    return (
      <Select
        triggerCls={styles.areaCodeSelect}
        listCls="light"
        maxListWidth={500}
        options={optionData}
        value={areaCode}
        onSelected={handleOptionSelected}
        dropdownMatchSelectWidth={false}
        listStyle={{ width: size?.width }}
        renderValue={(option) => option.value.toString()}
      />
    );
  };

  return (
    <TextInput
      ref={inputRef}
      wrapperRef={inputWrapperRef}
      className={styles.phoneInput}
      placeholder={t(Strings.placeholder_input_mobile)}
      addonBefore={
        <>
          <PhoneCodeSelect />
          <div className={styles.line} />
        </>
      }
      prefix={<TelephoneFilled />}
      onChange={handlePhoneChange}
      {...rest}
    />
  );
};

export const PhoneInput = forwardRef(PhoneInputBase);
