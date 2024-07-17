/** @jsxImportSource @emotion/react */
import CreatePost from '../../components/Home/CreatePost/index.js'
import { greetingText, homeRoot, subtitleText } from './style.js'

function Home () {
  return (
    <div css={homeRoot}>
      <div css={greetingText}>Hello Jane</div>
      <div css={subtitleText}>
        How are you doing today? Would you like to share something with the
        community 🤗
      </div>
      <div>
        <CreatePost />
      </div>
    </div>
  )
}

export default Home
