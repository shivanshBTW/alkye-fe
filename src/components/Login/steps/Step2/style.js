import { css } from '@emotion/react'
import { theme } from '../../../../config/themes/light'

export const buttonStyle = css`
  min-width: unset;
  padding: 18px 34px;
  text-wrap: nowrap;
`

export const passwordInstructionsStyle = css`
  ${theme.typography.h6};
  ${theme.typography.fontWeightRegular};
  color: ${theme.main.tertiaryTextColor};
  @media (max-width: 768px) {
    ${theme.typography.body1};
    text-decoration: underline;
  }
`
