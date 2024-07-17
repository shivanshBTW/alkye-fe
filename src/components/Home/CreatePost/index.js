/** @jsxImportSource @emotion/react */
import Button from '../../commonComponents/Button'
import {
  buttonContainer,
  buttonStyle,
  createPostRoot,
  emojiSelectorButton,
  headingStyle,
  inputContainerStyle,
  inputStyle
} from './style.js'
import EmojiSelector from '../../commonComponents/EmojiSelector/index.js'
import { useState } from 'react'

function CreatePost (props) {
  const [selectedEmoji, setSelectedEmoji] = useState('💬')

  return (
    <div css={createPostRoot}>
      <div css={headingStyle}>Create post</div>
      <div css={inputContainerStyle}>
        <textarea
          name='message'
          rows='1'
          type='text'
          placeholder='How are you feeling today?'
          css={inputStyle}
        />
        <div css={emojiSelectorButton}>
          <EmojiSelector
            allowSelector
            selectedEmoji={selectedEmoji}
            setSelectedEmoji={setSelectedEmoji}
          />
        </div>
      </div>
      <div css={buttonContainer}>
        <Button style={buttonStyle}>Post</Button>
      </div>
    </div>
  )
}

export default CreatePost
