import { useKeyPress } from 'ahooks';
import type { InputRef } from 'antd';
import * as React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getArrayLoopIndex } from '@apitable/core';

export interface IUseSelectProps {
  inputRef?: React.RefObject<InputRef>;
  containerRef?: React.RefObject<HTMLDivElement>;
  listLength: number;
  listContainerRef?: React.RefObject<HTMLDivElement>;
  activeItemClass?: string;
  onEnter?: (index: number) => void;
}

export const useSelectIndex = (props: IUseSelectProps) => {
  const [index, setIndex] = useState(-1);
  const { inputRef, listContainerRef, activeItemClass, listLength, onEnter, containerRef } = props;
  const isEditing = () => {
    if (inputRef) {
      return document.activeElement === ReactDOM.findDOMNode(inputRef.current?.input) || document.activeElement === inputRef.current;
    }
    if (containerRef && containerRef.current) {
      return containerRef.current.contains(document.activeElement);
    }
    return false;
  };
  const updateIndex = (e: KeyboardEvent, plusOrNot: number) => {
    if (isEditing()) {
      e.preventDefault();
      setIndex(getArrayLoopIndex(listLength, index, plusOrNot));
      // Follow the scroll to the active item in the current list
      if (listContainerRef?.current && activeItemClass) {
        const activeElem = listContainerRef.current.querySelector(activeItemClass);
        activeElem && activeElem.scrollIntoView({ block: 'nearest' });
      }
    }
  };

  useEffect(() => {
    if (!listContainerRef?.current) {
      return;
    }
    if (index === -1) {
      if (listContainerRef?.current) {
        listContainerRef?.current.scrollTo(0, 0);
      }
    }
  }, [index, listContainerRef]);

  useKeyPress('UpArrow', (e) => {
    updateIndex(e, -1);
  });
  useKeyPress('DownArrow', (e) => {
    updateIndex(e, +1);
  });
  useKeyPress('Enter', (e) => {
    e.stopImmediatePropagation();
    e.stopPropagation();
    if (isEditing()) {
      onEnter && index > -1 && onEnter(index);
    }
  });
  return { index, setIndex };
};
