/** @jsxImportSource @emotion/react */
import EmojiPicker from 'emoji-picker-react'
import {
  emojiButtonStyle,
  emojiSelectorModalStyle,
  emojiSelectorRoot
} from './style.js'
import { useState } from 'react'

function EmojiSelector (props) {
  const { selectedEmoji, setSelectedEmoji } = props
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)

  const handleEmojiSelect = e => {
    setSelectedEmoji(e.emoji)
    setIsEmojiPickerOpen(false)
  }
  return (
    <div css={emojiSelectorRoot}>
      <div
        css={emojiButtonStyle}
        onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
      >
        {selectedEmoji}
      </div>
      <div css={emojiSelectorModalStyle}>
        <EmojiPicker
          open={isEmojiPickerOpen}
          onEmojiClick={handleEmojiSelect}
        />
      </div>
    </div>
  )
}

export default EmojiSelector
