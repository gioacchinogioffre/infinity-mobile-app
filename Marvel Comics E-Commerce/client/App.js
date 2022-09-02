import React from 'react'
import {  NativeBaseProvider, StatusBar } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import OrderScreen from './src/screens/LoginScreen'
import BottomNav from './src/navigations/BottomNav'
import SingleProductScreen from './src/screens/SingleProductScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true}/>
        <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Register' component={RegisterScreen}/>
          <Stack.Screen name='Order' component={OrderScreen}/>
          <Stack.Screen name='Single' component={SingleProductScreen}/>
          <Stack.Screen name='Bottom' component={BottomNav}/>

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

