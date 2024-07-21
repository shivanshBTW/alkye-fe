/** @jsxImportSource @emotion/react */
import { connect } from 'react-redux'
import {
  stepRootStyle,
  inputSectionContainer,
  stepDetailsSectionStyle,
  stepNumberStyle,
  subTextStyle,
  titleInstructionStyle
} from '../style.js'
import TextField from '../../../commonComponents/TextField'
import Button from '../../../commonComponents/Button'
import { setFormEmail } from '../../../../redux/actions/login.js'
import { useState } from 'react'

function Step1 (props) {
  const {
    email: formEmail = '',
    setFormEmail,
    handleLogin,
    isLoggingIn
  } = props

  const [email, setEmail] = useState(formEmail)

  const handleSubmit = () => {
    setFormEmail(email)
    // handleLogin()
  }
  return (
    <div css={stepRootStyle}>
      <div css={stepDetailsSectionStyle}>
        <div css={stepNumberStyle}>Step 1</div>
        <div css={titleInstructionStyle}>
          Enter your email address to continue
        </div>
        <div css={subTextStyle}>
          Log in to your account. If you don’t have one, you will be prompted to
          create one.
        </div>
      </div>
      <div css={inputSectionContainer}>
        <TextField
          fullWidth
          type='email'
          autoComplete='username'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Button onClick={handleSubmit} isLoading={isLoggingIn} align='flex-end'>
          Continue
        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step1)
