import { css } from '@emotion/react'
import { theme } from '../../../config/themes/dark'

export const emojiSelectorRoot = css`
  position: relative;
`

export const emojiButtonStyle = css`
  background-color: ${theme.paper};
  padding: 12px 15px;
  border-radius: 50%;
`

export const emojiSelectorModalStyle = css`
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
`
