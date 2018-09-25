import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./usersReducer"

export default combineReducers({
  tweets,
  user,
})