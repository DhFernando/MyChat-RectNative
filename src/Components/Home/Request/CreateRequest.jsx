import React , { useState } from 'react'
import { useDispatch , useSelector} from "react-redux"
import {createFriendReqest} from '../../../redux/index'

import { View, Text ,StyleSheet } from 'react-native'
import { Button,  Item, Input, H3 } from 'native-base'


const CreateRequest = () => {

    const [ email , setEmail ] = useState("")
    const dispatch = useDispatch()
    const userReducer = useSelector(state => state.user)

    const request = () =>{
        if(email.length != 0){
            if( email != userReducer.authuser.email ){
                dispatch(createFriendReqest(userReducer.authuser,  email))
                setEmail("")
            }else{
                alert("you cannot send req to you...!")
            }
        }else{ alert("pleace insert mail") }
    }

    return (
        <View style={{flex:1}}>
            <View style={styles.requests__header} >
                <H3 style={styles.requests__header__text}>Create Friend Request { JSON.stringify(userReducer.test) } </H3>
            </View>
            <View style={styles.requests__container}>
                <Item regular>
                    <Input placeholder='Friend e-mail' onChangeText={(val)=>setEmail(val)} />
                </Item>
                <Button block style={styles.req_bnt} bordered info onPress={()=>request()} >
                    <Text  style={styles.req_bnt__text}>Create Request</Text>
                </Button>
            </View>
        </View>
    )
}

export default CreateRequest

const styles = StyleSheet.create({
    requests__container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center", 
        padding:30 
    },
    requests__header:{
        alignSelf:"center",
        marginTop:"20%",
        
    },
    requests__header__text:{
        color:"#01579b",
        letterSpacing:2,
        fontWeight:"bold",
        borderWidth:1,
        borderColor:"white",
        borderBottomColor:"#e0e0e0",
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20
    },
    req_bnt:{
        marginTop:20
    },
    req_bnt__text:{
        fontSize:15,
        fontWeight:"bold",
        letterSpacing:5,
        color:"#01579b"
    }
})
