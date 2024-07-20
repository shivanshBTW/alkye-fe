import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const footerRoot = css`
  padding: 105px;
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  background: ${theme.inverted.paper};
`

export const iconsContainerStyle = css`
  display: flex;
  flex-direction: row;
  column-gap: 50px;
`

export const socialIconStyle = css`
  width: 50px;
`

export const footerLinksContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const linkGroupContainerStyle = css`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`

export const footerLinkStyle = css`
  font-family: Söhne Test;
  color: ${theme.inverted.mainTextColor};
  margin-bottom: 20px;
  text-decoration: none;

  font-size: 24px;
  font-weight: 600;
  line-height: 50px;
  text-align: left;
`
