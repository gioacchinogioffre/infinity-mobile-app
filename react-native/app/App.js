import React from 'react'
import {  NativeBaseProvider } from 'native-base'
import LoginScreen from './src/Screens/LoginScreen.js'
import CartScreen from './src/Screens/CartScreen.js'
import HomeScreen from './src/Screens/HomeScreen.js'
import NotVerifyScreen from './src/Screens/NotVerifyScreen.js'
import OrderScreen from './src/Screens/OrderScreen.js'
import PaymentScreen from './src/Screens/PaymentScreen'
import ProfileScreen from './src/Screens/ProfileScreen.js'
import RegisterScreen from './src/Screens/RegisterScreen.js'
import ShippingScreen from './src/Screens/ShippingScreen.js'
import SingleProductScreen from './src/Screens/SingleProductScreen.js'
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen'


export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrderScreen/>
    </NativeBaseProvider>
  );
}

