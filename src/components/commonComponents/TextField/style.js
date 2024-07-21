import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const textFieldRoot = css``

export const labelStyle = css`
  ${theme.typography.h6};
  ${theme.typography.fontWeightRegular};
  margin-bottom: ${theme.spacing(1.25)};
`

export const inputComponentContainer = css`
  position: relative;
`

export const inputStyle = fullWidth => css`
  padding: ${theme.spacing(3.5)} ${theme.spacing(6)};
  background: ${theme.main.paper};
  border: 1px solid #939393;
  border-radius: ${theme.spacing(0.5)};
  outline: none;

  ${theme.typography.h6}
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

  @media (max-width: 768px) {
    border-width: 0.5px;
    padding: ${theme.spacing(2)} ${theme.spacing(3)};
  }
`

export const viewPasswordToggleStyle = css`
  position: absolute;
  right: ${theme.spacing(6)};
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: ${theme.spacing(3)};
  @media (max-width: 768px) {
    right: ${theme.spacing(3)};
  }
`
