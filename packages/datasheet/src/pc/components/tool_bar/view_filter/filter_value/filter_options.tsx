import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { FieldType, FOperator } from '@apitable/core';
import { ViewFilterContext } from 'pc/components/tool_bar/view_filter/view_filter_context';
import { IFilterOptionProps } from '../interface';
import { FilterGeneralSelect } from './filter_general_select';

export const FilterOptions: React.FC<React.PropsWithChildren<IFilterOptionProps>> = (props) => {
  const { condition, disabled, field, onChange } = props;
  const [isMulti, setIsMulti] = useState(false);
  // The field passed in here is the entity field. fieldType inside the condition is the real field.
  const fieldType = condition.fieldType === FieldType.LookUp ? FieldType.MultiSelect : condition.fieldType;
  const fieldValue = field.property.options;
  const { isViewLock: isViewLockOrigin } = useContext(ViewFilterContext);
  const isViewLock = isViewLockOrigin || disabled;
  const filterValue = condition.value ? fieldValue.filter((item: { id: any }) => condition.value.includes(item.id)) : [];

  useEffect(() => {
    if (fieldType === FieldType.MultiSelect) {
      setIsMulti(true);
    } else if (
      fieldType === FieldType.SingleSelect &&
      (condition.operator === FOperator.Contains || condition.operator === FOperator.DoesNotContain)
    ) {
      setIsMulti(true);
    } else {
      setIsMulti(false);
    }
  }, [condition.operator, fieldType]);

  function _onChange(value: string | string[] | null) {
    if (value && !Array.isArray(value)) {
      value = [value];
    }
    onChange(value);
  }

  return (
    <FilterGeneralSelect
      field={field}
      isMulti={isMulti}
      disabled={isViewLock}
      onChange={_onChange}
      cellValue={filterValue.map((item: { id: any }) => item.id)}
      listData={field.property.options}
      isViewLock={isViewLock}
    />
  );
};
