/** @jsxImportSource @emotion/react */
import { connect } from 'react-redux'
import {
  stepRootStyle,
  inputSectionContainer,
  stepDetailsSectionStyle,
  stepNumberStyle,
  subTextStyle,
  titleInstructionStyle,
  disclaimerStyle,
  buttonSectionContainer,
  inputLabelStyle
} from '../style.js'
import TextField from '../../../commonComponents/TextField'
import Button from '../../../commonComponents/Button'
import { loginUser, setFormPassword } from '../../../../redux/actions/login.js'
import { useState } from 'react'
import { buttonStyle, passwordInstructionsStyle } from './style.js'
import { handleLogin } from '../../../../service/login.js'
import { toast } from 'material-react-toastify'

function Step2 (props) {
  const { email: formEmail, loginUser, isLoggingIn } = props

  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    if (formEmail && password.length >= 6) {
      try {
        let res = await handleLogin(formEmail, password)
        loginUser({
          userData: res,
          email: formEmail,
          password
        })
        toast.success('Login successful')
      } catch (error) {
        const msg = error?.response?.data?.non_field_errors[0] || error.message
        toast.error(`${msg ? msg : 'Login failed'}`)
      }
    }
  }
  return (
    <div>
      <div css={stepRootStyle}>
        <div css={stepDetailsSectionStyle}>
          <div css={stepNumberStyle}>Step 2</div>
          <div css={titleInstructionStyle}>Create an account to continue</div>
          <div css={subTextStyle}>
            You’ll be able to log in to Dingoo with this email address and
            password.
          </div>
        </div>
        <div css={inputSectionContainer}>
          <div css={inputLabelStyle}>
            Enter a password to create your account with 
          </div>
          <TextField
            fullWidth
            type='password'
            autoComplete='password'
            placeholder='Choose a password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div css={buttonSectionContainer}>
            <div css={passwordInstructionsStyle}>
              Use a minimum of 6 characters (case sensitive) with at least one
              number or special character.
            </div>
            <Button
              onClick={handleSubmit}
              isLoading={isLoggingIn}
              align='flex-end'
              style={buttonStyle}
            >
              Agree & Continue
            </Button>
          </div>
        </div>
      </div>
      <div css={disclaimerStyle}>
        Dingoo will use your data to personalise and improve your Dingoo
        experience and to send you information about Dingoo. You can change your
        communication preferences anytime. We may use your data as described in
        our Privacy Policy, including sharing it with The Test of Companies. By
        clicking "Agree & Continue", you agree to our Subscriber Agreement and
        acknowledge that you have read our Privacy Policy and Collection
        Statement.
      </div>
    </div>
  )
}

const mapStateToProps = ({
  login: { isLoggingIn, formData: { email, password } = {} } = {}
}) => {
  return {
    isLoggingIn,
    email,
    password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: data => dispatch(loginUser(data)),
    setFormPassword: email => dispatch(setFormPassword(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2)
