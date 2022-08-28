import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StackScreen from './StackScreen.jsx'



export default function HomeScreen () {

    const navigation = useNavigation()


    return (
         <View>
            <Text >Home</Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate("Stack")} // se debe poner lo que dice la propiedad name de la screen deseada
            style={{backgroundColor: 'purple', padding: 10, marginTop: '10%', width: '40%'}}>
                <Text style={{color: 'white'}}>Go to Stack Screen</Text>
            </TouchableOpacity>
         </View>
    )
}