import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import App from './App'
import PrivateRoute from './utils/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <PrivateRoute parentComponent={App} />,
        children: [
          {
            path: '',
            element: <Home />
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
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

export default router
