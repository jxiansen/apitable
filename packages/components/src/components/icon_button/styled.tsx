

import styled, { css } from 'styled-components';
import { applyDefaultTheme } from 'theme';
import { IIconButtonWrapperProps } from './interface';

export const sizeMap = {
  small: {
    size: 24,
    borderRadius: 4,
  },
  large: {
    size: 32,
    borderRadius: 6,
  }
};

export const IconButtonStyle = styled.div.attrs(applyDefaultTheme) <IIconButtonWrapperProps>`
  cursor: pointer;
  padding: 4px;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    pointer-events: none;
  }
  &[type="button"] {
    border: 0;
    &[disabled] {
      cursor: not-allowed;
      opacity: .5;
    }
  }
  ${(props) => {
    // disabled
    if (props.disabled) {
      return css`
        cursor: not-allowed;
        opacity: .5;
      `;
    }
    return '';
  }}
  ${(props) => {
    const size = props.size || 'small';
    const isSquare = props.shape === 'square';
    const _size = sizeMap[size];
    return css`
      width: ${_size.size}px;
      height: ${_size.size}px;
      border-radius: ${isSquare ? _size.borderRadius + 'px' : '50%'};
    `;
  }}
  ${(props) => {
    const { color } = props.theme;
    const isSquare = props.shape === 'square';
    switch (props.variant) {
      case 'default':
        let defaultVariant = css`
            color: ${color.textCommonTertiary};
            background: ${props.active ? color.bgBglessActiveSolid : 'unset'};
          `;
        if (!props.active && !props.disabled) {
          defaultVariant = [
            ...defaultVariant,
            css`
              &:hover {
                background: ${color.bgBglessHover};
              }
              &:active {
                background: ${color.bgBglessActive};
              }
            `
          ];
        }
        return defaultVariant;

      case 'background':
        let bgVariant = css`
           border-radius: ${isSquare ? '6px' : '32px'};
           color: ${color.textCommonTertiary};
           background: ${color.bgControlsDefault};
        `;
        if (!props.disabled) {
          bgVariant = [
            ...bgVariant,
            css`
              &:hover {
                background: ${props.disabled ? 'inherit' : color.bgBglessHoverSolid};
              }
              &:active {
                background: ${props.disabled ? 'inherit' : color.bgBglessActiveSolid};
              }
            `
          ];
        }
        return bgVariant;
      case 'blur':
        let blurVariant = css`
          border-radius: ${isSquare ? '6px' : '32px'};
          color: ${color.textCommonTertiary};
          background: ${color.bgControlsDefault};
          @supports (backdrop-filter: blur(16px)) {
            backdrop-filter: blur(3px);
            opacity: 0.7;
          }
        `;
        if (!props.disabled) {
          blurVariant = [
            ...blurVariant,
            css`
              &:hover {
                background: ${color.bgBglessHoverSolid};
                opacity: 1;
              }
              &:active {
                transform: scale(0.5, 0.5);
                background: ${color.bgBglessActiveSolid};
              }
            `
          ];
        }
        return blurVariant;
    }
    return;
  }}
`;
