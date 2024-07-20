/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react'
import CreatePost from '../../components/Home/CreatePost/index.js'
import {
  greetingText,
  homeRoot,
  logoutIconStyle,
  postsSectionStyle,
  subtitleText
} from './style.js'
import PostCard from '../../components/Home/PostCard/index.js'
import { connect } from 'react-redux'
import { updatePostsList } from '../../redux/actions/posts.js'
import logoutIcon from '../../assets/images/logout-logo.svg'
import { logoutUser } from '../../redux/actions/login.js'
import { fetchPosts } from '../../service/home.js'
import { toast } from 'material-react-toastify'

function Home (props) {
  const { postList, currentUserData, setPostList, logoutUser } = props
  const { first_name: firstName } = currentUserData

  const handleFetchData = useCallback(async () => {
    let response = await fetchPosts()
    setPostList(response?.posts)
  }, [setPostList])

  useEffect(() => {
    handleFetchData()
  }, [handleFetchData])

  const handleLogout = () => {
    logoutUser()
    toast.success('Successfully logged out')
  }

  return (
    <div css={homeRoot}>
      <div css={greetingText}>
        <span>Hello {firstName}</span>
        <img
          src={logoutIcon}
          alt='logout'
          css={logoutIconStyle}
          title='Logout'
          onClick={handleLogout}
        />
      </div>
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
    setPostList: data => dispatch(updatePostsList(data)),
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
