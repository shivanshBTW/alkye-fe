/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom'
import { appRoot } from './appStyle'

import { ToastContainer } from 'material-react-toastify'
import 'material-react-toastify/dist/ReactToastify.css'
import Footer from './components/commonComponents/Footer'

function App () {
  return (
    <div css={appRoot}>
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
