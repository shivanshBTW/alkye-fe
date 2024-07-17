/** @jsxImportSource @emotion/react */
import EmojiPicker from 'emoji-picker-react'
import {
  emojiButtonStyle,
  emojiSelectorModalStyle,
  emojiSelectorRoot
} from './style.js'
import { useState } from 'react'
import { Popover } from 'react-tiny-popover'

function EmojiSelector (props) {
  const { selectedEmoji, setSelectedEmoji, allowSelector } = props
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)

  const handleEmojiSelect = e => {
    setSelectedEmoji(e.emoji)
    setIsEmojiPickerOpen(false)
  }
  return (
    <div css={emojiSelectorRoot}>
      <Popover
        isOpen={isEmojiPickerOpen && allowSelector}
        positions={['top', 'bottom']} // preferred positions by priority
        onClickOutside={() => setIsEmojiPickerOpen(false)}
        content={
          <div css={emojiSelectorModalStyle}>
            <EmojiPicker
              open={isEmojiPickerOpen}
              onEmojiClick={handleEmojiSelect}
            />
          </div>
        }
      >
        <div
          css={emojiButtonStyle(allowSelector)}
          onClick={() =>
            allowSelector && setIsEmojiPickerOpen(!isEmojiPickerOpen)
          }
        >
          {selectedEmoji}
        </div>
      </Popover>
    </div>
  )
}

export default EmojiSelector
