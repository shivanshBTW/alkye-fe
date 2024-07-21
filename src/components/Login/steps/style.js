import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const stepRootStyle = css`
  display: flex;
  flex-direction: row;
  column-gap: 180px;
`

export const stepDetailsSectionStyle = css`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const stepNumberStyle = css`
  ${theme.typography.h6}
  ${theme.typography.fontWeightRegular}
  text-transform: uppercase;
`

export const titleInstructionStyle = css`
  ${theme.typography.h3};
  ${theme.typography.fontWeightMedium};
`

export const subTextStyle = css`
  ${theme.typography.h6}
  ${theme.typography.fontWeightRegular}
`

export const inputSectionContainer = css`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-top: 35px;
`

export const buttonSectionContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 40px;
`

export const disclaimerStyle = css`
  ${theme.typography.body2}
  ${theme.typography.fontWeightRegular}
  color: ${theme.main.tertiaryTextColor};
  margin-top: 55px;
`
