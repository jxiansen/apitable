

import { useControllableValue } from 'ahooks';
import cls from 'classnames';
import { TextInput } from '@apitable/components';
import { IWidgetProps } from '../../core/interface';
import styles from './style.module.less';

export const TextWidget = (props: IWidgetProps) => {
  // TODO: useControllableValue This hook to see if it can be changed to anti-shake
  const [state, setState] = useControllableValue<{ type: string; value: string }>(props, {
    defaultValue: {
      type: 'Literal',
      value: '',
    },
  });
  const { rawErrors, error } = props;
  const helperTextVisible = Boolean(rawErrors?.length);
  const helperText = rawErrors?.join(',');
  return (
    <>
      <TextInput
        value={state?.value || ''}
        onChange={(e) =>
          setState({
            type: 'Literal',
            value: e.target.value,
          })
        }
        block
      />
      {helperTextVisible && <div className={cls(styles.helperText, { [styles.error]: error })}>{helperText}</div>}
    </>
  );
};
