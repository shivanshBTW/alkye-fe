import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const footerRoot = css`
  padding: ${theme.spacing(13)};
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing(10)};
  background: ${theme.inverted.paper};
  color: ${theme.inverted.mainTextColor};
  overflow: hidden;
  width: fit-content;
  margin: 0 auto;
  @media (max-width: 768px) {
    row-gap: ${theme.spacing(5)};
    padding: ${theme.spacing(4)};

    width: unset;
    margin: unset;
  }
`

export const iconsContainerStyle = css`
  display: flex;
  flex-direction: row;
  column-gap: ${theme.spacing(6)};
  @media (max-width: 768px) {
    column-gap: ${theme.spacing(3)};
  }
  width: fit-content;
`

export const socialIconStyle = css`
  width: ${theme.spacing(6)};
  @media (max-width: 768px) {
    width: ${theme.spacing(3)};
  }
`

export const footerLinksContainer = css`
  display: flex;
  flex-direction: row;
  column-gap: ${theme.spacing(15)};
  flex-wrap: nowrap;
  width: fit-content;
  @media (max-width: 768px) {
    column-gap: unset;
    flex-wrap: wrap;
    justify-content: space-between;
    width: unset;
  }
`

export const linkGroupContainerStyle = css`
  display: flex;
  flex-direction: column;
  margin-right: ${theme.spacing(5)};
  white-space: nowrap;
  @media (max-width: 768px) {
    flex: 0 0 50%;
    flex: 50%;
    margin-right: 0;
  }
`

export const footerLinkStyle = css`
  ${theme.typography.h6};
  color: ${theme.inverted.mainTextColor};
  margin-bottom: ${theme.spacing(2.5)};
  text-decoration: none;
  @media (max-width: 768px) {
    margin-bottom: ${theme.spacing(1.5)};
  }
`

export const copyRightStyle = css`
  ${theme.typography.h6};
  color: ${theme.inverted.mainTextColor};
  width: fit-content;
`
