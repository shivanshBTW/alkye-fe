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
import { connect } from 'react-redux'
import { updatePostsList } from '../../redux/actions/posts.js'

function Home (props) {
  const { postList, currentUserData, setPostList } = props
  const { first_name: firstName } = currentUserData

  const handleFetchData = useCallback(async () => {
    let response = await fetchPosts()
    setPostList(response?.posts)
  }, [setPostList])

  useEffect(() => {
    handleFetchData()
  }, [handleFetchData])

  return (
    <div css={homeRoot}>
      <div css={greetingText}>Hello {firstName}</div>
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

const mapStateToProps = ({
  login: { currentUserData },
  posts: { postList } = {}
}) => {
  return {
    currentUserData,
    postList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPostList: data => dispatch(updatePostsList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
