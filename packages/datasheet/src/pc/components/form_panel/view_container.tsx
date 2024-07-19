import { Dispatch, SetStateAction } from 'react';
import { Skeleton } from '@apitable/components';
import { FormContainer } from '../form_container';
import styles from './style.module.less';

export const ViewContainer = (props: { loading?: boolean; preFill: boolean; setPreFill: Dispatch<SetStateAction<boolean>> }) => {
  if (props.loading) {
    return (
      <div className={styles.skeletonWrapper}>
        <Skeleton height="24px" />
        <Skeleton count={2} style={{ marginTop: '24px' }} height="80px" />
      </div>
    );
  }

  return <FormContainer preFill={props.preFill} setPreFill={props.setPreFill} />;
};
