import classnames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';
import { Button, IconButton } from '@apitable/components';
import { AutoTestID } from '@apitable/core';
import { CloseOutlined } from '@apitable/icons';
import { isIframe } from 'pc/utils/env';
import styles from './style.module.less';

export interface IOperationCardProps {
  img: StaticImageData;
  tipText: string;
  btnText: string;
  onClick: () => void;
}

export const OperationCard: FC<React.PropsWithChildren<IOperationCardProps>> = ({ img, onClick, tipText, btnText }) => {
  const [isCompact, setIsCompact] = useState(false);

  return (
    <div className={classnames(isCompact && styles.toggleAnimation)}>
      {!isIframe() && (
        <div className={classnames(styles.operationCard, styles.loose)}>
          <IconButton icon={() => <CloseOutlined color="currentColor" />} className={styles.closeBtn} onClick={() => setIsCompact(true)} />
          <div className={styles.paint}>
            <Image src={img} alt="" width={80} height={80} />
          </div>
          <p className={styles.saveDesc}>{tipText}</p>
          <Button id={AutoTestID.SHARE_MENU_CARD_BTN} color={'primary'} className={styles.button} onClick={onClick} block>
            {btnText}
          </Button>
        </div>
      )}
      <div className={classnames(styles.operationCard, styles.compact)}>
        <Button className={styles.button} onClick={onClick} variant="jelly" block>
          {btnText}
        </Button>
      </div>
    </div>
  );
};
