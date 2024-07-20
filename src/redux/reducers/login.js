const savedUserData = localStorage.getItem('currentUserData')

const initialState = {
  isLoggedIn: !!savedUserData,
  currentUserData: JSON.parse(savedUserData) || {},
  formData: {}
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      localStorage.setItem('currentUserData', JSON.stringify(action.payload))
      return {
        ...state,
        isLoggedIn: true,
        currentUserData: action.payload,
        formData: {}
      }
    case 'LOGOUT_USER':
      localStorage.removeItem('currentUserData')
      return {
        ...state,
        isLoggedIn: false,
        currentUserData: {},
        formData: {}
      }
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      }
    case 'SET_FORM_EMAIL':
      return {
        ...state,
        formData: {
          ...state.formData,
          email: action.payload
        }
      }
    default:
      return state
  }
}

export default loginReducer
