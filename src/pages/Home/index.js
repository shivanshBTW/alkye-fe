/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react'
import CreatePost from '../../components/Home/CreatePost/index.js'
import {
  carouselContainer,
  carouselImageContainerStyle,
  carouselImageStyle,
  contentContainer,
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
import Carousel from '../../components/commonComponents/carousel/index.js'

function Home (props) {
  const { postList, currentUserData, setPostList, logoutUser } = props
  const {
    first_name: firstName,
    userData: { customer_name: customerName, token } = {}
  } = currentUserData
  console.log('customerName', customerName)
  const [slideList, setSlideList] = useState([])

  const handleFetchData = useCallback(async () => {
    try {
      let { data } = await fetchPosts({ token })
      console.log('data', data)
      setPostList(data)
    } catch (e) {
      toast.error('Failed to fetch posts')
      console.log(e)
    }
  }, [setPostList, token])

  useEffect(() => {
    handleFetchData()
  }, [handleFetchData])

  useEffect(() => {
    console.log('postList', postList)
    setSlideList(
      postList.map(post => {
        const { image_url: imgUrl, title, description } = post
        console.log('post', post)
        return {
          content: (
            <div css={carouselImageContainerStyle}>
              <img src={imgUrl} alt='post' css={carouselImageStyle} />
            </div>
          )
        }
      })
    )
  }, [postList])

  const handleLogout = () => {
    logoutUser()
    toast.success('Successfully logged out')
  }

  // const SLIDES = [
  //   ({ content: 'Slide 1' },
  //   { content: 'Slide 2' },
  //   { content: 'Slide 3' },
  //   { content: 'Slide 4' },
  //   { content: 'Slide 5' })
  // ]

  return (
    <div css={homeRoot}>
      <div css={contentContainer}>
        <div css={greetingText}>
          <span>Hello {customerName}</span>
          <img
            src={logoutIcon}
            alt='logout'
            css={logoutIconStyle}
            title='Logout'
            onClick={handleLogout}
          />
        </div>
        <div css={subtitleText}>Hope you having a good day!</div>

        <div css={carouselContainer}>
          <Carousel
            slides={slideList}
            slideWidth='400px'
            options={{
              align: 'start',
              dragFree: true,
              loop: true
            }}
          />
        </div>

        <div css={carouselContainer}>
          <Carousel
            slides={slideList}
            slideWidth='400px'
            options={{
              align: 'start',
              dragFree: true,
              loop: true
            }}
          />
        </div>
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
    setPostList: data => dispatch(updatePostsList(data, dispatch)),
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
