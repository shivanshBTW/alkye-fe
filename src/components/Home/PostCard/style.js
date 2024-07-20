import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const createPostRoot = css`
  margin: 0 auto;
  padding: 24px 20px;
  background-color: ${theme.paper};
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

  display: flex;
  align-items: center;
  gap: 10px;
`
export const avatarImageContainer = css`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${theme.paper1};
`

export const avatarImageStyle = css`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`

export const nameContainer = css``
export const nameStyle = css`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: left;
  margin-bottom: 5px;
  color: ${theme.posterNameColor};
`

export const timeContainer = css`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  text-align: left;
  color: ${theme.tertiaryTextColor};
`

export const inputContainerStyle = css`
  position: relative;
  padding: 16px 0;
`

export const emojiSelectorButton = css`
  position: absolute;
  left: 15px;
  top: 32px;
`
// transform: translateY(-50%);

export const inputStyle = css`
  width: 100%;
  box-sizing: border-box;
  background: ${theme.paper1};
  padding: 16px 15px;
  min-height: 78px;
  padding-left: 80px;
  border: none;
  outline: none;
  border-radius: 8px;
  color: ${theme.tertiaryTextColor};
  resize: none;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;

  &::placeholder {
    color: ${theme.tertiaryTextColor};
  }
`

export const buttonContainer = css`
  text-align: left;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.tertiaryTextColor};
  cursor: pointer;
  &:hover {
    color: ${theme.mainTextColor};
  }
`
export const buttonStyle = css`
  padding: 12px 40px;
`
