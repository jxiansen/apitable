

import Trigger, { TriggerProps } from 'rc-trigger';
import { FC, isValidElement, useRef, useEffect, useState } from 'react';
import { IReduxState } from '@apitable/core';
import { IAvatarProps } from 'pc/components/common/avatar/avatar';
import { useAppSelector } from 'pc/store/react-redux';
import { UserCard, IUserCard } from './user_card';
import styles from './style.module.less';

interface IUserCardTrigger extends IUserCard, Partial<TriggerProps> {
  scrollTarget?: string;
  isDeleted?: boolean;
  isActive?: boolean;
  avatarProps?: IAvatarProps;
}

export const UserCardTrigger: FC<React.PropsWithChildren<IUserCardTrigger>> = (props) => {
  const {
    userId,
    memberId,
    spareName,
    spareSrc,
    spaceName,
    children,
    action = ['click'],
    isAlien,
    destroyPopupOnHide = true,
    scrollTarget,
    permissionVisible,
    isDeleted,
    isActive,
    avatarProps,
    ...rest
  } = props;
  const shareId = useAppSelector((state: IReduxState) => state.pageParams.shareId);
  const embedId = useAppSelector((state: IReduxState) => state.pageParams.embedId);
  const [cardVisible, setCardVisible] = useState(false);
  const ref = useRef<any>();

  useEffect(() => {
    if (!scrollTarget) {
      return;
    }
    const close = () => {
      ref.current && ref.current.close();
    };
    const targetDom = document.querySelector(scrollTarget);
    targetDom && targetDom.addEventListener('scroll', close);
    return () => {
      targetDom && targetDom.removeEventListener('scroll', close);
    };
  }, [scrollTarget]);

  if (!isValidElement(children)) {
    return null;
  }

  if (shareId || embedId) {
    return children;
  }
  return (
    <>
      {children && (
        <Trigger
          ref={ref}
          action={action}
          destroyPopupOnHide={destroyPopupOnHide}
          popupVisible={cardVisible}
          onPopupVisibleChange={(visible) => setCardVisible(visible)}
          popup={
            props.popup || (
              <UserCard
                userId={userId}
                memberId={memberId}
                spareName={spareName}
                spareSrc={spareSrc}
                spaceName={spaceName}
                isAlien={isAlien}
                permissionVisible={permissionVisible}
                isDeleted={isDeleted}
                isActive={isActive}
                onClose={() => setCardVisible(false)}
                avatarProps={avatarProps}
              />
            )
          }
          popupStyle={{ ...props.popupStyle, width: '240px' }}
          popupClassName={styles.userCardTrigger}
          {...rest}
        >
          {children}
        </Trigger>
      )}
    </>
  );
};
