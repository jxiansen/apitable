import { useRouter } from 'next/router';
import { FC } from 'react';
import { SpaceMenuTree } from 'pc/components/space_manage/space_menu_tree';
// import styles from './style.module.less';
// import { SpaceMenuTree } from '../space_manage/space_menu_tree';
import { useAppSelector } from 'pc/store/react-redux';
import { AddressSide } from './address_side';
import { TemplateCategorySide } from './template_category_side';
import { TemplateDetailSide } from './template_detail_side/template_detail_side';
import { WorkbenchSide } from './workbench_side';

export const CommonSide: FC<React.PropsWithChildren<unknown>> = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.info);

  if (router.pathname.includes('management')) {
    return user && user.isAdmin ? <SpaceMenuTree /> : <div />;
  }

  if (router.pathname.includes('workbench')) {
    return <WorkbenchSide />;
  }

  if (router.asPath.includes('org')) {
    return <AddressSide />;
  }

  if (router.asPath.includes('template') && router.query['template_id']) {
    return <TemplateDetailSide />;
  }
  return <TemplateCategorySide />;
};
