

import { Breadcrumb } from 'antd';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { IParent } from '@apitable/core';
import { ChevronRightOutlined } from '@apitable/icons';
import { HorizontalScroll } from 'pc/components/common';
import styles from './style.module.less';

interface IFolderBreadcrumbProps {
  parents: IParent[];
  onNodeClick(nodeType: 'Mirror' | 'Datasheet' | 'View' | 'Folder' | 'Automation', id: string): void;
}

export const FolderBreadcrumb: React.FC<React.PropsWithChildren<IFolderBreadcrumbProps>> = (props) => {
  const colors = useThemeColors();
  const { parents, onNodeClick } = props;
  return (
    <div className={styles.breadCrumb}>
      <HorizontalScroll>
        <Breadcrumb separator={<ChevronRightOutlined size={10} color={colors.thirdLevelText} />}>
          {parents?.map((breadItem) => (
            <Breadcrumb.Item
              key={breadItem.nodeId || breadItem.nodeName}
              onClick={() => onNodeClick('Folder', breadItem.nodeId!)}
              className={styles.folderBreadItem}
            >
              {breadItem.nodeName}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </HorizontalScroll>
    </div>
  );
};
