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
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../../redux/actions/posts.js'

function CreatePost (props) {
  const currentUserData = useSelector(state => state?.login?.currentUserData)
  const dispatch = useDispatch()

  const [selectedEmoji, setSelectedEmoji] = useState('💬')
  const [postText, setPostText] = useState('')

  const handlePost = () => {
    const data = {
      ...currentUserData,
      cheesy_paragraph: postText,
      random_number: 0,
      emoji: selectedEmoji,
      random_date: new Date().toISOString()
    }
    dispatch(addPost(data))
    setPostText('')
    setSelectedEmoji('💬')
  }

  return (
    <div css={createPostRoot}>
      <div css={headingStyle}>Create post</div>
      <div css={inputContainerStyle}>
        <textarea
          name='message'
          rows='1'
          type='text'
          placeholder='How are you feeling today?'
          value={postText}
          onChange={e => setPostText(e.target.value)}
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
        <Button style={buttonStyle} onClick={handlePost}>
          Post
        </Button>
      </div>
    </div>
  )
}

export default CreatePost
