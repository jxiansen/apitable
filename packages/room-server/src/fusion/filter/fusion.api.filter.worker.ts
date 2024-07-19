

import { evaluate, FieldType, getNewId, IDPrefix, IFormulaField, IViewRow, Selectors, ViewDerivateBase } from '@apitable/core';
import { IWorkerGetVisibleRowsJobData, IWorkerJob, WorkerJobType } from './types';

const DUMMY_FIELD_NAME = 'Virtual';

export const getVisibleRows = (data: IWorkerGetVisibleRowsJobData): IViewRow[] => {
  const { filterByFormula, state, view } = data;
  const snapshot = Selectors.getSnapshot(state)!;
  const datasheetId = Selectors.getDatasheet(state)!.id;

  if (filterByFormula) {
    // Fictitiously pass in a field for calculation
    // TODO: Here field is only used to filter themselves and get snapshot, you can consider putting forward the parameters to todo optimization?
    const field: IFormulaField = {
      id: getNewId(IDPrefix.Field),
      name: DUMMY_FIELD_NAME,
      type: FieldType.Formula,
      property: {
        datasheetId,
        expression: filterByFormula,
      },
    };
    view.rows = view.rows.filter(row => {
      const result = evaluate(
        filterByFormula,
        {
          state,
          field,
          record: snapshot.recordMap[row.recordId]!,
        },
        false,
        false,
      );
      if (result) {
        return true;
      }
      return false;
    });

    if (!view.rows.length) {
      return [];
    }
  }
  return new ViewDerivateBase(state, datasheetId).getViewDerivation(view).visibleRows;
};

export default (job: IWorkerJob) => {
  switch (job.type) {
    case WorkerJobType.GetVisibleRows:
      return getVisibleRows(job.data);
  }
};
