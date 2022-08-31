import React from 'react'
import {  NativeBaseProvider } from 'native-base'
import LoginScreen from './src/Screens/LoginScreen.js'
import ProfileScreen from './src/Screens/ProfileScreen'


export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileScreen/>
    </NativeBaseProvider>
  );
}

