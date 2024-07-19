

import { forwardRef, useImperativeHandle, useRef } from 'react';
import * as React from 'react';
import { FocusHolder } from '../focus_holder';
import { IEditor, IBaseEditorProps } from '../interface';

export interface IEditorProps extends IBaseEditorProps {
  editing: boolean;
  style: React.CSSProperties;
  toggleEditing?: (next?: boolean) => void;
}

export const NoneEditorBase: React.ForwardRefRenderFunction<IEditor, IEditorProps> = (_props, ref) => {
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

  return <FocusHolder ref={inputRef} />;
};

export const NoneEditor = forwardRef(NoneEditorBase);
