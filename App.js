import React , {  useState } from 'react';

import store from './src/redux/store'
import { Provider } from 'react-redux'

import * as Font from 'expo-font'

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import AppLoading from 'expo-app-loading';
 

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack' 

import RootStackNavigator from './src/Navigations/RootStackNavigation';

import Header from './src/screens/SharedScreens/Header'
 

 const App = () => {

  const StartStack =createStackNavigator();

  const [ fontLoad , setFontLoad ] = useState(false)

  const loadFont = async() => await Font.loadAsync({
      'nunito-regular': require('./src/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./src/fonts/Nunito-Bold.ttf'),
      "Roboto": require('./src/fonts/Roboto-Regular.ttf'),
      "Roboto_medium": require('./src/fonts/Roboto-Medium.ttf'),
    })

  return ( 
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={ ()=>{ Keyboard.dismiss() } } >

          { fontLoad == true ? 
            (  
                <NavigationContainer >
                  <StartStack.Navigator screenOptions={{ headerShown:false }}>
                    <StartStack.Screen name={'MainStack'} component={RootStackNavigator} />
                  </StartStack.Navigator>
                </NavigationContainer>
            ): 
            ( <AppLoading
                startAsync={ ()=>loadFont() }
                onFinish={ ()=> setFontLoad(true)  }
                onError={console.warn}
          /> ) }

        
      </TouchableWithoutFeedback>
       
    </Provider>
      
  );
}

export default App
