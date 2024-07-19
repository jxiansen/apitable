

import { LinkButton, colorVars } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { ArrowDownOutlined, ArrowUpOutlined } from '@apitable/icons';
import styles from './style.module.less';

interface IPageTurnProps {
  onClickPre(): void;
  onClickNext(): void;
  disablePre: boolean;
  disableNext: boolean;
}

export const PageTurnMobile = ({ onClickPre, onClickNext, disablePre, disableNext }: IPageTurnProps): JSX.Element => (
  <div className={styles.bottomPageTurn}>
    <LinkButton
      underline={false}
      component="button"
      prefixIcon={<ArrowUpOutlined size={16} color={colorVars.fc1} />}
      color={colorVars.fc1}
      disabled={!disablePre}
      className={styles.button}
      onClick={() => onClickPre()}
    >
      {t(Strings.previous_record_plain)}
    </LinkButton>
    <LinkButton
      underline={false}
      component="button"
      prefixIcon={<ArrowDownOutlined size={16} color={colorVars.fc1} />}
      color={colorVars.fc1}
      disabled={!disableNext}
      className={styles.button}
      onClick={() => onClickNext()}
    >
      {t(Strings.next_record_plain)}
    </LinkButton>
  </div>
);
