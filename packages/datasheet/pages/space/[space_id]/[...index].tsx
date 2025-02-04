import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StoreActions } from '@apitable/core';

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const path = router.asPath;
    const spaceId = router.query.space_id as string;

    if (!spaceId) {
      return;
    }

    const _path = path.split('/').slice(3).join('/');
    dispatch(StoreActions.setActiveSpaceId(spaceId));
    router.replace(`/${_path}`);
    // eslint-disable-next-line
  }, []);

  return <></>;
};

export default Page;
