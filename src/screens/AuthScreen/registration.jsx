import React , {useEffect , useState} from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { Container, Input, Item, Button, H1 } from 'native-base';
import { useSelector , useDispatch } from 'react-redux'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {loginUserBySystem} from '../../redux/index'

import {fb} from '../../../firebase'

const registor = ( {navigation} ) => {

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repassword, setRepassword ] = useState('')

    const dispatch = useDispatch();

    const createuser =  () =>{
        if(username.length != 0 && email.length != 0 && password.length != 0 && repassword === password ){
             fb.auth().createUserWithEmailAndPassword(email,password)
            .then( async (cred)=>{
                try{
                    const res = await fb.firestore().collection('users').doc(email).set({
                        username: username,
                        email: email,
                        uid:cred.user.uid
                    }) 
                    await AsyncStorage.setItem('authuser_uid', cred.user.uid)

                    dispatch( loginUserBySystem( cred.user.uid ) )

                }catch(e){
                    alert(e)
                }
                 
            }).catch(function(error) {
                alert(error);
            });
        }
    }

    return ( 
        <Container style={styles._container} > 
          
            <View style={styles.elements}>
                <View style={styles.topic_elements}>
                    <H1><Text style={styles.topic_elements__H1} >Welcome to My Chat</Text> </H1>
                </View>
                <View style={styles.inputs}>
                    <Item style={{ borderRadius:7, marginBottom:10 }} regular>
                        <Input placeholder='Username' onChangeText={(val)=>setUsername(val)} />
                    </Item>
                    <Item style={{ borderRadius:7, marginBottom:10 }} regular>
                        <Input placeholder='email'  onChangeText={(val)=>setEmail(val)} />
                    </Item>
                    <Item style={{ borderRadius:7, marginBottom:10 }} regular>
                        <Input type="password" placeholder='password'  onChangeText={(val)=>setPassword(val)} />
                    </Item>
                    <Item style={{ borderRadius:7, marginBottom:10 }} regular>
                        <Input type="password" placeholder='re-password'  onChangeText={(val)=>setRepassword(val)}  />
                    </Item>
                </View>
                <View style={styles.reg__btn__container}>
                    <Button primary style={{...styles.reg__btn , marginRight:10} } onPress={()=>createuser()} >
                        <Text style={styles.reg__btn__text} >Register</Text>
                    </Button>
                    <Button danger style={styles.reg__btn} onPress={()=> navigation.pop() }>
                        <Text style={styles.reg__btn__text} >Back</Text>
                    </Button>
                </View>
            </View>
             
        </Container> 
    )
}

export default registor


const styles = StyleSheet.create({
    _container:{
       flex:1,
       flexDirection:"column",
       alignItems: 'center',
        justifyContent: 'center',

    },
    elements:{
        width:"100%",
        padding:30
    },
    topic_elements:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"10%",
        
    },
    topic_elements__H1:{
        fontFamily:"nunito-bold",
        color:"#0d47a1"
    },
    inputs: {
        flexDirection:"column",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    test__styles:{
        margin:10
    },
    reg__btn:{ 
        width:"40%",
        marginTop:20
    },
    reg__btn__text:{
        paddingLeft:"30%",
        color:"white",
        fontFamily:"nunito-bold",
        fontWeight:"bold",
        fontSize:15
    },  
    reg__btn__container:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
    }

  });