import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRoute from './utils/PrivateRoute'
import { createBrowserRouter } from 'react-router-dom'

export const routes = {
  home: '/',
  login: '/login'
}

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
    children: [
      {
        path: '',
        element: <PrivateRoute />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: '*',
            element: <div>404 - Page not found</div>
          }
        ]
      },
      {
        path: routes.login,
        element: <Login />
      }
    ]
  }
])

export default router
