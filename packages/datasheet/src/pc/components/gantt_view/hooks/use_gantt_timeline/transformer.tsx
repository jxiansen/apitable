

import { Transformer as TransformerComponent } from 'react-konva';

const Transformer = (props: any) => {
  const { _ref, ...rest } = props;
  return <TransformerComponent ref={_ref} {...rest} />;
};

export default Transformer;
