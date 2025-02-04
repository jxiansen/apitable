import { editRgbaOpacity } from 'helper';
import { TextInput } from 'components/text_input';
import styled, { css } from 'styled-components';
import { applyDefaultTheme } from 'theme';
import { IPaginationStatus } from './interface';

export const PaginationContainer = styled.div.attrs(applyDefaultTheme)`
  display: flex;
  align-items: center;
`;

export const PaginationItem = styled.button.attrs(applyDefaultTheme)<IPaginationStatus>`
  min-width: 24px;
  height: 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  transition:
    color,
    background-color 0.3s;
  box-sizing: border-box;
  flex-shrink: 0;
  outline: none;
  padding: 0 2px;
  border: none;
  background: none;
  ${(props) => {
    return css`
      margin-right: ${props.lastRangeChild ? 0 : '4px'};
    `;
  }}

  ${(props) => {
    const { disabled, theme, selected } = props;
    const { textCommonPrimary, bgBglessHover, textBrandDefault } = theme.color;
    if (disabled) {
      return css`
        cursor: not-allowed;
        color: ${editRgbaOpacity(textCommonPrimary, 0.5)};
      `;
    }
    if (selected) {
      return css`
        color: ${textBrandDefault};
        border: 1px solid ${textBrandDefault};
        cursor: pointer;
      `;
    }
    return css`
      color: ${textCommonPrimary};
      cursor: pointer;

      &:hover {
        background-color: ${bgBglessHover};
      }
    `;
  }}
`;

export const PaginationArrow = styled.div.attrs(applyDefaultTheme)<IPaginationStatus>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    const { lastRangeChild } = props;
    if (lastRangeChild) {
      return css`
        margin-left: 4px;
      `;
    }
    return css`
      margin-right: 4px;
    `;
  }}
  ${(props) => {
    const { theme, disabled } = props;
    const { textCommonPrimary, bgBglessHover } = theme.color;
    return css`
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      svg {
        fill: ${disabled ? editRgbaOpacity(textCommonPrimary, 0.5) : textCommonPrimary};
      }
      &:hover {
        background-color: ${disabled ? 'none' : bgBglessHover};
      }
    `;
  }}
`;

export const PaginationEllipse = styled.div.attrs(applyDefaultTheme)<IPaginationStatus>`
  width: 24px;
  height: 24px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    const { disabled, theme } = props;
    const { textCommonPrimary } = theme.color;
    return css`
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      color: ${disabled ? editRgbaOpacity(textCommonPrimary, 0.5) : textCommonPrimary};
    `;
  }}
`;

export const PaginationTotal = styled.div.attrs(applyDefaultTheme)`
  margin-right: 25px;
  font-size: 12px;
  color: ${(props) => props.theme.color.textCommonPrimary};
`;

export const PaginationQuickJump = styled.div.attrs(applyDefaultTheme)`
  margin-left: 24px;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.textCommonPrimary};
`;

export const PaginationInput = styled(TextInput).attrs(applyDefaultTheme)`
  width: 48px;
  margin: 0 8px;
`;
