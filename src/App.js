/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom'
import { appRoot } from './appStyle'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <div css={appRoot}>
      <Outlet />
      <ToastContainer />
    </div>
  )
}

export default App
