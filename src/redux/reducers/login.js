const savedUserData = localStorage.getItem('currentUserData')

const initialState = {
  isLoggedIn: !!savedUserData,
  currentUserData: JSON.parse(savedUserData) || {}
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      localStorage.setItem('currentUserData', JSON.stringify(action.payload))
      return {
        ...state,
        isLoggedIn: true,
        currentUserData: action.payload
      }
    case 'LOGOUT_USER':
      localStorage.removeItem('currentUserData')
      return {
        ...state,
        isLoggedIn: false,
        currentUserData: {}
      }
    default:
      return state
  }
}

export default loginReducer
