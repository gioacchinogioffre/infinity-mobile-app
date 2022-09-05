import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ComicDetail from '../screens/ComicDetail'
import ShippingScreen from '../screens/ShippingScreen'
import PaymentScreen from '../screens/PaymentScreen'
import PlaceOrderScreen from '../screens/PlaceOrderScreen'
import CartScreen from '../screens/CartScreen'
import OrderScreen from '../screens/OrderScreen'

const Stack = createNativeStackNavigator()

export default function StackNav () {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerBackTitleVisible: false
          }}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Single' component={ComicDetail}/>
            <Stack.Screen name='Shipping' component={ShippingScreen}/>
            <Stack.Screen name='Cart' component={CartScreen}/>
            <Stack.Screen name='Checkout' component={PaymentScreen}/>
            <Stack.Screen name='PlaceOrder' component={PlaceOrderScreen}/>
            <Stack.Screen name='Order' component={OrderScreen}/>
          </Stack.Navigator>
    )
}