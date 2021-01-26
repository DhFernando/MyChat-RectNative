import React ,{ useEffect , useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { fetchFriends } from '../../redux/index'

import { View, Text , TouchableOpacity , StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { CardItem, Right, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';

const FriendList = ({ navigation }) => {

    const userReducer = useSelector(state=>state.user)
    const dispatch = useDispatch()

    const [ friends , setFriends ]  = useState([])

    useEffect(()=>{
        setFriends(userReducer.friends)
    } , [ userReducer.friends ])

    useEffect(()=>{
        dispatch(fetchFriends( userReducer.authuser.email ))
    },[])

    const navigate = ( to , friend__deatails ) =>{
        navigation.navigate(to , { friend__deatails })
    }

    return (
        <View>
            <FlatList
                    data={friends}
                    keyExtractor={(item)=>item.uid.toString()}
                    renderItem={(friend)=>{
                        return( 
                            <View  >
                                <CardItem  style={ styles.chat_item }>
                                    <MaterialIcons name='face' size={45} style={ styles.styles__icon__face } />
                                    <View style={ styles.item }>
                                        <Text  note numberOfLines={3}> {  friend.item.email } </Text>
                                    </View>
                                    <Right>
                                        <View style={ styles.options_icons } >
                                            <TouchableOpacity onPress={()=>navigate("Chat" , friend.item) }>
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

export default FriendList

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
    },
    options_icons:{
        flexDirection:"row"
    },
    styles__icon__face:{
        marginRight:"5%",
        color:"#448aff"
    }
})
