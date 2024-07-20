/** @jsxImportSource @emotion/react */
import {
  inputComponentContainer,
  inputStyle,
  labelStyle,
  textFieldRoot,
  viewPasswordToggleStyle
} from './style.js'

import passwordEye from '../../../assets/images/login/passwordEye.svg'
import passwordEyeClosed from '../../../assets/images/login/passwordEyeClosed.svg'
import { useState } from 'react'

function TextField (props) {
  const { style, fullWidth, label, type, ...rest } = props

  const isTypePassword = type === 'password'
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div css={textFieldRoot}>
      {label ? <div css={labelStyle}>{label}</div> : null}
      <div css={inputComponentContainer}>
        <input
          type={isTypePassword ? (isPasswordVisible ? 'text' : type) : type}
          css={[inputStyle(fullWidth), style]}
          {...rest}
        />
        {isTypePassword ? (
          isPasswordVisible ? (
            <img
              src={passwordEyeClosed}
              alt='password-eye-closed'
              css={viewPasswordToggleStyle}
              onClick={() => setIsPasswordVisible(false)}
            />
          ) : (
            <img
              src={passwordEye}
              alt='password-eye'
              css={viewPasswordToggleStyle}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          )
        ) : null}
      </div>
    </div>
  )
}

export default TextField
