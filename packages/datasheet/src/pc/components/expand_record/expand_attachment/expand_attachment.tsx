

import { useMount } from 'ahooks';
import { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import * as React from 'react';
import { IAttachmentValue, RowHeightLevel, IAttacheField } from '@apitable/core';
import { FocusHolder } from 'pc/components/editors/focus_holder';
import { UploadCore, UploadCoreSize } from 'pc/components/upload_modal/upload_core';
import { IExpandFieldEditRef } from '../field_editor/field_editor';

interface IExpandAttachmentBaseProps {
  datasheetId: string;
  recordId: string;
  field: IAttacheField;
  onClick: (e: React.MouseEvent) => void;
  editable: boolean;
  cellValue: IAttachmentValue[];
  rowHeightLevel?: RowHeightLevel;
  keyPrefix?: string;
  onSave?: (cellValue: IAttachmentValue[]) => void;
  getCellValueFn?: (datasheetId: string | undefined, recordId: string, fieldId: string) => IAttachmentValue[];
}

export const ExpandAttachContext = React.createContext<{ isFocus?: boolean }>({});

export const ExpandAttachmentBase: React.ForwardRefRenderFunction<IExpandFieldEditRef, IExpandAttachmentBaseProps> = (props, ref) => {
  useImperativeHandle(
    ref,
    (): IExpandFieldEditRef => ({
      focus: () => {
        editorRef.current && editorRef.current.focus();
        return;
      },
      setValue: () => {
        return;
      },
      saveValue: () => {
        return;
      },
    }),
  );

  const firstRender = useRef(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const { recordId, field, datasheetId, editable, cellValue, onSave, getCellValueFn } = props;

  useMount(() => {
    firstRender.current = true;
  });

  return (
    <>
      <UploadCore
        recordId={recordId}
        field={field}
        datasheetId={datasheetId}
        cellValue={cellValue}
        columnCount={4}
        zoneStyle={{ padding: 0 }}
        readonly={!editable}
        size={UploadCoreSize.Normal}
        onSave={onSave}
        getCellValueFn={getCellValueFn}
        className="uploadTabWrapper"
      />
      {/* The state of focus conflicts with the dragging behaviour of the attachment, so it is
      only positioned on initial load, after which focus is no longer triggered */}
      {!firstRender.current && (
        <div style={{ height: '0px' }}>
          <FocusHolder ref={editorRef} />
        </div>
      )}
    </>
  );
};

export const ExpandAttachment = memo(forwardRef(ExpandAttachmentBase));
