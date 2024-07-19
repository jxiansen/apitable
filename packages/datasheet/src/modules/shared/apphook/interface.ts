import { ModalConfirmKey } from '@apitable/core';

export interface IModalConfirmArgs {
  key: ModalConfirmKey;
  metaData: any;
}

export enum WizardIdConstant {
  Questionnaire = 1,
  Guide = 2,
  Notice = 6,
  RePlayGanttVideo = 34,
}
