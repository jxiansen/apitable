

import { Label as KonvaLabel } from 'react-konva';

const Label = (props: any) => {
  const { children, ...rest } = props;
  return <KonvaLabel {...rest}>{children}</KonvaLabel>;
};

export default Label;
