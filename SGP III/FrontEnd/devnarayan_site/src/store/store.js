import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../feature/User/userSlice";
import  signupReducer  from "../feature/User/signupSlice";
const store = configureStore({
    reducer:{
        user:userReducer,
        signup:signupReducer
    }
})

export default store;