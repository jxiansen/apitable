

import { nanoid } from 'nanoid';

export function generateRowId() {
  return nanoid();
}

export function generateKeyedFormData(formData: any) {
  const { operands } = formData.value;
  const newOperands = operands.map((v: { key: any }) => ({ ...v, key: v.key || generateRowId() }));
  return {
    ...formData,
    value: {
      ...formData.value,
      operands: newOperands,
    },
  };
  // return Array.isArray(formData) ? formData.map(item => {
  //   return {
  //     key: generateRowId(),
  //     item,
  //   };
  // }) : [];
}

export function keyedToPlainFormData(keyedFormData: any) {
  const { operands } = keyedFormData.value;
  const newOperands = operands.map((v: any) => {
    // eslint-disable-next-line
    const { key, ...rest } = v;
    return { ...rest };
  });
  return {
    ...keyedFormData,
    value: {
      ...keyedFormData.value,
      operands: newOperands,
    },
  };
  // return keyedFormData.map((keyedItem: any) => keyedItem.item);
}

export const EmptyArrayOperand = {
  type: 'Expression',
  value: {
    operator: 'newArray',
    operands: [],
  },
};
