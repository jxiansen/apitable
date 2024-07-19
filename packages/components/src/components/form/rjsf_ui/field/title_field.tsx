

import React, { useState } from 'react';
import { FieldProps } from '@rjsf/core';
import styled, { css } from 'styled-components';
import { QuestionCircleOutlined } from '@apitable/icons';
import { ChevronDownOutlined } from '@apitable/icons';
import { Tooltip } from 'components';

const h = styled.div<{ hasCollapse?: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  ${(props) => {
    if (props.hasCollapse) {
      return css`
        cursor: pointer;
      `;
    }
    return;
  }}
`;

const h1 = styled(h)`
  font-size: 16px;
`;
const h2 = styled(h)`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  &:before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: rgba(201,201,201,1);
    margin-right: 8px;
    border-radius: 6px;
  }
`;
const h3 = styled(h)`
  font-size: 12px;
  padding-bottom: 8px;
  color: #8C8C8C;
`;

const titleLevel = [h1, h2, h3];

const SuffixIcon = styled.span <{ isIconRotate: boolean }>`
  transition: transform 0.3s;
  cursor: pointer;
  position: absolute;
  right: 4px;
  ${props => props.isIconRotate && css` transform: rotate(180deg);`}
`;

const DropIcon = styled(ChevronDownOutlined)`
  vertical-align: middle;
`;

const HelpIcon = styled(QuestionCircleOutlined)`
  vertical-align: -0.125em;
`;
export interface IHelp {
  text: string;
  url: string
}

// TODO: Tooltips component is missing, and helpText should be displayed when suspended on icon
const HelpIconButton = ({ help }: { help: IHelp }) => {
  if (!help) return null;
  return (
    <Tooltip content={help.text}>
      <a
        href={help.url}
        rel="noopener noreferrer"
        style={{ marginLeft: 4 }}
        target='_blank'>
        <HelpIcon color="#8c8c8c" />
      </a>
    </Tooltip>
  );
};
export const TitleField = (props: Pick<FieldProps, 'id' | 'title' | 'required'> & {
  help?: IHelp;
  hasCollapse?: boolean;
  defaultCollapse?: boolean;
  onChange?: (collapse: boolean) => void;
}) => {
  const { title, id, help, hasCollapse, defaultCollapse = false, onChange } = props;
  const [, level] = (id || '').split('-') as [string, string];
  const TitleComponent = titleLevel[Math.min(parseInt(level, 10) || 0, 2)]!;
  const [collapse, setCollapse] = useState<boolean>(defaultCollapse);

  const switchCollapse = () => {
    if (!hasCollapse) return;
    const newValue = !collapse;
    setCollapse(newValue);
    onChange && onChange(newValue);
  };

  return <TitleComponent id={id} hasCollapse={hasCollapse} onClick={switchCollapse}>
    {title}
    {help && <HelpIconButton help={help} />}
    {hasCollapse && <SuffixIcon isIconRotate={!collapse}> <DropIcon color="#8C8C8C" /></SuffixIcon>}
  </TitleComponent>;
};