import classnames from 'classnames';
import * as React from 'react';
import { useAppSelector } from 'pc/store/react-redux';
import { Tooltip } from '../common/tooltip';
import styles from './style.module.less';

export interface IOrganizationHeadProps {
  className?: string;
  hideTooltip?: boolean;
}

export const OrganizationHead: React.FC<React.PropsWithChildren<IOrganizationHeadProps>> = ({ className, hideTooltip = false }) => {
  const spaceName = useAppSelector((state) => state.space.curSpaceInfo?.spaceName);
  return (
    <div className={classnames(styles.organization, className)}>
      {hideTooltip ? (
        <h2 className={styles.orgName}>{spaceName}</h2>
      ) : (
        <Tooltip title={spaceName} textEllipsis>
          <h2 className={styles.orgName}>{spaceName}</h2>
        </Tooltip>
      )}
    </div>
  );
};
