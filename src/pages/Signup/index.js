/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/commonComponents/Button'
import TextField from '../../components/commonComponents/TextField'
import {
  centerSectionContainer,
  inputsContainer,
  logoContainer,
  mainHeading,
  registerHereLink,
  secondaryHeading,
  signUpSectionContainer,
  signUpRoot,
  goToLoginContainer
} from './style'
// import loginPageLogo from '../../assets/images/login/test.svg'
import { toast } from 'material-react-toastify'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/login'
import { handleFetchUserData } from '../../service/login'
import { delay } from '../../utils/commonUtils'
import { routes } from '../../routes'

function SignUp (props) {
  const { isLoggedIn, loginUser } = props
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!email || !password || !username) {
      toast.error('Please enter email, username and password')
    } else {
      setIsLoggingIn(true)
      const data = await handleFetchUserData()
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
    <div css={signUpRoot}>
      <div css={centerSectionContainer}>
        <div css={logoContainer}>
          {/* <img src={loginPageLogo} alt='logo' /> */}
        </div>
        <div css={signUpSectionContainer}>
          <div css={secondaryHeading}>Welcome Back</div>
          <div css={mainHeading}>Log into your account</div>
          <div css={inputsContainer}>
            <div>
              <TextField
                type='email'
                name='email'
                label='Email'
                placeholder='Enter your email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <TextField
                type='text'
                name='username'
                label='Username'
                placeholder='Choose a preferred username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Choose a strong password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <Button fullWidth onClick={handleLogin} disabled={isLoggingIn}>
                Continue
              </Button>
            </div>
            <div css={goToLoginContainer}>
              Already have an account?{' '}
              <Link to={routes.login} css={registerHereLink}>
                Login →
              </Link>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
