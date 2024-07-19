

import { IReduxState, IViewProperty } from '@apitable/core';

export enum WorkerJobType {
  GetVisibleRows,
}

export type IWorkerJob = IWorkerGetVisibleRowsJob;

export interface IWorkerGetVisibleRowsJob {
  type: WorkerJobType.GetVisibleRows;
  data: IWorkerGetVisibleRowsJobData;
}

export interface IWorkerGetVisibleRowsJobData {
  filterByFormula?: string;
  state: IReduxState;
  view: IViewProperty;
}
