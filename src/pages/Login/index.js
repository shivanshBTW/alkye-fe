/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom'
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

function Login () {
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
                label='Email or Username'
                placeholder='Enter your email or username'
                fullWidth
              />
            </div>
            <div>
              <TextField
                type='password'
                label='Password'
                placeholder='Enter your password'
                fullWidth
              />
            </div>
            <div>
              <Button label='Login now' fullWidth />
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

export default Login
