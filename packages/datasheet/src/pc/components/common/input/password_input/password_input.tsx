import { useBoolean } from 'ahooks';
import { FC } from 'react';
import { ITextInputProps, TextInput } from '@apitable/components';
import { EyeCloseOutlined, EyeOpenOutlined, LockFilled } from '@apitable/icons';
import styles from './style.module.less';

export const PasswordInput: FC<React.PropsWithChildren<ITextInputProps>> = (props) => {
  const [isVisible, { toggle }] = useBoolean(false);

  return (
    <TextInput
      type={isVisible ? 'text' : 'password'}
      prefix={<LockFilled />}
      suffix={
        <div className={styles.suffixIcon} onClick={() => toggle()} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          {isVisible ? <EyeOpenOutlined /> : <EyeCloseOutlined />}
        </div>
      }
      {...props}
    />
  );
};
