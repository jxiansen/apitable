import { FC } from 'react';
import { t, Strings } from '@apitable/core';
import { WarnOutlined } from '@apitable/icons';
import styles from './style.module.less';

interface IErrorContentProps {
  err?: string;
  init: () => void;
}
export const Fail: FC<React.PropsWithChildren<IErrorContentProps>> = (props) => {
  const { err, init } = props;
  return (
    <div className={styles.fail}>
      <span className={styles.errorIcon}>
        <WarnOutlined />
      </span>
      <div className={styles.text}>
        <div className={styles.gray}>
          {t(Strings.please)}
          <span onClick={init} className={styles.reload}>
            {t(Strings.upload_again)}
          </span>
        </div>
      </div>
    </div>
  );
};
