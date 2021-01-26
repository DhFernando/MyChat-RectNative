
const initialState = {
    login: false,
    authuser:{ uid:null, username:null , email:null },
    friendrequests:[],
    friends:[] 
}

const userReducer = (state = initialState , action) => {
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
    }else if( action.type ==="FETCH_FRIEND_REQUEST"){
     
        return {
            ...state,
            friendrequests:action.payload
        }
       
    }else if(action.type === "FETCH_FRIENDS"){  
        return{
            ...state,
            friends:action.payload
        }
    }else{ return state }
        
}

export default userReducer