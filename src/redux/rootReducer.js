import { combineReducers } from 'redux' 
import userReducer from './User/UserReducer'
import messageReducer from './Message/MessageReducer'


const rootReducer = combineReducers({ 
    user:userReducer,
    messege: messageReducer
})

export default rootReducer