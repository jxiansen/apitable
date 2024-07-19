import { Checkbox } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import * as React from 'react';
import { Button } from '@apitable/components';
import { Api } from '@apitable/core';
import { Modal } from 'pc/components/common';
import { useRequest } from 'pc/hooks';

export const BatchDeleteNode: React.FC<React.PropsWithChildren<unknown>> = () => {
  const [treeList, setTreeList] = useState<any[]>([]);
  const [value, setValue] = useState<string[]>([]);
  const allowList = ['integration', 'test', 'localhost'];
  const isSafeEnv = allowList.some((item) => {
    return location.hostname.startsWith(item);
  });

  const { run } = useRequest(Api.getNodeTree, {
    manual: true,
    onSuccess: (res) => {
      const { success } = res.data;
      if (success) {
        setTreeList(res.data.data['children']);
        return;
      }
    },
  });

  const checkboxChange = (value: any[]) => {
    setValue(value);
  };

  useEffect(() => {
    if (!isSafeEnv) {
      return;
    }
    run(1);
  }, [run, isSafeEnv]);

  const options = useMemo(() => {
    if (!isSafeEnv) {
      return [];
    }
    return treeList.map((item) => {
      return {
        label: item.nodeName,
        value: item.nodeId,
      };
    });
  }, [treeList, isSafeEnv]);

  if (!isSafeEnv) {
    return <div>该功能不可用</div>;
  }

  const selectAll = () => {
    const _value = treeList.map<string>((item) => {
      return item.nodeId;
    });
    setValue(_value);
  };
  const clear = () => {
    setValue([]);
  };

  const deleteNode = () => {
    Modal.danger({
      title: '这是一个高危险操作',
      content: '你将会删除目录树上的节点',
      onOk() {
        Modal.danger({
          title: '再给你一次机会',
          content: '你真的要删除这些节点么',
          onOk() {
            Promise.all(
              value.map((id) => {
                return Api.delNode(id);
              }),
            ).finally(() => {
              location.reload();
            });
          },
          type: 'danger',
          onCancel() {
            setValue([]);
          },
        });
      },
      type: 'danger',
      onCancel() {
        setValue([]);
      },
    });
  };

  return (
    <div>
      <Checkbox.Group options={options} value={value} defaultValue={['Pear']} onChange={checkboxChange} />
      <p>
        <Button onClick={selectAll}>全选</Button>
        <Button onClick={clear}>全不选</Button>
      </p>
      <Button block color={'danger'} onClick={deleteNode} disabled={!value.length}>
        删除
      </Button>
    </div>
  );
};
