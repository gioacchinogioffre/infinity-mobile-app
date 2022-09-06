import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Text, Center, HStack, VStack, Button, Pressable, Input, Image, Heading} from 'native-base'
import { MaterialIcons, FontAwesome} from '@expo/vector-icons';
import { postUser } from '../redux/actions'
import google from '../../assets/images/google.png'
import banner from '../../assets/images/avengers1.png'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBroser from 'expo-web-browser'


export default function RegisterScreen ({navigation}) {

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

    const dispatch = useDispatch()

    const [input, setInput] = useState({})

    const signUp = () => {
        dispatch(postUser(input))
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
        <Center flex={1} justifyContent='center' >
            <Heading>Sign up to continue</Heading>
            <VStack space={6} pt='4'>
                {/* USERNAME */}
                <Input onChangeText={(value) => handleOnChange({name: 'username', value: value})} InputLeftElement={<FontAwesome name="user" size={20} color="red" />} variant='underlined' placeholder='Username' w='50%'></Input>
                {/* EMAIL */}
                <Input InputLeftElement={<MaterialIcons name="email" size={20} color="red" />}  onChangeText={(value) => handleOnChange({name: 'email', value: value})} variant='underlined' placeholder='user@gmail.com' w='50%'></Input>
                {/* PASSWORD */}
                <Input type='password' onChangeText={(value) => handleOnChange({name: 'password', value: value})} InputLeftElement={<FontAwesome name="bullseye" size={20} color="red" />} variant='underlined' placeholder='********' w='50%'></Input>
            </VStack>
            <Button onPress={signUp} _pressed={{bg: '#000000'}} my={3} w= '50%' rounded={5} bg='#ff000f'>
                SIGN UP
            </Button>
            <Pressable 
            // onPress={() => navigation.navigate('Bottom')}
            onPress={() => promptAsync({showInRecents: true})} borderColor='coolGray.300' borderWidth={2} _pressed={{bg: '#000000'}} w='50%' rounded={5} bg='#ffffff' h={10}>
                <HStack mt={2} justifyContent='center'>
                    <Image source={google} w={22} h={22} alt='google'/>
                    <Text ml={2}>Sign up with Google</Text>
                </HStack>
            </Pressable>
            <Image w={280} h={170} resizeMode='contain' source={banner} alt='banner' mt="8"/>
            <Button _pressed={{bg:'#ff000f'}} mt={4} onPress={() => navigation.navigate('Login')} w='50%' bg='black'>
                <Text color='white'>LOGIN</Text>
            </Button>
        </Center>
    )
}