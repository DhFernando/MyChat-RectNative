import React , { useEffect , useState } from 'react'; 

import Login from '../screens/AuthScreen/login'
import Registraion from '../screens/AuthScreen/registration'

import { useSelector } from "react-redux"
 
import { createStackNavigator } from '@react-navigation/stack' 
import Header from '../screens/SharedScreens/Header';

 const AuthStack = createStackNavigator()
 const LoginStack = createStackNavigator()



 const AuthStackNavigator  =()=> {

  return ( 
      <AuthStack.Navigator mode={'modal'} screenOptions={{ headerShown:false }}>
         <AuthStack.Screen name={'Loginstack'} >
              {()=>(
                  <LoginStack.Navigator screenOptions={{ headerShown:false }}>
                      <LoginStack.Screen  name="Login" component={Login} />
                  </LoginStack.Navigator>
              )}
          </AuthStack.Screen>
          <AuthStack.Screen name={'Registraion'} component={Registraion} />
      </AuthStack.Navigator> 
  );
}

export default AuthStackNavigator
