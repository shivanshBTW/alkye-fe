import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { routes } from '../routes'

const PrivateRoute = ({ parentComponent: ParentComponent }) => {
  const isLoggedIn = useSelector(({ login: { isLoggedIn } = {} }) => isLoggedIn)

  let auth = { token: isLoggedIn }

  const outlet = ParentComponent ? (
    <ParentComponent>
      <Outlet />
    </ParentComponent>
  ) : (
    <Outlet />
  )

  return auth.token ? outlet : <Navigate to={routes.login} />
}

export default PrivateRoute
