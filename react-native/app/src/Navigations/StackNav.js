import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import SingleProductScreen from '../Screens/SingleProductScreen'
import ShippingScreen from '../Screens/ShippingScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import PlaceOrderScreen from '../Screens/PlaceOrderScreen'
import CartScreen from '../Screens/CartScreen'
import OrderScreen from '../Screens/OrderScreen'



const Stack = createNativeStackNavigator()

export default function StackNav () {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerBackTitleVisible: false
          }}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Single' component={SingleProductScreen}/>
            <Stack.Screen name='Shipping' component={ShippingScreen}/>
            <Stack.Screen name='Cart' component={CartScreen}/>
            <Stack.Screen name='Checkout' component={PaymentScreen}/>
            <Stack.Screen name='PlaceOrder' component={PlaceOrderScreen}/>
            <Stack.Screen name='Order' component={OrderScreen}/>
          </Stack.Navigator>
    )
}