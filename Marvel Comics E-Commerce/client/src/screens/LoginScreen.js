import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Text, Center, Heading, VStack, Input, Button, Pressable, Image, HStack} from 'native-base'
import { MaterialIcons, FontAwesome} from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google'
import * as WebBroser from 'expo-web-browser'
import { getUser } from '../redux/actions'
import bcrypt from 'bcryptjs'
import google from '../../assets/images/google.png'
import banner from '../../assets/images/avengers1.png'



WebBroser.maybeCompleteAuthSession() // nos permite completar la autenticacion desde el navegador y nos devuelve los resultados acá, es un modal || IMPORTANTE, SINO NO FUNCIONA

export default function LoginScreen ({navigation}) {

    const dispatch = useDispatch()
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
    email: '',
    password: '',
   })

   const encryptPassword = async (password) => {
     const salt = await bcrypt.genSalt(10)
     return await bcrypt.hash(password, salt)
   }

   const login = () => {
        const password = encryptPassword(input.password)
        // dispatch(getUser(input.email, password))
        navigation.navigate('Bottom')
   }

   const handleOnChange = ({name, value}) => {

    setInput({
        ...input,
       [name]: value
    })
    // setError(validateForm({
    //     ...input,
    //     [e.target.name]:e.target.value
    // }))
}

    return (
        <Center flex={1} bg='white'>
            <Heading bold size="lg" my={4} fontWeight="600" color="black">Welcome Avenger!</Heading>
            <VStack pt='4'>
                <Input  onChangeText={(value) => handleOnChange({name: 'email', value: value})}  InputLeftElement={<MaterialIcons name="email" size={20} color="red" />} variant='underlined' placeholder='user@gmail.com' w='50%'></Input>
                <Input my={3}onChangeText={(value) => handleOnChange({name: 'password', value: value})}  type='text' InputLeftElement={<FontAwesome name="bullseye" size={20} color="red" />} variant='underlined' placeholder='********' w='50%'></Input>
                <Text mb='5' color='#ff000f' alignSelf="flex-end" >Forget Password?</Text>
            </VStack>
            <Button 
            onPress={login}
             _pressed={{bg: '#ff000f'}} w= '50%' rounded={5} bg='#ff000f' _text={{color:'white', fontWeight: 'bold'}}>
                LOGIN
            </Button>
            <Pressable 
            // onPress={() => navigation.navigate('Bottom')}
            onPress={() => promptAsync({showInRecents: true})} borderColor='coolGray.300' borderWidth={2} _pressed={{bg: '#000000'}} my={3} w='50%' rounded={5} bg='#ffffff' h={10}>
                <HStack mt={2} justifyContent='center'>
                    <Image source={google} w={22} h={22} alt='google'/>
                    <Text ml={2}>Sign in with Google</Text>
                </HStack>
            </Pressable>
            <Image w={280} h={170} resizeMode='contain' source={banner} alt='banner' mt="4"/>
            <HStack mt="6" justifyContent="center" alignItems='center'>
            <Text fontSize="sm" mx={2} >
              I'm a new Avenger  
            </Text>
             <Button _pressed={{bg: '#ff000f'}} bg='black' onPress={() => navigation.navigate('Register')}><Text bold color='white'>Sign up!</Text></Button>
          </HStack>
        </Center>
    )
}