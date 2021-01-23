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

            fb.firestore().collection("users").doc(user.uid).get()
            .then( async (doc)=>{
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
        fb.firestore().collection("users").doc(uid).get()
        .then((doc)=>{
            
            const authuser = { email: doc.data().email , username: doc.data().username , id: uid  }
            
            dispatch({ 
                type: "LOGIN_USER",
                payload: authuser
            }) 
           
        })
     
    }
}