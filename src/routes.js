import About from './pages/About'
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import PrivateRoute from './utils/PrivateRoute'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
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
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }
    ]
  }
])

export default router
