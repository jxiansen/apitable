import { forwardRef, useImperativeHandle, useRef, memo } from 'react';
import * as React from 'react';
import { IAttacheField, IAttachmentValue } from '@apitable/core';
import { UploadModal } from 'pc/components/upload_modal';
import { FocusHolder } from '../focus_holder';
import { IEditor } from '../interface';
import { IEditorProps } from '../options_editor';

interface IAttachmentEditorProps {
  cellValue: IAttachmentValue[];
  recordId: string;
  editable: boolean;
}

export const AttachmentEditorBase: React.ForwardRefRenderFunction<IEditor, IEditorProps & IAttachmentEditorProps> = (props, ref) => {
  const { recordId, field, editing, datasheetId, cellValue, onSave } = props;
  const inputRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    (): IEditor => ({
      focus: () => {
        inputRef.current && inputRef.current.focus();
      },
      onEndEdit: () => {
        return;
      },
      onStartEdit: () => {
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

  return (
    <>
      {/* The input here is just to keep it in focus so that the record can be expanded when the shortKey is space */}
      <FocusHolder ref={inputRef} />
      {editing && !props.disabled && (
        <UploadModal field={field as IAttacheField} recordId={recordId} datasheetId={datasheetId} cellValue={cellValue} onSave={onSave} />
      )}
    </>
  );
};

export const AttachmentEditor = memo(forwardRef(AttachmentEditorBase));
