import { css } from '@emotion/react'
import { theme } from '../../config/themes/light'

export const loginRoot = css`
  background: ${theme.main.background};
  color: ${theme.main.mainTextColor};

  padding: 105px;
`

export const loginSectionContainer = css`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  background: ${theme.main.paper};
  padding: 100px 90px;
  border-radius: 50px;
`

export const logoStyle = css`
  width: 135px;
`
