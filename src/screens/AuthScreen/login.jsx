import React , { useState , useEffect } from 'react'
import {  useDispatch } from "react-redux";
import { loginUser } from '../../redux/index'

import { View, Text , StyleSheet } from 'react-native'
import { Container, Input, Item, Button, H1 } from 'native-base'; 

import {fb} from '../../../firebase'


const login = ( { navigation } ) => {

    const dispatch = useDispatch()
    const login = () => { 
        dispatch(loginUser(logindata.email , logindata.password)) 
    }
    const initLoginDeatails = {
        email:'',
        password:''
    } 

    const [logindata , setLogindata] = useState(initLoginDeatails)
    
    return (
        <Container style={styles._container} > 
          
        <View style={styles.elements}>
            <View style={styles.topic_elements}>
                <H1 style={styles.topic_elements__H1}> Hey ! Please Log to My Chat </H1>
            </View>
            <View style={styles.inputs}> 
                <Item style={{ borderRadius:7, marginBottom:10 }} regular>
                    <Input placeholder='email' onChangeText={(val)=> setLogindata({ ...logindata , email:val } ) } />
                </Item>
                <Item style={{ borderRadius:7, marginBottom:10 }} regular>
                    <Input placeholder='password' onChangeText={(val)=>setLogindata({ ...logindata , password:val })} />
                </Item>
            </View>
            <View style={styles.reg__btn__container}>
                <Button primary style={{...styles.reg__btn , marginRight:10} } onPress={()=>login()} >
                    <Text style={styles.reg__btn__text} >Login</Text>
                </Button>
                <Button transparent  primary style={{...styles.reg__btn , marginRight:10 , backgroundColor:null} } onPress={()=>navigation.push("Registraion")} >
                    <Text style={{...styles.reg__btn__text, color:"#0d47a1",paddingLeft:0}} >create an account ?</Text>
                </Button>
            </View>
        </View>
         
    </Container> 
    )
}

export default login


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