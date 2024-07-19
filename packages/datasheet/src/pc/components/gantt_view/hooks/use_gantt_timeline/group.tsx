

import { Group as KonvaGroup } from 'react-konva';

const Group = (props: any) => {
  const { children, _ref, ...rest } = props;
  return (
    <KonvaGroup ref={_ref} {...rest}>
      {children}
    </KonvaGroup>
  );
};

export default Group;
