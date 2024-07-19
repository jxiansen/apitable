import { CSSMotionList } from 'rc-motion';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { IMessageUIProps } from '../interface';
import { MessageUI } from './message_ui';

export function useRefCallback<T extends (...args: any[]) => any>(callback: T) {
  const callbackRef = React.useRef(callback);
  callbackRef.current = callback;
  return React.useCallback((...args: any[]) => callbackRef.current(...args), []) as T;
}

let seed = 0;
const now = Date.now();

const getUuid = () => {
  const id = seed;
  seed += 1;
  return `apitable-message_${now}_${id}`;
};

const MessageUiContainer = (props: IMessageUIProps) => {
  const [uuids, setUuids] = useState<React.Key[]>([]);
  const [uiPropsMap, setUiPropsMap] = useState<Record<React.Key, IMessageUIProps>>({});
  const remove = (removeKey: React.Key) => {
    setUuids((uuids) => uuids.filter((key) => key !== removeKey));
  };

  useEffect(() => {
    if (props.messageKey && uiPropsMap.hasOwnProperty(props.messageKey)) {
      if (uuids.includes(props.messageKey)) {
        // Component is rendering, updating content
        setUiPropsMap({
          ...uiPropsMap,
          [props.messageKey]: {
            ...uiPropsMap[props.messageKey],
            ...props,
          },
        });
        return;
      }
    }
    // First render
    const key = props.messageKey || getUuid();
    const newUuids = [...uuids];
    newUuids.push(key);
    setUuids(newUuids);
    setUiPropsMap({
      ...uiPropsMap,
      [key]: {
        ...props,
        messageKey: key,
        onDestroy: () => remove(key),
      },
    });
    // eslint-disable-next-line
  }, [props]);

  return (
    <div style={{ position: 'fixed', top: '80px', textAlign: 'center', width: '100%', pointerEvents: 'none', zIndex: 1000 }}>
      <CSSMotionList keys={uuids} motionName="apitable">
        {({ key, className: motionClassName }) => <MessageUI motionClassName={motionClassName} {...uiPropsMap[key]!} />}
      </CSSMotionList>
    </div>
  );
};

export const createUseMessage = () => {
  let domWrapper: HTMLDivElement | null = null;
  return (props: IMessageUIProps) => {
    if (!domWrapper) {
      const rootDom = document.createElement('div');
      document.body.appendChild(rootDom);
      domWrapper = rootDom;
    }
    const root = createRoot(domWrapper);
    root.render(<MessageUiContainer {...props} messageKey={props.messageKey} />);
  };
};
