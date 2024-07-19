import * as React from 'react';
import { Strings, t } from '@apitable/core';
import { SearchOutlined } from '@apitable/icons';
import { FieldSearchPanel, IFieldSearchPanelProps, ShowType } from './search_field_panel';

type ILinkFieldPanel = Pick<IFieldSearchPanelProps, 'onChange' | 'fields' | 'activeFieldId' | 'setSearchPanelVisible'>;

export const LinkFieldPanel: React.FC<React.PropsWithChildren<ILinkFieldPanel>> = (props) => {
  const { fields } = props;
  return (
    <FieldSearchPanel {...props} showType={ShowType.LinkField} errTip={fields.length ? '' : t(Strings.table_link_err)} prefix={<SearchOutlined />} />
  );
};
