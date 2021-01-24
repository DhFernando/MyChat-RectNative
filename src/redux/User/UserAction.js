import {fb} from '../../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const logOutUser = (  ) => {
    
    return {
        type: "LOGOUT_USER",
        payload: null
    }
}

export const loginUser = (email , password) =>{
    return dispatch => { 
        fb.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;  
            console.log( user.email)
            console.log(typeof(email))
            fb.firestore().collection("users").doc(email).get()
            .then( async (doc)=>{
                console.log( doc.data()  )
                const authuser = { email: doc.data().email , username: doc.data().username , id: user.uid  }
                try{
                    await AsyncStorage.setItem('authuser_uid', user.uid)
                    dispatch({ 
                        type: "LOGIN_USER",
                        payload: authuser
                    }) 
                }catch(e){
                    alert("something went wrong...!")
                } 
            })
            
        })
        .catch((error) => {
            alert(error.message);
        }); 
    }
}

export const loginUserBySystem = (uid) =>{

    return dispatch => { 
        fb.firestore().collection("users").where("uid","==",uid).get()
        .then(function(querySnapshot) {
            var authuser;
            querySnapshot.forEach(function(doc) {
                authuser = { email: doc.data().email , username: doc.data().username , id: uid  } 
            });
            dispatch({ 
                type: "LOGIN_USER",
                payload: authuser
            }) 
        }) 
    
        }
     
    }


export const createFriendReqest = (requester ,request_email ) =>{
    return dispatch =>{
       fb.firestore().collection("users").doc(request_email).get()
        .then((doc)=>{
            if(doc.id === request_email){
                alert(`${doc.id} - ${ request_email }`)
                fb.firestore().collection("users").doc(request_email).collection('requests')
                .doc(requester.email)
                .set({
                    email: requester.email,
                    username : requester.username,
                    uid: requester.uid,
                    accepted: false
                })
            }
        }) 

        dispatch({ 
            type: "CREATE_REQUEST",
            payload: null
        }) 
    }
    
}

export const fetchFriendRequest = (docid) =>{
    return dispatch =>{ 
        fb.firestore().collection("users").doc(docid).collection("requests")
        .where("accepted", "==", false)
        .onSnapshot(function(querySnapshot) {
            var reqs = [];
            querySnapshot.forEach(function(doc) {
                reqs.push(doc.data());
            });

             dispatch({
                type:"FETCH_FRIEND_REQUEST",
                payload:reqs
             });
        })   
    }
}

export const acceptReqest = (accepter , requester) =>{
    return dispatch => {
        alert(`${requester.email} - ${accepter.email}`)
        fb.firestore().collection("users").doc( accepter.email ).collection( "requests" ).doc(requester.email)
        .update({
            accepted: true
        }).then(()=>{
            fb.firestore().collection( "users" ).doc( accepter.email ).collection( "friends" ).doc(requester.email)
            .set({
                username: requester.username,
                uid : requester.uid,
                email : requester.email
            }).then(()=>{
                fb.firestore().collection( "users" ).doc( requester.email ).collection( "friends" ).doc(accepter.email)
                .set({
                    username: accepter.username,
                    uid : accepter.uid,
                    email : accepter.email
                }).then(()=>{
                    alert("done process")
                    dispatch({
                        type:"ACCEPT_REQUEST",
                        payload:null
                     });
                })
            })
        })
    }
}
