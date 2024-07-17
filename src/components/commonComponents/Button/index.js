/** @jsxImportSource @emotion/react */
import { buttonContainerRoot, buttonStyle } from './style.js'

function Button (props) {
  const { style, fullWidth, children, ...rest } = props
  return (
    <div css={buttonContainerRoot}>
      <button css={[buttonStyle(fullWidth), style]} {...rest}>
        {children}
      </button>
    </div>
  )
}

export default Button
