import {fb} from '../../../firebase'

export const sendMessege = (from , chatId ,messege) =>{
    return dispatch =>{
       
        fb.firestore().collection("chat").doc(chatId).collection('messages')
        .add({
            messege: messege,
            from : from,
            reply: false,
            time : new Date()
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