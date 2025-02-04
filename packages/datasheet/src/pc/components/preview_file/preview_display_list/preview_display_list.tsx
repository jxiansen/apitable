import { memo, useCallback } from 'react';
import * as React from 'react';
import { stopPropagation } from '@apitable/components';
import { IAttachmentValue, isWebp } from '@apitable/core';
import { browser } from 'modules/shared/browser';
import { getCellValueThumbSrc } from '../../../utils/file_type';
import { Item } from './Item';
import styles from './style.module.less';

interface IPreviewDisplayList {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  files: IAttachmentValue[];
}

const DISPLAY_HEIGHT = 35;

export const PreviewDisplayList: React.FC<React.PropsWithChildren<IPreviewDisplayList>> = memo((props) => {
  const { files, setActiveIndex, activeIndex } = props;

  const getFileSrc = useCallback((file: IAttachmentValue) => {
    const transformWebpIfNeeded =
      (isWebp({ name: file.name, type: file.mimeType }) &&
        browser?.satisfies({
          safari: '<14',
        })) ||
      browser?.is('iOS');
    return getCellValueThumbSrc(file, { w: DISPLAY_HEIGHT * (window.devicePixelRatio || 1), formatToJPG: transformWebpIfNeeded });
  }, []);

  return (
    <footer className={styles.footer} onMouseDown={stopPropagation}>
      <div className={styles.displayList}>
        {files.map((file, index) => {
          return (
            <Item
              key={file.id + index}
              file={file}
              index={index}
              active={index === activeIndex}
              setActiveIndex={setActiveIndex}
              imgSrc={getFileSrc(file)}
            />
          );
        })}
      </div>
    </footer>
  );
});
