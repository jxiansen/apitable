import { createContext } from 'react';
import { IFormProps } from '@apitable/core';

export interface IFormContext {
  mount: boolean;
  formProps: IFormProps;
  formData: { [key: string]: any };
  formErrors: { [key: string]: any };
  setFormData: (fieldId: string, value: any) => void;
  setFormErrors: (fieldId: string, errMsg: string) => void;
  setFormToStorage?: (fieldId: string, value: string) => void;
  showWorkdoc: boolean;
  setShowWorkdoc: (show: boolean) => void;
}

export const FormContext = createContext({} as IFormContext);
