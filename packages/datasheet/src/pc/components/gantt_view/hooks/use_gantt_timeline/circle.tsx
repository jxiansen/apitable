import { Circle as KonvaCircle } from 'react-konva';

const Circle = (props: any) => {
  const { _ref, ...rest } = props;
  return <KonvaCircle ref={_ref} {...rest} />;
};

export default Circle;
