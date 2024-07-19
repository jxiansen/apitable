import { useRouter } from 'next/router';
import { getSpaceNavList } from 'pc/components/space_manage/space_menu_tree';
import { useAppSelector } from 'pc/store/react-redux';
import { getEnvVariables } from 'pc/utils/env';

export const ManageAuth = ({ children }: any) => {
  const spaceResource = useAppSelector((state) => state.spacePermissionManage.spaceResource);
  const { SPACE_INTEGRATION_PAGE_VISIBLE } = getEnvVariables();
  const router = useRouter();
  const { subPage } = router.query as { subPage: string };
  if (!spaceResource) {
    return null;
  }
  const { mainAdmin, permissions } = spaceResource;
  const spaceNavList = getSpaceNavList(mainAdmin, permissions, !SPACE_INTEGRATION_PAGE_VISIBLE);
  const checkAuth = (spaceNavList: any[], valid?: boolean): any => {
    let route;
    for (const nav of spaceNavList) {
      if (nav.key === subPage && typeof valid === 'boolean' && !valid) {
        route = <>{router.replace('/management')}</>;
      }

      if (nav.children) {
        route = checkAuth(nav.children, nav.valid);
      }

      if (nav.key === subPage && !nav.valid) {
        route = <>{router.replace('/management')}</>;
      }

      if (route) {
        return route;
      }
    }
  };

  const invalidRoute = checkAuth(spaceNavList);

  if (invalidRoute) {
    return invalidRoute;
  }
  return <>{children}</>;
};
