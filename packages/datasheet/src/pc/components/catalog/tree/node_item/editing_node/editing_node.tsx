

import * as React from 'react';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ConfigConstant, INodesMapItem, StoreActions, Strings, t } from '@apitable/core';
import { RenameInput } from 'pc/components/common';
import { useCatalogTreeRequest, useRequest } from 'pc/hooks';
import { useCatalog } from 'pc/hooks/use_catalog';
import { useKeyboardCollapse } from 'pc/hooks/use_keyborad_collapse';
import { KeyCode } from 'pc/utils';

export const NODE_NAME_MIN_LEN = 1;
export const NODE_NAME_MAX_LEN = 100;

export interface IEditingNodeProps {
  node: INodesMapItem;
  isPrivate?: boolean;
}

export const EditingNode: FC<React.PropsWithChildren<IEditingNodeProps>> = ({ node, isPrivate }) => {
  const [errMsg, setErrMsg] = useState('');
  const { checkRepeat } = useCatalog();
  const dispatch = useDispatch();
  const { renameNodeReq } = useCatalogTreeRequest();
  const [value, setValue] = useState(node.nodeName);
  const { run: renameNode } = useRequest((nodeId: string, nodeName: string) =>
    renameNodeReq(nodeId, nodeName, isPrivate ? ConfigConstant.Modules.PRIVATE : undefined), { manual: true }
  );

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    if (!errMsg && node.nodeName !== inputValue) {
      renameNode(node.nodeId, inputValue);
      return;
    }
    cancelEdit();
  };

  const cancelEdit = () => {
    dispatch(StoreActions.setEditNodeId('', isPrivate ? ConfigConstant.Modules.PRIVATE : undefined));
    dispatch(StoreActions.setEditNodeId('', ConfigConstant.Modules.FAVORITE));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = node;
    const initVal = e.target.value;
    const inputValue = initVal.trim();
    setValue(initVal);
    if (inputValue.length < NODE_NAME_MIN_LEN || inputValue.length > NODE_NAME_MAX_LEN) {
      setErrMsg(t(Strings.name_length_err));
      return;
    }

    if (checkRepeat(node.nodeId, inputValue, type)) {
      setErrMsg(t(Strings.name_repeat));
      return;
    }
    if (errMsg) {
      setErrMsg('');
    }
  };

  const keyDownHandler = (e: React.KeyboardEvent) => {
    switch (e.keyCode) {
      case KeyCode.Enter: {
        const initVal = (e.target as HTMLInputElement).value;
        const inputValue = initVal.trim();
        setValue(initVal);
        submit(inputValue);
        break;
      }
      case KeyCode.Esc: {
        cancelEdit();
        break;
      }
      default:
        return;
    }
  };

  const submit = (nodeName: string) => {
    const { nodeId, type } = node;
    if (errMsg) {
      return;
    }
    if (nodeName === node.nodeName) {
      cancelEdit();
      return;
    }
    if (checkRepeat(nodeId, nodeName, type)) {
      setErrMsg(t(Strings.name_repeat));
      return;
    }
    renameNode(nodeId, nodeName);
    cancelEdit();
  };

  useKeyboardCollapse(() => {
    submit(value);
  });

  return (
    <RenameInput
      value={value}
      autoFocus
      size="small"
      defaultValue={node.nodeName}
      errorMsg={errMsg}
      onBlur={blurHandler}
      onChange={changeHandler}
      onKeyDown={keyDownHandler}
    />
  );
};
