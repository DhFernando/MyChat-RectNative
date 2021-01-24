import React , { useState , useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'native-base'

import { useDispatch , useSelector } from 'react-redux'
import { acceptReqest } from '../../redux/index'
const RequestDeatails = ( { route , navigation } ) => {

    const { request } = route.params;
    const dispatch = useDispatch()
    const userReducer = useSelector(state => state.user)


    const [accepter , setAccepter] = useState({
        username : "",
        email:"",
        uid:""
    })

    const [requester , setRequester] = useState({
        username : "",
        email:"",
        uid:""
    })

    useEffect(()=>{

        // set accepter
        setAccepter({
            username:userReducer.authuser.username,
            email: userReducer.authuser.email,
            uid: userReducer.authuser.uid
        })

        //
        setRequester({
            username:request.username,
            email: request.email,
            uid: request.uid
        })


    }, [])

   
    
    const acceptReq = () =>{
        dispatch( acceptReqest(accepter , requester) ) 
    }

    return (
        <View style={ styles.container } >
            <MaterialIcons name='face' size={100}  style={styles.icon} />
            
            <Text style={styles.username} > { request.username } </Text>
            <View style={ styles.deatails__container }>
                <Text style={{ ...styles.deatails__text  }}>E-mail : { request.email }</Text>
                <Text style={ styles.deatails__text }>User id : { request.uid }</Text>
            </View>
            <View style={ styles.actionbtns } >
                <Button block style={ styles.accept } onPress={()=>acceptReq()} >
                    <MaterialIcons name='face' size={28}  style={{
                        alignSelf:"center",
                        marginRight:"10%",
                        color:"white",
                    }} />
                    <Text style={ styles.actionbtn__text }>Accept</Text>
                </Button>
                <Button danger block style={ styles.reject } >
                    <MaterialIcons name='face' size={28}  style={{
                        alignSelf:"center",
                        marginRight:"10%",
                        color:"white",
                    }} />
                    <Text style={ styles.actionbtn__text }>Reject</Text>
                </Button>
            </View>
        </View>
    )
}

export default RequestDeatails

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    icon:{
        alignSelf:"center",
        padding:40,
        color:"#424242",
    },
    username:{
        fontSize:22,
        fontWeight:"bold",
        letterSpacing:2,
        alignSelf:"center",
        color: "#42a5f5",
        borderColor:"white",
        borderWidth:1,
        borderBottomColor:"#e0e0e0",
        paddingBottom:8,
        paddingLeft:50,
        paddingRight:50,
        marginBottom:20
    },
    actionbtns:{
        flexDirection:"row",
        alignSelf:"center"
    },
    accept:{
        width:"45%",
        marginRight:"1%"
    },
    reject:{
        width:"45%",
        marginLeft:"1%"
        
    },
    actionbtn__text:{
        color:"white",
        letterSpacing:1,
        fontWeight:"bold" 
    },
    deatails__container:{
        marginRight:"4%",
        marginLeft:"4%",
        marginBottom:"19%",
        backgroundColor:"#eeeeee",
        paddingLeft:30,
        paddingRight:20
    },  
    deatails__text:{
        color:"#616161",
        paddingTop:"5%",
        paddingBottom:"5%",
        fontSize:14.5
    }
})
