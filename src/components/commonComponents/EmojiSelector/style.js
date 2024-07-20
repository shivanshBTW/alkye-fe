import { css } from '@emotion/react'
import { theme } from '../../../config/themes/light'

export const emojiSelectorRoot = css`
  position: relative;
`

export const emojiButtonStyle = allowSelector => css`
  background-color: ${theme.paper};
  padding: 12px 15px;
  border-radius: 50%;
  cursor: ${allowSelector ? 'pointer' : 'default'};
`

export const emojiSelectorModalStyle = css`
  width: 100%;
  transition: all 0.3s;
`
