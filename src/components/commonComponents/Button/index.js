/** @jsxImportSource @emotion/react */
import { buttonContainerRoot, buttonStyle } from './style.js'

function Button (props) {
  const { style, fullWidth, label, ...rest } = props
  return (
    <div css={buttonContainerRoot}>
      <button css={[buttonStyle(fullWidth), style]} {...rest}>
        {label}
      </button>
    </div>
  )
}

export default Button
