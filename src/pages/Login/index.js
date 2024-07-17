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
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/login'
import { handleFetchUserData } from '../../service/login'

function Login (props) {
  const { isLoggedIn, loginUser } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('Please enter email and password')
    } else {
      const data = await handleFetchUserData(email)
      console.log('data', data)
      loginUser(data)
      toast.success('Login successful')
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn, navigate])

  return (
    <div css={loginRoot}>
      <div css={centerSectionContainer}>
        <div css={logoContainer}>
          <img src={loginPageLogo} alt='logo' />
        </div>
        <div css={loginSectionContainer}>
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
              <Button fullWidth onClick={handleLogin}>
                Login now
              </Button>
            </div>
            <div css={signupSectionContainer}>
              Not registered yet?{' '}
              <Link to='/sign-up' css={registerHereLink}>
                Register →
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
