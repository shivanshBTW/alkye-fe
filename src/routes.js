import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import App from './App'
import PrivateRoute from './utils/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute parentComponent={App} />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/login',
        element: <About />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '*',
        element: <div>404 - Page not found</div>
      }
    ]
  }
])

export default router
