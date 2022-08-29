import React from 'react'
import { Box, NativeBaseProvider, Text } from 'native-base'
import LoginScreen from './src/Screens/LoginScreen.js'


export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen/>
    </NativeBaseProvider>
  );
}

