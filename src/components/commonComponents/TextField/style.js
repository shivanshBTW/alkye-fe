import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const textFieldRoot = css``

export const labelStyle = css`
  font-family: Söhne Test;
  font-size: 24px;
  font-weight: 400;
  line-height: 47px;
  text-align: left;
  margin-bottom: 10px;
`

export const inputComponentContainer = css`
  position: relative;
`

export const inputStyle = fullWidth => css`
  padding: 12px;
  background: ${theme.main.paper};
  border: 1.5px solid #35373b;
  border-radius: 4px;
  outline: none;

  font-family: Söhne Test;
  font-size: 24px;
  font-weight: 500;
  line-height: 50px;
  text-align: left;
  color: ${theme.main.mainTextColor};

  ${fullWidth
    ? css`
        width: 100%;
        box-sizing: border-box;
      `
    : ''}

  &::placeholder {
    color: ${theme.main.tertiaryTextColor};
  }
`

export const viewPasswordToggleStyle = css`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
