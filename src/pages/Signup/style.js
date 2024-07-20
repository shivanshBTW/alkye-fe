import { css } from '@emotion/react'
import { theme } from '../../config/themes/light'

export const signUpRoot = css`
  height: 100vh;
  background: ${theme.main.background};
  color: ${theme.main.mainTextColor};
  position: relative;
`

export const centerSectionContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const logoContainer = css`
  text-align: center;
  margin-bottom: 50px;
`
export const logoImage = css``

export const signUpSectionContainer = css`
  padding: 8px;
  width: 420px;
  background: ${theme.main.paper};
  padding: 40px 24px;
  position: relative;
  border-radius: 8px;
  text-align: center;

  border-width: 4px;
  border-style: solid;
  border: 2px solid transparent;
  background: linear-gradient(${theme.main.paper}, ${theme.main.paper})
      padding-box,
    linear-gradient(129.59deg, #969696 0%, #343434 98.18%) border-box;

  @media (max-width: 768px) {
    width: 80vw;
  }
`

export const secondaryHeading = css`
  color: ${theme.main.secondaryTextColor};
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`
export const mainHeading = css`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.78px;
  color: ${theme.main.mainTextColor};
  margin-top: 8px;
`

export const inputsContainer = css`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const goToLoginContainer = css`
  text-align: left;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  color: ${theme.main.tertiaryTextColor};
`
export const registerHereLink = css`
  color: ${theme.main.linkColor};
  text-decoration: none;
`
