/** @jsxImportSource @emotion/react */
import { stepRootStyle } from '../style.js'
import { stepDetailsSectionStyle, stepNumberStyle } from './style.js'

function Step1 (props) {
  return (
    <div css={stepRootStyle}>
      <div css={stepDetailsSectionStyle}>
        <div css={stepNumberStyle}>Step 1</div>
        <div>Enter your email address to continue</div>
        <div>
          Log in to your account. If you don’t have one, you will be prompted to
          create one.
        </div>
      </div>
    </div>
  )
}

export default Step1
