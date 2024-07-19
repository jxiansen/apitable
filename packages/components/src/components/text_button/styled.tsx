import styled, { css } from 'styled-components';
import { applyDefaultTheme } from 'theme';

interface ITextButtonBaseProps {
  size?: 'x-small' | 'small' | 'middle' | 'large';
  btnColor?: 'default' | 'danger' | 'primary';
  disabled?: boolean;
  block?: boolean;
}

export const TextButtonBase = styled.button.attrs(applyDefaultTheme)<ITextButtonBaseProps>`
  cursor: pointer;
  transition: background-color 100ms linear;
  border: none;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) => {
    const sizeAttrMap = {
      'x-small': {
        height: 22,
        padding: '0 16px',
        borderRadius: 4,
        fontSize: 12,
      },
      small: {
        height: 32,
        padding: '7px 16px',
        borderRadius: 4,
        fontSize: 12,
      },
      middle: {
        height: 40,
        padding: '9px 16px',
        borderRadius: 6,
        fontSize: 14,
      },
      large: {
        height: 48,
        padding: '13px 16px',
        borderRadius: 8,
        fontSize: 14,
      },
    };
    const attr = sizeAttrMap[props.size || 'middle'];
    return css`
      border-radius: ${attr.borderRadius}px;
      padding: ${attr.padding};
      height: ${attr.height}px;
      font-size: ${attr.fontSize}px;
    `;
  }}
  &:focus {
    box-shadow: none;
    outline: none;
  }
  &:active {
    box-shadow: none;
    outline: none;
  }
  ${(props) => {
    if (props.block)
      return css`
        width: 100%;
      `;
    return;
  }}
  ${(props) => {
    if (props.disabled) {
      return css`
        cursor: not-allowed;
        opacity: 0.5;
      `;
    }
    return;
  }};
  ${(props) => {
    const {
      bgBglessHover,
      bgBglessActive,
      textCommonPrimary,
      bgBrandLightDefault,
      bgBrandLightHover,
      textBrandDefault,
      bgDangerLightDefault,
      bgDangerLightHover,
      textDangerDefault,
    } = props.theme.color;
    const colorMap = {
      default: {
        normal: textCommonPrimary,
        hover: textCommonPrimary,
        press: textCommonPrimary,
      },
      primary: {
        normal: textBrandDefault,
        hover: textBrandDefault,
        press: textBrandDefault,
      },
      danger: {
        normal: textDangerDefault,
        hover: textDangerDefault,
        press: textDangerDefault,
      },
    };
    const backgroundMap = {
      default: {
        hover: bgBglessHover,
        press: bgBglessActive,
      },
      primary: {
        hover: bgBrandLightDefault,
        press: bgBrandLightHover,
      },
      danger: {
        hover: bgDangerLightDefault,
        press: bgDangerLightHover,
      },
    };
    const btnColor = props.btnColor || 'default';
    if (props.disabled) {
      return css`
        color: ${colorMap[btnColor].normal};
        background: none;
      `;
    }
    return css`
      color: ${colorMap[btnColor].normal};
      background: none;
      &:hover {
        color: ${colorMap[btnColor].hover};
        background: ${backgroundMap[btnColor].hover};
      }
      &:active {
        color: ${colorMap[btnColor].hover};
        background: ${backgroundMap[btnColor].press};
      }
    `;
  }}
`;

export const IconSpanStyled = styled.span<{ existIcon: boolean; position: string }>`
  display: flex;
  justify-content: center;

  ${(props) => {
    if (!props.existIcon) {
      return;
    }
    if (props.position === 'suffix') {
      return css`
        margin-left: 4px;
      `;
    }
    return css`
      margin-right: 4px;
    `;
  }};
`;
