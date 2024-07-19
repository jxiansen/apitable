

import { IElementRenderProps, IElement } from '../../interface/element';

import Decorate from '../element_decorate';
import styles from './quote_item.module.less';

const QuoteItem = (props: IElementRenderProps<IElement>) => {
  const { children, attributes, element } = props;

  return (
    <Decorate element={element} operationClassName={styles.quoteItemOpt}>
      <div {...attributes} className={styles.quoteItem}>
        {children}
      </div>
    </Decorate>
  );
};

export default QuoteItem;
