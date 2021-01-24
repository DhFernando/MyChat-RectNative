import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
    login: false,
    authuser:{ uid:null, username:null , email:null },
    friendrequests:[]
}

const testReducer = (state = initialState , action) => {
    if(action.type === "LOGIN_USER"){  
        return {
            ...state,
            login:true,
            authuser:{  ...state.authuser , uid:action.payload.id ,username:action.payload.username ,email:action.payload.email }
        }
    }else if(action.type === "LOGOUT_USER"){
        return {
            ...state,
            login:false,
            authuser:{  ...state.authuser , uid:null ,username:null ,email:null }
            
        }
    }else if( action.type ==="FETCH_FRIEND_REQUEST" , action ){
        return {
            ...state,
            friendrequests:action.payload
        }
    }else{ return state }
        
}

export default testReducer