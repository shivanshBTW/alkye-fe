import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const buttonContainerRoot = css``

export const buttonStyle = ({ fullWidth, disabled }) => css`
  padding: 12px;
  background: ${theme.primaryButtonColor};
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  color: ${theme.mainTextColor};

  ${fullWidth
    ? css`
        width: 100%;
        box-sizing: border-box;
      `
    : ''}

  ${disabled
    ? css`
        background: ${theme.primaryButtonColorDisabled};
        cursor: not-allowed;
        color: ${theme.mainTextColorDisabled};
      `
    : ''}
`
