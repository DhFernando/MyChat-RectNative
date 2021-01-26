import React , { useEffect , useState } from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage'

import Login from '../screens/AuthScreen/login'
import Registraion from '../screens/AuthScreen/registration'
import Welcome from '../screens/MainScreens/Welcome'

import { useSelector ,useDispatch } from "react-redux"
import { loginUserBySystem } from '../redux/index'
 
import { createStackNavigator } from '@react-navigation/stack' 

 const AuthStack = createStackNavigator()
 const LoginStack = createStackNavigator()



 const AuthStackNavigator  =()=> {

    const dispatch = useDispatch()

    const [ uidAvailable , setUidAvailable ] = useState(true)

    useEffect(()=>{
        authcheck()
    },[])

    const authcheck = async()=>{
        const uid = await AsyncStorage.getItem('authuser_uid')
        if(uid != null){
            dispatch(loginUserBySystem(uid))
        }else{
            setUidAvailable(false)
        }
       
    }

  return ( 
      <AuthStack.Navigator mode={'modal'} screenOptions={{ headerShown:false }}>
         {uidAvailable === true ? 
            (  <AuthStack.Screen name={'Welcome'} component={Welcome} /> ) : 
            (<AuthStack.Screen name={'Loginstack'} >
                {()=>(
                    <LoginStack.Navigator screenOptions={{ headerShown:false }}>
                        <LoginStack.Screen  name="Login" component={Login} />
                    </LoginStack.Navigator>
                )}
            </AuthStack.Screen> )
         }
        <AuthStack.Screen name={'Registraion'} component={Registraion} />
         
      </AuthStack.Navigator> 
  );
}

export default AuthStackNavigator
