import React , { useEffect ,useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { sendMessege ,fetchMesseges } from '../../redux/index'

import { View, Text, StyleSheet } from 'react-native'
import { Input, Item, CardItem, Right } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

const Chat = ({route}) => {

    const { friend__deatails } = route.params;
    const userReducer =  useSelector(state => state.user)
    const messegeReducer = useSelector(state => state.messege)
    const dispatch = useDispatch()

    const [ messege , setMessege  ] = useState('')
    const [ messeges , setMesseges] = useState([])

    useEffect(()=>{
        dispatch(fetchMesseges(friend__deatails.chatId))
    },[])

    useEffect(()=>{ 
        setMesseges(messegeReducer.messeges)
    },[messegeReducer.messeges])

    const send__message = () =>{
        if( messege.length != 0 ){
            dispatch(sendMessege( userReducer.authuser ,  friend__deatails.chatId , messege))
            setMessege('')
        }else{
            alert("empty message")
        }
    }  
    
    const time = (t) =>{
        const date = new Date(t*1000)
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
         return formattedTime
    } 

    return (
        <View style={ styles.container }>  

            <View style={styles.messege__container} > 

                <FlatList
                    data={messeges}
                    keyExtractor={(item)=>item.id.toString()} // have to change
                    renderItem={(_message)=>{
                        return( 
                            <View  >
                                <TouchableOpacity onPress={()=>{ return 0 } }>
                                    
                                        <View> 
                                            
                                           { friend__deatails.email === _message.item.data.from.email ? 
                                           
                                           ( <View style={styles.friend__chat__container} >
                                               <MaterialIcons name='face' size={25} style={styles.firendface__icon} />
                                                <View style={styles.friend__chat__container__details}   >
                                                    <Text style={ styles.friend__message__text }  note numberOfLines={3}> {_message.item.data.messege} </Text>
                                                    <Text style={ styles.friend__message__text__time }  note > 
                                                        {   time(_message.item.data.time.seconds )  }
                                                    </Text>
                                                </View>
                                           </View>) : 
                                            
                                            ( 
                                                <View style={styles.mychat__container}>
                                                    <Text style={styles.mychat__messege__text}  note numberOfLines={3}> {_message.item.data.messege} </Text>
                                                    <Text style={ styles.friend__message__text__time }  note > 
                                                        {   time(_message.item.data.time.seconds )  }
                                                    </Text>
                                                </View>
                                             )}
                                            
                                        </View>
                                    

                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />

            </View>

            <View style={ styles.type_container__input } >
                <Item rounded>
                    <Input placeholder='type...' value={messege} onChangeText={ (val)=>setMessege(val) }/>
                </Item> 
            </View>
            <View style={ styles.type_container__send__btn } > 
                <TouchableOpacity onPress={()=>send__message() }>
                    <MaterialIcons name='send' size={30} style={styles.send__icon} />
                </TouchableOpacity> 
            </View>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    type_container__input:{
        // flexDirection:"row",
        position:"absolute",
        bottom:10,
        marginLeft:"5%",
        width:"70%"
    },
    type_container__send__btn:{
        position:"absolute",
        bottom:-38,
        right:-20,
        marginLeft:"5%",
        
        borderRadius:50,
         
    },
    send__icon:{
        color:"#0d47a1",
        transform: [{rotate:"-45deg"}], 
        padding:"9.5%",
        maxWidth:48,
        borderRadius:40,
        borderWidth:1
    },



    mychat__container:{
        padding:10,
        backgroundColor:"#01579b",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"flex-end", 
        marginBottom:5,
        borderRadius:5,
        marginLeft:"30%"
    },

    friend__chat__container:{
        padding:10,
        flexDirection:"row",
        alignContent:"center",
        backgroundColor:"#004d40",
        maxWidth:"70%",
        marginBottom:5,
        borderRadius:5
    },
    messege__container:{
        paddingTop:"5%",
        paddingLeft:"2%",
        paddingRight:"2%",
    },

    firendface__icon:{
        color:"white",
        paddingLeft:"3%",
        paddingRight:"3%"
    },

    friend__message__text:{
        color:"white",
        fontFamily:"nunito-bold",
        marginTop:3
    },

    mychat__messege__text:{
        color:"white",
        fontFamily:"nunito-bold",
        alignSelf:"flex-end",
        paddingBottom:5,
        marginRight:"7%"
    },
    friend__message__text__time:{
        color:"white",
        fontFamily:"nunito-bold",
        fontSize:10,
        marginLeft:"70%"
    },
    friend__chat__container__details:{
        flexDirection:"column"
    }

})