import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ parentComponent: ParentComponent }) => {
  let auth = { token: true }

  const outlet = ParentComponent ? (
    <ParentComponent>
      <Outlet />
    </ParentComponent>
  ) : (
    <Outlet />
  )

  return auth.token ? outlet : <Navigate to='/login' />
}

export default PrivateRoute
