import React from 'react'; 

import Home from '../screens/MainScreens/Home'
 
import { createStackNavigator } from '@react-navigation/stack' 
import Header from '../screens/SharedScreens/Header';
import Chat from '../screens/MainScreens/Chat';

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
            headerTitle: props => <Header title="Chat Screen" />
          }}
          name={'Chat'} component={Chat} />

      </MainStack.Navigator> 
  );
}

export default MainStackNavigator
