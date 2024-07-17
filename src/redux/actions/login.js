export const loginUser = (data = {}) => {
  return {
    type: 'LOGIN_USER',
    payload: data
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}
