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
  buttonSectionContainer
} from '../style.js'
import TextField from '../../../commonComponents/TextField'
import Button from '../../../commonComponents/Button'
import { setFormEmail } from '../../../../redux/actions/login.js'
import { useState } from 'react'
import { buttonStyle } from './style.js'

function Step2 (props) {
  const { email: formEmail = '', setFormEmail, isLoggingIn } = props

  const [email, setEmail] = useState(formEmail)

  const handleSubmit = () => {
    setFormEmail(email)
    // handleLogin()
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
          <TextField
            fullWidth
            type='password'
            placeholder='Choose a password'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div css={buttonSectionContainer}>
            <div>
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
  login: { isLoggingIn, formData: { email } = {} } = {}
}) => {
  return {
    isLoggingIn,
    email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFormEmail: email => dispatch(setFormEmail(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2)
