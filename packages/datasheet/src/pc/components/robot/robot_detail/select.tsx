

// eslint-disable-next-line no-restricted-imports
import { useControllableValue } from 'ahooks';
import { DropdownSelect as SelectBase } from '@apitable/components';

/**
 * Wrapping of component select component, in order not to affect the existing component logic, now wrap a layer here. Support for controllable values
 */
export const Select = (props: { value?: any; onChange?: (value: any) => void; options: any[]; disabled?: boolean; placeholder?: string }) => {
  const [state] = useControllableValue<any>(props);
  const { disabled, onChange, options, placeholder } = props;
  const handleChange = (option: { value: any }) => {
    // setState(option.value);
    onChange && onChange(option.value);
  };
  return <SelectBase disabled={disabled} placeholder={placeholder} options={options} value={state} onSelected={handleChange} />;
};
