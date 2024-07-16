/** @jsxImportSource @emotion/react */
import { inputStyle, labelStyle, textFieldRoot } from './style.js'

function TextField (props) {
  const { style, fullWidth, label, ...rest } = props
  return (
    <div css={textFieldRoot}>
      {label ? <div css={labelStyle}>{label}</div> : null}
      <input type='text' css={[inputStyle(fullWidth), style]} {...rest} />
    </div>
  )
}

export default TextField
