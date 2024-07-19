import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { StoreActions } from '@apitable/core';
import { PrivateRoute } from 'pc/components/route_manager/private_route';
// @ts-ignore
import { SubScribeSystem } from 'enterprise/subscribe_system/subscribe_system';

const RedirectUpgradeSpaceId = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { spaceId } = router.query as { spaceId?: string };
  if (spaceId) {
    dispatch(StoreActions.setActiveSpaceId(spaceId));
  }
  return children;
};

const UpgradeRouter = () => {
  return (
    <RedirectUpgradeSpaceId>
      <PrivateRoute>
        <SubScribeSystem />
      </PrivateRoute>
    </RedirectUpgradeSpaceId>
  );
};
export default UpgradeRouter;
