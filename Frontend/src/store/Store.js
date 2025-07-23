import {configureStore} from "@reduxjs/toolkit"
import prodReducer from "../Features/prodRoute"
import authReducer from "../Features/auth"

const store = configureStore({

reducer:{
    prod:prodReducer,
    auth:authReducer
    
}

})
export default store