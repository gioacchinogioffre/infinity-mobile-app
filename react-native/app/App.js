import React from 'react'
import {  NativeBaseProvider } from 'native-base'
import LoginScreen from './src/Screens/LoginScreen.js'
import HomeScreen from './src/Screens/HomeScreen'


export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen/>
    </NativeBaseProvider>
  );
}

