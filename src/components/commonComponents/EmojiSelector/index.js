/** @jsxImportSource @emotion/react */
import EmojiPicker from 'emoji-picker-react'
import {
  emojiButtonStyle,
  emojiSelectorModalStyle,
  emojiSelectorRoot
} from './style.js'
import { useState } from 'react'

function EmojiSelector (props) {
  const { style, fullWidth, label, type, ...rest } = props
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)

  return (
    <div css={emojiSelectorRoot}>
      <div
        css={emojiButtonStyle}
        onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
      >
        💬
      </div>
      <div css={emojiSelectorModalStyle}>
        <EmojiPicker open={isEmojiPickerOpen} />
      </div>
    </div>
  )
}

export default EmojiSelector
