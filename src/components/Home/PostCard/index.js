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
import { useMemo, useRef, useState } from 'react'
import commentsSection from '../../../assets/images/commentsSection.svg'
import moment from 'moment'

function PostCard (props) {
  const { postData } = props
  const inputRef = useRef(null)

  const {
    cheesy_paragraph: body,
    random_number: likes,
    avatar,
    first_name: firstName,
    last_name: lastName,
    random_date: time,
    emoji
  } = postData
  const [selectedEmoji, setSelectedEmoji] = useState(emoji ? emoji : '💬')

  const timeString = useMemo(() => moment(time).fromNow(), [time])

  const setSize = () => {
    if (inputRef?.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
    }
  }

  useMemo(() => {
    setSize()
    setTimeout(setSize, 100)
  }, [body, inputRef])

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
          <div css={timeContainer}>{timeString}</div>
        </div>
      </div>
      <div css={inputContainerStyle}>
        <textarea
          ref={inputRef}
          name='message'
          type='text'
          value={body}
          css={inputStyle}
        />
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
