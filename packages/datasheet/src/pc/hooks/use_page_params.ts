import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { StoreActions } from '@apitable/core';
import { dispatch } from 'pc/worker/store';

export const spaceIdReg = /\/(spc\w+)/;
export const datasheetIdReg = /\/(dst\w+)/;
const viewIdReg = /\/(viw\w+)/;
export const shareIdReg = /\/(shr\w+)/;
const recordIdReg = /\/(rec\w+)/;
const fieldIdReg = /\/(fld\w+)/;
export const folderIdReg = /\/(fod\w+)/;
export const formIdReg = /\/(fom\w+)/;
const templateIdReg = /\/(tpl\w+)/;
const categoryIdReg = /\/(tpc\w+)/;
const addressReg = /org\/(\w+)/;
const widgetIdReg = /\/(wdt\w+)/;
const aiIdReg = /\/(ai\w+)/;
export const dashboardReg = /\/(dsb\w+)/;

export const automationReg = /\/(aut\w+)/;
export const resourceReg = /\/((dsb|dst)\w+)/;
export const mirrorIdReg = /\/((mir)\w+)/;
export const embedIdReg = /\/(emb\w{8,})/;
export const customPageReg = /\/(cup\w{8,})/;

export const getRegResult = (path: string, reg: RegExp) => {
  const r = path.match(reg);
  return r ? r[1] : undefined;
};

export const getPageParams = (path: string) => {
  const datasheetId = getRegResult(path, datasheetIdReg);
  const viewId = getRegResult(path, viewIdReg);
  const automationId = getRegResult(path, automationReg);

  const shareId = getRegResult(path, shareIdReg);
  const recordId = getRegResult(path, recordIdReg);
  const fieldId = getRegResult(path, fieldIdReg);
  const folderId = getRegResult(path, folderIdReg);
  const formId = getRegResult(path, formIdReg);
  const templateId = getRegResult(path, templateIdReg);
  const categoryId = getRegResult(path, categoryIdReg);
  const memberId = getRegResult(path, addressReg);
  const widgetId = getRegResult(path, widgetIdReg);
  const dashboardId = getRegResult(path, dashboardReg);
  const resourceId = getRegResult(path, resourceReg);
  const mirrorId = getRegResult(path, mirrorIdReg);
  const embedId = getRegResult(path, embedIdReg);
  const customPageId = getRegResult(path, customPageReg);
  const aiId = getRegResult(path, aiIdReg);
  const nodeId = mirrorId || datasheetId || folderId || dashboardId || formId || aiId || automationId || customPageId;

  return {
    datasheetId,
    viewId,
    shareId,
    recordId,
    fieldId,
    folderId,
    formId,
    templateId,
    categoryId,
    memberId,
    widgetId,
    dashboardId,
    automationId,
    resourceId,
    nodeId,
    mirrorId,
    embedId,
    customPageId,
    aiId,
  };
};

export const usePageParams = () => {
  const router = useRouter();
  useEffect(() => {
    const path = router.asPath;
    const action = StoreActions.setPageParams({
      ...getPageParams(path),
    });
    dispatch(action);
  }, [router]);
};
