

import cx from 'classnames';
import { useMemo } from 'react';
import { IElementRenderProps, IElement } from '../../interface/element';

import Decorate from '../element_decorate';
import styles from './list_item.module.less';

const ListItem = (props: IElementRenderProps<IElement>) => {
  const { children, attributes, element } = props;
  const itemData = element.data;
  const indent = itemData.indent || 0;

  const listType = useMemo(() => {
    return indent % 3;
  }, [indent]);

  return (
    <Decorate element={element} startIndent={24}>
      <li {...attributes} className={cx(styles.listItem, styles[`ordered${indent}`])} data-list-type={listType}>
        {children}
      </li>
    </Decorate>
  );
};

export default ListItem;
