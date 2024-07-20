import { css } from '@emotion/react'
import { theme } from '../../../../config/themes/light'

export const stepDetailsSectionStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const stepNumberStyle = css`
  ${theme.typography.h6}
  ${theme.typography.fontWeightRegular}
  text-transform: uppercase;
`
