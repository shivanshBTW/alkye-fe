import { css } from '@emotion/react'
import { theme } from '../../config/themes/light'

export const loginRoot = css`
  background: ${theme.main.background};
  color: ${theme.main.mainTextColor};
  padding: ${theme.spacing(13)};
  @media (max-width: 768px) {
    padding: ${theme.spacing(5)};
  }
`

export const loginSectionContainer = css`
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing(10)};
  background: ${theme.main.paper};
  padding: ${theme.spacing(12)} ${theme.spacing(11)} ${theme.spacing(19)};
  border-radius: ${theme.spacing(6)};
  @media (max-width: 768px) {
    row-gap: ${theme.spacing(5)};
    padding: ${theme.spacing(6)} ${theme.spacing(5)} ${theme.spacing(13)};
  }
`

export const logoStyle = css`
  width: ${theme.spacing(16)};
  @media (max-width: 768px) {
    width: ${theme.spacing(8)};
  }
`
