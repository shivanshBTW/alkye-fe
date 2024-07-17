/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react'
import CreatePost from '../../components/Home/CreatePost/index.js'
import {
  greetingText,
  homeRoot,
  postsSectionStyle,
  subtitleText
} from './style.js'
import { fetchPosts } from './fetchData.js'
import PostCard from '../../components/Home/PostCard/index.js'

function Home () {
  const [postList, setPostList] = useState([])

  const handleFetchData = useCallback(async () => {
    let response = await fetchPosts()
    setPostList(response?.posts)
  }, [])

  useEffect(() => {
    handleFetchData()
  }, [handleFetchData])
  return (
    <div css={homeRoot}>
      <div css={greetingText}>Hello Jane</div>
      <div css={subtitleText}>
        How are you doing today? Would you like to share something with the
        community 🤗
      </div>
      <div css={postsSectionStyle}>
        <CreatePost />
        {postList.map(postData => (
          <PostCard postData={postData} key={postData.uuidv4} />
        ))}
      </div>
    </div>
  )
}

export default Home
