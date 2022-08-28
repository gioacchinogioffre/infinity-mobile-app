import React from 'react'
import Main from './src/components/Main.jsx'
import { NativeRouter } from 'react-router-native'
import Navigation from './src/components/Navigation.jsx';


export default function App() {
  return (
    <NativeRouter>
      <Navigation/>
      {/* <Main/> */}
    </NativeRouter>
  );
}

