/** @jsxImportSource @emotion/react */
import {
  buttonContainer,
  createPostRoot,
  emojiSelectorButton,
  headingStyle,
  inputContainerStyle,
  inputStyle
} from './style.js'
import EmojiSelector from '../../commonComponents/EmojiSelector/index.js'
import { useState } from 'react'
import commentsSection from '../../../assets/commentsSection.svg'

function PostCard (props) {
  const { postData } = props
  console.log('postData', postData)
  const { body, reactions: { likes } = {} } = postData
  const [selectedEmoji, setSelectedEmoji] = useState('💬')

  return (
    <div css={createPostRoot}>
      <div css={headingStyle}>Create post</div>
      <div css={inputContainerStyle}>
        <div css={inputStyle}>{body}</div>
        <div css={emojiSelectorButton}>
          <EmojiSelector
            selectedEmoji={selectedEmoji}
            setSelectedEmoji={setSelectedEmoji}
            allowSelector={false}
          />
        </div>
      </div>
      <div css={buttonContainer}>
        <img src={commentsSection} alt='' />
        <span>{likes} comments</span>
      </div>
    </div>
  )
}

export default PostCard
