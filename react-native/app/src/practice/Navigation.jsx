import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

// screens 
import HomeScreen from './Screens/HomeScreen'
import SettingsScreen from './Screens/SettingsScreen'
import StackScreen from './Screens/StackScreen'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs () {
    return (
        <Tab.Navigator
            initialRouteName='Home' // screen inicial
            screenOptions={{
                tabBarActiveTintColor: 'purple' // color de screen activa
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={MyStack}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" size={30} color={color}/>
                    ),
                    tabBarBadge: 1, // para notificaciones,
                    headerShown: false // para ver si se muestra el header o no
                }} 
                />
            <Tab.Screen 
            name='Settings' 
            component={SettingsScreen}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="settings" size={30} color={color} />
                ),
            }} />
        </Tab.Navigator>
    )
}

function MyStack () {
    return (
        <HomeStack.Navigator initialRouteName='HomeScreen'>
            <HomeStack.Screen 
            name='HomeScreen'
            component={HomeScreen} />

            <HomeStack.Screen 
            name='Stack'
            component={StackScreen}
            options ={{
                headerBackTitleVisible:false // para mno mostraar el titulo de la pantalla anterior en el header
            }} />

        </HomeStack.Navigator>
    )
}

export default function Navigation () {
    return (
        <NavigationContainer>
            <MyTabs></MyTabs>
        </NavigationContainer>
    )
}