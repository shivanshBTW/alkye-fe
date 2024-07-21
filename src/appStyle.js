import { css } from '@emotion/react'
import { theme } from './config/themes/light'

export const appRoot = css`
  min-height: 100vh;
  background: ${theme.inverted.background};
  color: ${theme.main.mainTextColor};
`
