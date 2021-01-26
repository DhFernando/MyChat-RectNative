
const initialState = {
    messeges:[],
    chats:[]
}

const messageReducer = (state = initialState , action) => {
    if( action.type === "FETCH_MESSEGES" ){
 
        return{
            ...state,
            messeges : action.payload 
        }
    }else if( action.type === "FETCH_CHATS" ){

        return{
            ...state,
            chats :  action.payload
        }
    } else{
       return state  
    }
    
}

export default messageReducer