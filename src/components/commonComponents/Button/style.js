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

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  background: ${theme.main.primaryButtonColor};
  color: ${theme.inverted.mainTextColor};
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 12px;
    min-width: 120px;
    border-radius: 5px;
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
