

import { Layer as KonvaLayer } from 'react-konva';

const Layer = (props: any) => {
  const { children, ...rest } = props;
  return <KonvaLayer {...rest}>{children}</KonvaLayer>;
};

export default Layer;
