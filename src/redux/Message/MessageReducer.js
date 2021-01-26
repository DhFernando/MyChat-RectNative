
const initialState = {
    messeges:[]
}

const messageReducer = (state = initialState , action) => {
    if( action.type === "FETCH_MESSEGES" ){
 
        return{
            ...state,
            messeges : action.payload 
        }
    }else{
       return state  
    }
    
}

export default messageReducer