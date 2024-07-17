import { combineReducers } from 'redux'
import loginReducer from './login'
import postsReducer from './posts'

const rootReducer = combineReducers({
  posts: postsReducer,
  login: loginReducer
})

export default rootReducer
