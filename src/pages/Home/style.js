import { css } from '@emotion/react'
import { theme } from '../../config/themes/dark'

export const homeRoot = css`
  width: 700px;
  margin: 0 auto;
  padding: 70px 0;

  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const greetingText = css`
  font-family: Inter;
  font-size: 28px;
  font-weight: 500;
  line-height: 33.89px;
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const logoutIconStyle = css`
  cursor: pointer;
  width: 30px;
  height: 30px;
`

export const subtitleText = css`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${theme.tertiaryTextColor};
  margin-bottom: 25px;
  width: 580px;
`

export const postsSectionStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`
