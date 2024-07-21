import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const buttonContainerRoot = align => css`
  ${align
    ? css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: ${align};
      `
    : ''}
`

export const buttonStyle = ({ fullWidth, disabled }) => css`
  padding: 18px;
  min-width: 230px;
  border: none;
  outline: none;
  cursor: pointer;

  ${theme.typography.h6};
  background: ${theme.main.primaryButtonColor};
  color: ${theme.inverted.mainTextColor};
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 12px;
    min-width: 120px;
    border-radius: 5px;
    ${theme.typography.fontWeightExtraBold};
  }

  ${fullWidth
    ? css`
        width: 100%;
        box-sizing: border-box;
      `
    : ''}

  ${disabled
    ? css`
        background: ${theme.inverted.primaryButtonColorDisabled};
        cursor: not-allowed;
        color: ${theme.inverted.mainTextColorDisabled};
      `
    : ''}
`
