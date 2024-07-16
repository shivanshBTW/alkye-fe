/** @jsxImportSource @emotion/react */
import Button from '../../components/commonComponents/Button'
import TextField from '../../components/commonComponents/TextField'
import {
  centerSectionContainer,
  inputsContainer,
  loginRoot,
  loginSectionContainer,
  mainHeading,
  secondaryHeading
} from './style'

function Login () {
  return (
    <div css={loginRoot}>
      <div css={centerSectionContainer}>
        <div></div>
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
                type='text'
                label='Password'
                placeholder='Enter your password'
                fullWidth
              />
            </div>
            <div>
              <Button label='Login now' fullWidth />
            </div>
            <div>Not registered yet? Register →</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
