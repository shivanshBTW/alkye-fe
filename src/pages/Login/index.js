/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/commonComponents/Button'
import TextField from '../../components/commonComponents/TextField'
import {
  centerSectionContainer,
  inputsContainer,
  loginRoot,
  loginSectionContainer,
  logoContainer,
  mainHeading,
  registerHereLink,
  secondaryHeading,
  signupSectionContainer
} from './style'
import loginPageLogo from '../../assets/login/loginPageLogo.svg'
import { toast } from 'material-react-toastify'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/login'
import { handleFetchUserData } from '../../service/login'
import { delay } from '../../utils/commonUtils'
import { routes } from '../../routes'
import BorderRadiusGradient from 'border-gradient-radius'
import { theme } from '../../config/themes/dark'

function Login (props) {
  const { isLoggedIn, loginUser } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('Please enter email and password')
    } else {
      setIsLoggingIn(true)
      const data = await handleFetchUserData(email)
      // to replicate a longer login delay
      await delay(2000)
      loginUser(data)
      setIsLoggingIn(false)
      toast.success('Login successful')
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate(routes.home)
    }
  }, [isLoggedIn, navigate])

  return (
    <div css={loginRoot}>
      <div css={centerSectionContainer}>
        <div css={logoContainer}>
          <img src={loginPageLogo} alt='logo' />
        </div>
        {/* created this npm package just for this 
        purpose as the solution wasn't very easily available
        over the internet 
          Also, left the manual solution on sign-up page code
        */}
        <BorderRadiusGradient
          gradientValue={
            'linear-gradient(129.59deg, #969696 0%, #343434 98.18%)'
          }
          borderWidth={'2px'}
          borderRadius={'8px'}
          containerBackgroundColor={theme.paper}
          css={loginSectionContainer}
        >
          <div css={secondaryHeading}>Welcome Back</div>
          <div css={mainHeading}>Log into your account</div>
          <div css={inputsContainer}>
            <div>
              <TextField
                type='text'
                name='email'
                label='Email or Username'
                placeholder='Enter your email or username'
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter your password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <Button fullWidth onClick={handleLogin} disabled={isLoggingIn}>
                Login now
              </Button>
            </div>
            <div css={signupSectionContainer}>
              Not registered yet?{' '}
              <Link to={routes.signUp} css={registerHereLink}>
                Register →
              </Link>
            </div>
          </div>
        </BorderRadiusGradient>
        {/* <div css={loginSectionContainer}>
          <div css={secondaryHeading}>Welcome Back</div>
          <div css={mainHeading}>Log into your account</div>
          <div css={inputsContainer}>
            <div>
              <TextField
                type='text'
                name='email'
                label='Email or Username'
                placeholder='Enter your email or username'
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter your password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <Button fullWidth onClick={handleLogin} disabled={isLoggingIn}>
                Login now
              </Button>
            </div>
            <div css={signupSectionContainer}>
              Not registered yet?{' '}
              <Link to={routes.signUp} css={registerHereLink}>
                Register →
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

const mapStateToProps = ({ login: { isLoggedIn, currentUserData } = {} }) => {
  return {
    isLoggedIn,
    currentUserData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: data => dispatch(loginUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
