import { css } from '@emotion/react'
import { theme } from '../../config/themes/light'

export const loginRoot = css`
  background: ${theme.background};
  color: ${theme.mainTextColor};

  padding: 105px;
`

export const loginSectionContainer = css`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  background: ${theme.paper};
  padding: 100px 90px;
  border-radius: 50px;
`

export const logoStyle = css`
  width: 135px;
`
