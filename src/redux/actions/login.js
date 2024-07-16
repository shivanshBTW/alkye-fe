export const loginUser = ({ email, password }) => {
  return {
    type: 'LOGIN_USER',
    payload: {
      email,
      password
    }
  }
}
