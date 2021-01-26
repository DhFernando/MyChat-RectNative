import React , { useState , useEffect} from 'react';
import {useSelector ,useDispatch} from 'react-redux' 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginUserBySystem} from '../redux/index'
 
import { createStackNavigator } from '@react-navigation/stack' 
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

const RootStack = createStackNavigator() 

const RootStackNavigator  =()=> {

    const userReducer = useSelector( state => state.user )
    const dispatch = useDispatch()
    const [login, setLogin] = useState(true)
    const [uid , setUid] = useState(null)
    
    useEffect(()=>{
        if(userReducer.login === true){
            setLogin(true)
        }else{
            setLogin(false)
        }
    },[userReducer.login])

    return ( 
        <RootStack.Navigator screenOptions={{ headerShown:false }}>
            {
                login === false ?  
                    (<RootStack.Screen name={'RootStack'} component={AuthStackNavigator} />) :
                    (<RootStack.Screen name={'MainStack'} component={MainStackNavigator} />)
            }
        </RootStack.Navigator>
    );
}

export default RootStackNavigator
