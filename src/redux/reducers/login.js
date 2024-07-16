const savedUserData = localStorage.getItem('currentUserData')

const initialState = {
  isLoggedIn: !!savedUserData,
  currentUserData: JSON.parse(savedUserData) || {}
  //   users: {}
}

// let users = {
//   ['abc@gmail.com']: {
//     username: 'abc',
//     email: 'abc@gmail.com',
//     password: '123456'
//   }
// }

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      localStorage.setItem('currentUserData', JSON.stringify(action.payload))
      return {
        ...state,
        isLoggedIn: true,
        currentUserData: action.payload
      }
    default:
      return state
  }
}

export default loginReducer
