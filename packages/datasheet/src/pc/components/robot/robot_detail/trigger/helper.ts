import produce from 'immer';
import { Field, FOperator, IExpressionOperand, IField, IFieldMap, IViewColumn, OperandTypeEnums, OperatorEnums, t, Strings } from '@apitable/core';

export const getFields = (columns: IViewColumn[], fieldMap: IFieldMap) => {
  if (!columns) return [];
  return columns?.map((column) => {
    return fieldMap[column.fieldId];
  });
};

const fop2opMap = {
  [FOperator.Is]: OperatorEnums.Equal,
  [FOperator.IsNot]: OperatorEnums.NotEqual,
  [FOperator.Contains]: OperatorEnums.Includes,
  [FOperator.DoesNotContain]: OperatorEnums.NotIncludes,
  [FOperator.IsEmpty]: OperatorEnums.IsNull,
  [FOperator.IsNotEmpty]: OperatorEnums.IsNotNull,
  [FOperator.IsGreater]: OperatorEnums.GreaterThan,
  [FOperator.IsGreaterEqual]: OperatorEnums.GreaterThanOrEqual,
  [FOperator.IsLess]: OperatorEnums.LessThan,
  [FOperator.IsLessEqual]: OperatorEnums.LessThanOrEqual,
};
const fOperator2Operator = (fOperator: FOperator) => {
  return fop2opMap[fOperator] || OperatorEnums.IsNotNull;
};

export const op2fop = (op: OperatorEnums) => {
  // fop2opMap key value reverse
  const op2fopMap = Object.keys(fop2opMap).reduce(
    (acc, key) => {
      acc[fop2opMap[key]] = key as FOperator;
      return acc;
    },
    {} as { [key: string]: FOperator },
  );
  return op2fopMap[op];
};

export const getOperatorOptions = (field: IField) => {
  const fOperators: FOperator[] = Field.bindModel(field).acceptFilterOperators;
  // No support for "IsRepeat" operations
  return fOperators
    .filter((fop) => fop != FOperator.IsRepeat)
    .map((fop) => {
      return {
        value: fOperator2Operator(fop),
        label: Field.bindModel(field).showFOperatorDesc(fop),
      };
    })
    .filter(Boolean);
};

export const getBooleanOptionName = (value: string): string => {
  if (value === 'and') {
    return t(Strings.robot_trigger_match_condition_and);
  }
  if (value === 'or') {
    return t(Strings.robot_trigger_match_condition_or);
  }
  return '';
};

export enum FilterTypeEnums {
  Filter = 'filter',
  FilterGroup = 'filterGroup',
}

export const addNewFilter = (filter: { operator: OperatorEnums }, type: FilterTypeEnums, primaryFieldId?: string) => {
  const getNewFilter = () => {
    const newFilter: IExpressionOperand = {
      type: OperandTypeEnums.Expression,
      value: {
        operator: OperatorEnums.IsNotNull,
        operands: [
          { type: OperandTypeEnums.Literal, value: primaryFieldId },
          { type: OperandTypeEnums.Literal, value: '' },
        ],
      },
    };
    if (type === FilterTypeEnums.FilterGroup) {
      const newFilterExpression: IExpressionOperand = {
        type: OperandTypeEnums.Expression,
        value: {
          operator: filter?.operator || OperatorEnums.And,
          operands: [newFilter],
        },
      };
      return newFilterExpression;
    }
    return newFilter;
  };
  const newFilter = getNewFilter();
  if (filter) {
    return produce(filter, (draft) => {
      // @ts-ignore
      draft.operands.push(newFilter);
    });
  }
  // When the filter is created initially, it is always returned as a group.
  return {
    operator: OperatorEnums.And,
    operands: [newFilter],
  };
};
