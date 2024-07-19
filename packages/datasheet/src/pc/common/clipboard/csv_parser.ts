

import endsWith from 'lodash/endsWith';
import { string2Segment } from '@apitable/core';
import { browser } from '../../../modules/shared/browser';
import { ITableCellData, ITableData } from './table_data';

export const CsvDelimiter = {
  cellDelimiter: '"',
  columnDelimiter: '\t',
  commaDelimiter: ',',
  rowDelimiter: browser?.satisfies({ windows: '*' }) ? '\r\n' : '\n',
};

const { columnDelimiter, cellDelimiter } = CsvDelimiter;

const rowDelimiter = '\r\n';
const rowDelimiter2 = '\n';

export function parseCsv(data: string): ITableData | null {
  if (data == null || data === '') return null;

  const tableText: string[][] = [];
  const dl = cellDelimiter.length;
  const rdl = rowDelimiter.length;
  const rdl2 = rowDelimiter2.length;
  const cdl = columnDelimiter.length;
  const dataLength = data.length;
  let rowText: string[] = [];
  let cellText = '';
  let sbrLength: number;
  let inCell = false;

  for (let index = 0; index < dataLength; index++) {
    cellText += data[index];
    sbrLength = cellText.length;

    if (!inCell) {
      if (endsWith(cellText, cellDelimiter)) {
        if (cellText === cellDelimiter) {
          // Start with cellDelimiter, think of it as the beginning of a cell
          cellText = '';
          inCell = true;
        }
      } else if (endsWith(cellText, columnDelimiter)) {
        rowText.push(cellText.substr(0, sbrLength - cdl));
        cellText = '';
      } else if (endsWith(cellText, rowDelimiter)) {
        rowText.push(cellText.substr(0, sbrLength - rdl));
        cellText = '';
        tableText.push(rowText);
        rowText = [];
      } else if (endsWith(cellText, rowDelimiter2)) {
        rowText.push(cellText.substr(0, sbrLength - rdl2));
        cellText = '';
        tableText.push(rowText);
        rowText = [];
      }
    } else {
      if (endsWith(cellText, cellDelimiter)) {
        if (dataLength >= index + 1 + dl && cellDelimiter === data.substr(index + 1, dl)) {
          // Two consecutive cellDelimiters indicate an escape, skipping the second cellDelimiter
          index += dl;
        } else {
          cellText = cellText.substr(0, sbrLength - dl);
          inCell = false;
        }
      }
    }
  }

  // The end may not have a Delimiter ending and needs to be dealt with
  if (cellText) {
    if (endsWith(cellText, '\r\n')) {
      cellText = cellText.substr(0, cellText.length - 2);
    }
    rowText.push(cellText);
  }
  if (rowText.length) {
    tableText.push(rowText);
  }

  const tableCellData = tableText.map((rowData) =>
    rowData.map<ITableCellData>((value) => ({
      value: string2Segment(value),
      rowSpan: 1,
      colSpan: 1,
    })),
  );
  const rowCount = tableCellData.length;
  const columnCount = getMaxLength(tableCellData);

  return {
    data: tableCellData,
    rowCount,
    columnCount,
  };
}

function getMaxLength(data: any[][]) {
  let len = 0;
  for (let i = 0, ii = data.length; i < ii; i++) {
    len = Math.max(data[i].length, len);
  }
  return len;
}
