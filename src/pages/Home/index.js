/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react'
import CreatePost from '../../components/Home/CreatePost/index.js'
import {
  carouselContainer,
  carouselImageContainerStyle,
  carouselImageStyle,
  carouselTitleStyle,
  contentContainer,
  greetingText,
  headerLogoContainer,
  headerSectionStyle,
  homeRoot,
  logoutIconStyle,
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
import { theme } from '../../config/themes/light.js'
import headerLogo from '../../assets/images/common/testLogoWhite.svg'
import { underlineStyle } from '../../components/commonComponents/commonStyles.js'

function Home (props) {
  const { postList, currentUserData, setPostList, logoutUser } = props
  const { userData: { customer_name: customerName, token } = {} } =
    currentUserData
  console.log('customerName', customerName)
  const [slideList, setSlideList] = useState([])

  const handleFetchData = useCallback(async () => {
    try {
      let { data } = await fetchPosts({ token })
      setPostList(data)
    } catch (e) {
      toast.error('Failed to fetch posts')
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

  return (
    <div css={homeRoot}>
      <div css={contentContainer}>
        <div css={headerSectionStyle}>
          <div css={headerLogoContainer}>
            <img src={headerLogo} alt='' />
          </div>
          <div css={greetingText}>
            <span>
              Hello <span css={underlineStyle}>{customerName}</span>
            </span>
            <img
              src={logoutIcon}
              alt='logout'
              css={logoutIconStyle}
              title='Logout'
              onClick={handleLogout}
            />
          </div>
          <div css={subtitleText}>Hope you having a good day!</div>
        </div>

        <div css={carouselContainer}>
          <div css={carouselTitleStyle}>Photography</div>
          <Carousel
            slides={slideList}
            slideWidth={theme.spacing(50)}
            slideSpacing={theme.spacing(8)}
            options={{
              align: 'start',
              dragFree: true,
              loop: false
            }}
          />
        </div>

        <div css={carouselContainer}>
          <div css={carouselTitleStyle}>Learning</div>
          <Carousel
            slides={slideList}
            slideWidth='400px'
            slideSpacing='60px'
            options={{
              align: 'start',
              dragFree: true,
              loop: false
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
