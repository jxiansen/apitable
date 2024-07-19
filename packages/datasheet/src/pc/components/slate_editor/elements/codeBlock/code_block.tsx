

import { IElementRenderProps, IElement } from '../../interface/element';

import Decorate from '../element_decorate';
import styles from './code.module.less';

export const CodeBlock = (props: IElementRenderProps<IElement>) => {
  const { children, attributes, element } = props;

  return (
    <Decorate element={element} indentSpace={20}>
      <code {...attributes} className={styles.codeBlock}>
        {children}
      </code>
    </Decorate>
  );
};
