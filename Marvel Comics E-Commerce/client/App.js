import React from 'react'
import {  NativeBaseProvider, StatusBar } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import OrderScreen from './src/screens/LoginScreen'
import BottomNav from './src/navigations/BottomNav'
import ComicDetail from './src/screens/ComicDetail';
import { Provider } from "react-redux";
import store from './src/redux/store' 


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar hidden={true}/>
          <Stack.Navigator initialRouteName='Login' screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
            <Stack.Screen name='Order' component={OrderScreen}/>
            <Stack.Screen name='Single' component={ComicDetail}/>
            <Stack.Screen name='Bottom' component={BottomNav}/>

          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>

    </Provider>
  );
}

