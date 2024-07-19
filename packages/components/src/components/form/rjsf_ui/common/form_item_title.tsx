import styled, { css } from 'styled-components';
import { applyDefaultTheme } from 'theme';

export const FormItemTitle = styled.div.attrs(applyDefaultTheme)<{ error?: boolean }>`
  color: #8c8c8c;
  font-size: 12px;
  padding-bottom: 8px;
  ${(props) => {
    const theme = props.theme;
    return css`
      color: ${props.error ? theme.color.errorColor : theme.color.fc3};
    `;
  }}
`;
