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

function Step1 (props) {
  const { email = '', setEmail, handleLogin, isLoggingIn } = props
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
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Button onClick={handleLogin} isLoading={isLoggingIn} align='flex-end'>
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

export default connect(mapStateToProps)(Step1)
