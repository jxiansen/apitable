import * as React from 'react';
import { ILinkField } from '@apitable/core';
import { FieldSearchPanel, IFieldSearchPanelProps, ShowType } from './search_field_panel';

type ILookFieldPanelProps = Pick<IFieldSearchPanelProps, 'onChange' | 'fields' | 'field' | 'activeFieldId' | 'setSearchPanelVisible'> & {
  relatedLinkField: ILinkField;
};

export const LookupFieldPanel: React.FC<React.PropsWithChildren<ILookFieldPanelProps>> = (props) => {
  return <FieldSearchPanel {...props} showType={ShowType.LookField} />;
};
