import * as React from 'react';
import { useCallback, useMemo } from 'react';
import { Transforms } from 'slate';
import { ReactEditor, useReadOnly, useSlate } from 'slate-react';
import { DeleteOutlined } from '@apitable/icons';
import { IElement, IElementRenderProps } from '../../interface/element';
import styles from './divider.module.less';

const Divider = React.memo(({ children, element }: IElementRenderProps<IElement>) => {
  const readOnly = useReadOnly();
  const editor = useSlate() as ReactEditor;

  const handleDelete = useCallback(() => {
    try {
      const path = ReactEditor.findPath(editor, element);
      Transforms.removeNodes(editor, { at: path });
    } catch (error) {
      console.log(error);
    }
  }, [editor, element]);

  const DotList = useMemo(() => {
    return Array(4)
      .fill('')
      .map((_item, idx) => <i key={idx} className={styles.dot} />);
  }, []);

  return (
    <div className={styles.wrap}>
      <div contentEditable={false} className={styles.divider}>
        {DotList}
        {!readOnly && <DeleteOutlined className={styles.deleteBtn} onClick={handleDelete} />}
      </div>
      {children}
    </div>
  );
});

export default Divider;
