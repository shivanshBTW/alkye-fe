/** @jsxImportSource @emotion/react */
import {
  avatarImageContainer,
  avatarImageStyle,
  buttonContainer,
  createPostRoot,
  emojiSelectorButton,
  headingStyle,
  inputContainerStyle,
  inputStyle,
  nameContainer,
  nameStyle,
  timeContainer
} from './style.js'
import EmojiSelector from '../../commonComponents/EmojiSelector/index.js'
import { useState } from 'react'
import commentsSection from '../../../assets/commentsSection.svg'

function PostCard (props) {
  const { postData } = props
  console.log('postData', postData)
  const {
    cheesy_paragraph: body,
    random_number: likes,
    avatar,
    first_name: firstName,
    last_name: lastName
  } = postData
  const [selectedEmoji, setSelectedEmoji] = useState('💬')

  return (
    <div css={createPostRoot}>
      <div css={headingStyle}>
        <div css={avatarImageContainer}>
          <img src={avatar} alt='' css={avatarImageStyle} />
        </div>
        <div css={nameContainer}>
          <div css={nameStyle}>
            {firstName} {lastName}
          </div>
          <div css={timeContainer}>5mins ago</div>
        </div>
      </div>
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
