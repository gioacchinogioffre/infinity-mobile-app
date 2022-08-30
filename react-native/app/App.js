import React from 'react'
import {  NativeBaseProvider } from 'native-base'
import LoginScreen from './src/Screens/LoginScreen.js'
import SingleProductScreen from './src/Screens/SingleProductScreen'


export default function App() {
  return (
    <NativeBaseProvider>
      <SingleProductScreen/>
    </NativeBaseProvider>
  );
}

