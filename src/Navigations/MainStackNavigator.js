import React from 'react'; 

import Home from '../screens/MainScreens/Home'
 
import { createStackNavigator } from '@react-navigation/stack' 
import Header from '../screens/SharedScreens/Header';
import HeaderSub from '../screens/SharedScreens/HeaderSub';
import Chat from '../screens/MainScreens/Chat';
import RequestDeatails from '../screens/MainScreens/RequestDeatails';

 const MainStack = createStackNavigator() 

 const MainStackNavigator  =()=> {

  return ( 
      <MainStack.Navigator mode={'modal'} screenOptions={{ headerShown:!false }}>
          <MainStack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#3f51b5',
            },
            headerTitle: props => <Header title="Whats app" />
          }}
          name={'Home'} component={Home} />

        <MainStack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#3f51b5',
            },
            headerTitle: props => <HeaderSub title="Chat Screen" />
          }}
          name={'Chat'} component={Chat} />

        <MainStack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#3f51b5' 
            },
            headerTintColor:"#e3f2fd",
            headerTitleStyle:{
              letterSpacing:2
            },
            headerTitle: props => <HeaderSub title="Friend Request" />
          }}
          name={'RequestDeatails'} component={RequestDeatails} />

      </MainStack.Navigator> 
  );
}

export default MainStackNavigator
