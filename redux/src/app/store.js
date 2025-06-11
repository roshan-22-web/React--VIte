import {configureStore} from "@reduxjs/toolkit"
import useReducer from "../slices/userSlice"


const store = configureStore({
  reducer:{
    usersInfo : useReducer
  }
})

export default store