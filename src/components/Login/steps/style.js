import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const stepRootStyle = css`
  display: flex;
  flex-direction: row;
  column-gap: ${theme.spacing(22.5)};
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: ${theme.spacing(5)};
  }
`

export const stepDetailsSectionStyle = css`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing(2.5)};
  @media (max-width: 768px) {
    row-gap: ${theme.spacing(1.5)};
  }
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
  @media (max-width: 768px) {
    ${theme.typography.fontWeightRegular}
  }
`

export const inputSectionContainer = css`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing(2.5)};
  padding-top: ${theme.spacing(5)};
  @media (max-width: 768px) {
    padding-top: ${theme.spacing(1)};
  }
`

export const buttonSectionContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: ${theme.spacing(5)};
`

export const disclaimerStyle = css`
  ${theme.typography.body2}
  ${theme.typography.fontWeightRegular}
  color: ${theme.main.tertiaryTextColor};
  margin-top: ${theme.spacing(7)};
`
