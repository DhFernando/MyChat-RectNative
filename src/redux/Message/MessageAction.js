import {fb} from '../../../firebase'

export const sendMessege = (from , chatId ,messege) =>{
    return dispatch =>{
       
        fb.firestore().collection("chat").doc(chatId).collection('messages')
        .add({
            messege: messege,
            from : from,
            reply: false,
            time : new Date()
        }).then(()=>{
            fb.firestore().collection("chat").doc(chatId)
            .update({
                lastupdate: new Date() 
            })
        }).catch(function(error) {
            alert(error);
        });

        dispatch({ 
            type: "SEND_MESSEGE",
            payload: null
        }) 
    }
    
}

export const fetchMesseges = (chatId) =>{
    return dispatch =>{
 
        fb.firestore().collection("chat").doc(chatId).collection("messages").orderBy("time")         
        .onSnapshot(function(querySnapshot) {
            var messeges = [];
            querySnapshot.forEach(function(doc) {
                messeges.push({
                    id:doc.id,
                    data: doc.data()
                });
            }); 

           dispatch({ 
                type: "FETCH_MESSEGES",
                payload: messeges
            })

        });
    }
}

export const fetchActiveChats = (userid) =>{
    return dispatch =>{
 
        fb.firestore().collection("chat")  
        .orderBy("lastupdate")      
        .onSnapshot(function(querySnapshot) {
            const chats = []; 
            querySnapshot.forEach(function(doc) {
               if(doc.data().owners.owner01.uid === userid || doc.data().owners.owner02.uid === userid){
                    chats.push({
                        chatId:doc.id,
                        data: doc.data()
                    }); 
               }
            }); 
            dispatch({ 
                type: "FETCH_CHATS",
                payload: chats
            })
            
        });
    }
}









