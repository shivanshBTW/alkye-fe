import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const createPostRoot = css`
  margin: 0 auto;
  padding: 24px 20px;
  background-color: ${theme.main.paper};
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`

export const headingStyle = css`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  text-align: left;
`

export const inputContainerStyle = css`
  position: relative;
  margin: 16px 0;
`

export const emojiSelectorButton = css`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`

export const inputStyle = css`
  width: 100%;
  box-sizing: border-box;
  background: ${theme.main.paper1};
  padding: 31px 15px;
  padding-left: 80px;
  border: none;
  outline: none;
  border-radius: 8px;
  color: ${theme.main.mainTextColor};
  resize: vertical;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;

  &::placeholder {
    color: ${theme.main.tertiaryTextColor};
  }
`

export const buttonContainer = css`
  text-align: right;
`
export const buttonStyle = css`
  padding: 12px 40px;
`
