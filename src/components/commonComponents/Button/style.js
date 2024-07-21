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
  padding: ${theme.spacing(2)};
  min-width: ${theme.spacing(28.75)};
  border: none;
  outline: none;
  cursor: pointer;

  ${theme.typography.h6};
  background: ${theme.main.primaryButtonColor};
  color: ${theme.inverted.mainTextColor};
  border-radius: ${theme.spacing(1.25)};

  @media (max-width: 768px) {
    padding: ${theme.spacing(1.5)};
    min-width: ${theme.spacing(15)};
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
