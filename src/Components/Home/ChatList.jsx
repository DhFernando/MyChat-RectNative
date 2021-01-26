import React , { useState , useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { fetchActiveChats } from '../../redux/index'


import {StyleSheet, View,TouchableOpacity   } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import {  Card, CardItem, Text, Icon, Right, Button } from 'native-base';

import { FlatList } from 'react-native-gesture-handler'
 

const ChatList = ({ navigation }) => {

    const dispatch = useDispatch();

    const userReducer = useSelector(state=>state.user)
    const messegeReducer = useSelector(state => state.messege )

    const [ chats , setChats ] = useState([])

    useEffect(()=>{
        dispatch(fetchActiveChats(userReducer.authuser.uid))
    }, [])

    useEffect(()=>{
        setChats(messegeReducer.chats)
    },[ messegeReducer.chats ])

    
    const navigate = ( to , chatId ) =>{

        var friend__deatails = null
        chats.forEach(el => {
            if(el.chatId === chatId){
                if(el.data.owners.owner01.uid === userReducer.authuser.uid ){
                    friend__deatails = el.data.owners.owner02
                    friend__deatails.chatId = chatId
                }else{
                    friend__deatails = el.data.owners.owner01
                    friend__deatails.chatId = chatId
                }
            }
        });

        navigation.navigate(to , { friend__deatails }) 
                
    } 
    return (
            <View style={ styles.chat_container }>

                 <Text> {JSON.stringify(messegeReducer.chats[0].chatId)} </Text>

                 <FlatList
                    data={chats}
                    keyExtractor={(item)=>item.chatId.toString()}
                    renderItem={(chat)=>{
                        return( 
                            <View  >
                                <CardItem  style={ styles.chat_item }>
                                    <MaterialIcons name='face' size={45} style={ styles.styles__icon__face } />
                                    <View style={ styles.item }>
                                        <Text  note numberOfLines={3}> {  
                                            chat.item.data.owners.owner01.uid === userReducer.authuser.uid ?
                                            chat.item.data.owners.owner02.email : chat.item.data.owners.owner01.email  
                                        } </Text>
                                    </View>
                                    <Right>
                                        <View style={ styles.options_icons } >
                                            <TouchableOpacity onPress={()=>navigate("Chat" , chat.item.chatId ) }>
                                                <MaterialIcons name='chat' size={28} style={{...styles.styles__icon , color:"blue"  }} />
                                            </TouchableOpacity>
                                        </View>
                                    </Right>
                                </CardItem>
                            </View>
                        )
                    }}
                />
            </View>
    )
}

export default ChatList

const styles = StyleSheet.create({

    styles__icon:{
        color:"#ffc107",
        marginRight:"5%"
    },
    item:{
        width:"70%"
    },
    chat_item:{
        margin:1,
        borderColor:"#bdbdbd",
        borderBottomWidth:1
    },
    chat_container:{
        marginTop:"3%"
    }
})

