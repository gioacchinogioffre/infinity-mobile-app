import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Center, Text } from 'native-base'
import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import StackNav from './StackNav'
import ProfileScreen from '../Screens/ProfileScreen'
import CartScreen from '../Screens/CartScreen'

const Tab = createBottomTabNavigator()
const CustomTab = ({children, onPress}) => (
    <Pressable onPress={onPress} h={100} w={100} rounded='full' bg='#ff000f' top={-20} shadow={2}>
        {children}
    </Pressable>
)

export default function BottomNav () {
    return (
        <Tab.Navigator backBehavior='main' initialRouteName='Main' screenOptions={{tabBarShowLabel:false, tabBartStyle:{...styles.tab}, headerShown:false, tabBarHideOnKeyboard: true}}>
            <Tab.Screen name='Main' component={StackNav} options={{tabBarIcon: ({focused}) => (
            <Center> 
                {focused 
                ? <Entypo name='home' size={24} color='#ff000f'/>
            : <AntDesign name='home' size={24} color='black'/>}
            </Center>)}}
            />

            <Tab.Screen name='Cart' component={CartScreen} options={{tabBarIcon: ({focused}) => (
            <Center bg='#ff000f' top={-20} h={60} w={60} rounded='full'> 
                {focused 
                ? <FontAwesome5 name='shopping-basket' size={24} color='white'/>
            : <MaterialCommunityIcons name='shopping-outline' size={24} color='white'/>}
            </Center>)}}
            />

            <Tab.Screen name='Profile' component={ProfileScreen} options={{tabBarIcon: ({focused}) => (
            <Center> 
                {focused 
                ? <FontAwesome name='user' size={24} color='#ff000f'/>
            : <AntDesign name='user' size={24} color='black'/>}
            </Center>)}}
            />

        </Tab.Navigator>
    )
}

const styles= StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: 'white',
        height: 60
    }
})