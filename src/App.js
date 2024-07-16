/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom'
import { appRoot } from './appStyle'

function App () {
  return (
    <div css={appRoot}>
      <Outlet />
    </div>
  )
}

export default App
