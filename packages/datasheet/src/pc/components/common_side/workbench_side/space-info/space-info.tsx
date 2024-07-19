import { Popover } from 'antd';
import { FC } from 'react';
import { shallowEqual } from 'react-redux';
import { ComponentDisplay, ScreenSize } from 'pc/components/common/component_display';
import { OrganizationHead } from 'pc/components/organization_head';
import { ISpaceLevelType, LevelType } from 'pc/components/space_manage/space_info/interface';
import { SpaceLevelInfo } from 'pc/components/space_manage/space_info/utils';
import { useAppSelector } from 'pc/store/react-redux';
import { SpaceInfoPopover } from './space-info-popover';
import styles from './style.module.less';

const Content: FC<React.PropsWithChildren<unknown>> = () => {
  const subscription = useAppSelector((state) => state.billing?.subscription, shallowEqual);
  const level = (subscription ? subscription.product.toLowerCase() : LevelType.Bronze) as ISpaceLevelType;
  const {
    spaceLevelTag: { logo },
  } = SpaceLevelInfo[level] || SpaceLevelInfo.bronze;

  return (
    <>
      <div className={styles.logo}>{logo}</div>
      <OrganizationHead className={styles.spaceName} hideTooltip />
    </>
  );
};

export const SpaceInfo: FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <>
      <ComponentDisplay minWidthCompatible={ScreenSize.md}>
        <Popover
          trigger="hover"
          placement="bottomLeft"
          align={{
            offset: [10, 0],
          }}
          content={<SpaceInfoPopover />}
          overlayClassName={styles.popover}
        >
          <div className={styles.spaceInfo}>
            <Content />
          </div>
        </Popover>
      </ComponentDisplay>
      <ComponentDisplay maxWidthCompatible={ScreenSize.md}>
        <div className={styles.spaceInfo}>
          <Content />
        </div>
      </ComponentDisplay>
    </>
  );
};
