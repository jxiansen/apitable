import { FC } from 'react';
import { useThemeColors } from '@apitable/components';
import styles from './style.module.less';

export const OmittedMiddleText: FC<React.PropsWithChildren<{ suffixCount: number; children: string }>> = ({ suffixCount = 5, children }) => {
  const colors = useThemeColors();
  const start = children.slice(0, children.length - suffixCount);
  const suffix = children.slice(-suffixCount);
  return (
    <>
      {children.length > 5 ? (
        <div className={styles.desc}>
          <span className={styles.start} color={colors.thirdLevelText}>
            {start}
          </span>
          <span className={styles.suffix} color={colors.thirdLevelText}>
            {suffix}
          </span>
        </div>
      ) : (
        <p className={styles.desc}>{children}</p>
      )}
    </>
  );
};
