import { FC } from 'react';
import * as React from 'react';
import { colorVars } from '@apitable/components';
import { t, Strings } from '@apitable/core';
import { WithTipTextInput } from 'pc/components/common/input/with_tip_input/with_tip_text_input';
import { TComponent } from 'pc/components/common/t_component';
import styles from './style.module.less';
interface IConfirmAgainModalProps {
  confirmText: string;
  setConfirmText: React.Dispatch<React.SetStateAction<string>>;
}
export const ConfirmAgainModal: FC<React.PropsWithChildren<IConfirmAgainModalProps>> = ({ confirmText, setConfirmText }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmText(value);
  };

  return (
    <>
      <div className={styles.tip}>
        <TComponent
          tkey={t(Strings.log_out_confirm_again_tip)}
          params={{
            content: (
              <span
                style={{
                  color: colorVars.fc10,
                  fontWeight: 'bold',
                }}
              >
                {t(Strings.confirm_logout)}
              </span>
            ),
          }}
        />
      </div>
      <WithTipTextInput
        onChange={handleChange}
        placeholder={t(Strings.confirm_logout)}
        value={confirmText}
        autoFocus
        onFocus={(e) => e.target.select()}
        block
      />
    </>
  );
};
