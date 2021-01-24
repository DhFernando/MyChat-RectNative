import React ,{ useEffect , useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { fetchFriendRequest } from '../../redux/index'

import { View, Text , TouchableOpacity , StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { CardItem, Right, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';

const FriendList = ({ navigation }) => {

    const userReducer = useSelector(state=>state.user)
    const dispatch = useDispatch()

    const [ requests , setRequests ]  = useState([])

    useEffect(()=>{
        setRequests(userReducer.friendrequests)
    } , [ userReducer.friendrequests ])

    useEffect(()=>{
        dispatch(fetchFriendRequest( userReducer.authuser.email ))
    },[])

    const navigate = ( to , request ) =>{
        navigation.navigate(to , { request })
    }

    return (
        <View>
            <FlatList
                    data={requests}
                    keyExtractor={(item)=>item.uid.toString()}
                    renderItem={(request)=>{
                        return( 
                        <View  >
                            <TouchableOpacity onPress={()=>navigate("RequestDeatails", request.item ) }>
                                
                                    <CardItem  style={ styles.chat_item }>
                                        <MaterialIcons name='stars' size={28} style={styles.styles__icon} />
                                        <View style={ styles.item }>
                                            <Text  note numberOfLines={3}> {  request.item.email } </Text>
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
    }
})
