import { FC, memo } from 'react';
import { NodeProps } from '@apitable/react-flow';
import { INodeData } from '../../interfaces';
import styles from './styles.module.less';

export const CycleNode: FC<React.PropsWithChildren<NodeProps<INodeData>>> = memo((props) => {
  const { data } = props;

  return (
    <div className={styles.cycleNode}>
      <span>{data.recordName}</span>
    </div>
  );
});
