/** @jsxImportSource @emotion/react */
import { buttonContainerRoot, buttonStyle } from './style.js'

function Button (props) {
  const { style, fullWidth, children, disabled, ...rest } = props
  return (
    <div css={buttonContainerRoot}>
      <button
        css={[buttonStyle({ fullWidth, disabled }), style]}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
