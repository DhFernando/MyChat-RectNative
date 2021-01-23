import React , { useState } from 'react'
import {StyleSheet, View,TouchableOpacity   } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import {  Card, CardItem, Text, Icon, Right, Button } from 'native-base';

import { FlatList } from 'react-native-gesture-handler'
 

const ChatList = ({ navigation }) => {

    const [ reviews , setReviews ] = useState([
        {key:1, title:"IGI 1" , body:"i am going in" , rating: 5},
        {key:2, title:"GTA vice city" , body:"first person game" , rating: 5},
        {key:3, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
     
    ])

    
    const navigate = (_to , params) =>{
       navigation.push(_to , params)
    }
    return (
            <View style={ styles.chat_container }>

                <FlatList
                    data={reviews}
                    keyExtractor={(item)=>item.key.toString()}
                    renderItem={(review)=>{
                        return( 
                            <View  >
                                <TouchableOpacity onPress={()=>navigate("Chat", review.item ) }>
                                    
                                        <CardItem  style={ styles.chat_item }>
                                            <MaterialIcons name='stars' size={28} style={styles.styles__icon} />
                                            <View style={ styles.item }>
                                                <Text  note numberOfLines={3}> {  review.item.title } - { review.item.key } </Text>
                                            </View>
                                            <Right>
                                                <Icon name="arrow-forward" />
                                            </Right>
                                        </CardItem>
                                    
                                </TouchableOpacity>
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

