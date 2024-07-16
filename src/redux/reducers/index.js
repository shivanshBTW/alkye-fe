import { combineReducers } from 'redux'
import loginReducer from './login.js'
import main from './main.js'

const rootReducer = combineReducers({
  main,
  login: loginReducer
})

export default rootReducer
