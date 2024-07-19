

import { createContext } from 'react';

export interface ICalendarContext {
  ignoreMirror?: boolean;
  // Request related table data, in order to avoid authorization issues, it is necessary to provide an ID for this table.
  baseDatasheetId?: string;
}

export const ExpandLinkContext = createContext({} as ICalendarContext);
