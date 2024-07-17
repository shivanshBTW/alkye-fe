/** @jsxImportSource @emotion/react */
import EmojiPicker from 'emoji-picker-react'
import Button from '../../commonComponents/Button'
import TextField from '../../commonComponents/TextField'
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

function CreatePost (props) {
  return (
    <div css={createPostRoot}>
      <div css={headingStyle}>Create post</div>
      <div css={inputContainerStyle}>
        <input
          type='text'
          placeholder='How are you feeling today?'
          css={inputStyle}
        />
        <div css={emojiSelectorButton}>
          <EmojiSelector />
        </div>
      </div>
      <div css={buttonContainer}>
        <Button style={buttonStyle}>Post</Button>
      </div>
    </div>
  )
}

export default CreatePost
