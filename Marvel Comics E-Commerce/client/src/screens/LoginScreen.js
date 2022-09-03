import React, { useState, useEffect } from 'react'
import { View, Text, Box, Heading, VStack, Input, Button, Pressable} from 'native-base'
import { MaterialIcons, FontAwesome} from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google'
import * as WebBroser from 'expo-web-browser'

WebBroser.maybeCompleteAuthSession() // nos permite completar la autenticacion desde el navegador y nos devuelve los resultados acá, es un modal || IMPORTANTE, SINO NO FUNCIONA

export default function LoginScreen ({navigation}) {

    const [accessToken, setAccesToken] = useState(null)
    const [user, setUser] = useState(null)
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId:'881020023781-8rpkt9rtnt30pjrpajv4nil9d90l902b.apps.googleusercontent.com',
        // androidClientId: '',
        iosClientId: '881020023781-7t0mpabkvmtrig8r207urvhr9vgq8rel.apps.googleusercontent.com',
    })

    useEffect(() => {
        if (response?.type === 'success') {
            setAccesToken(response.authentication.accessToken)
            accessToken && getUserInfo()
        }
    }, [response, accessToken])

   async function getUserInfo () {
        let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${accessToken}`}
        });
        const userInfo = await response.json()
        setUser(userInfo)
   }

   const [input, setInput] = useState({
    name: '',
    email: '',
   })


    return (
        <Box flex={1} justifyContent='center' >
            <Heading>LOGIN</Heading>
            <VStack space={6} pt='4'>
                <Input InputLeftElement={<MaterialIcons name="email" size={20} color="red" />} variant='underlined' placeholder='user@gmail.com' w='50%'></Input>
                <Input type='password' InputLeftElement={<FontAwesome name="bullseye" size={20} color="red" />} variant='underlined' placeholder='********' w='50%'></Input>
            </VStack>
            <Button 
            // onPress={() => navigation.navigate('Bottom')}
            onPress={() => promptAsync({showInRecents: true})}
             _pressed={{bg: '#000000'}} my={3} w= '40%' rounded={10} bg='#ff000f'>
                LOGIN
            </Button>
            <Pressable onPress={() => navigation.navigate('Register')} mt={4}>
                <Text>SIGN UP</Text>
            </Pressable>
        </Box>
    )
}