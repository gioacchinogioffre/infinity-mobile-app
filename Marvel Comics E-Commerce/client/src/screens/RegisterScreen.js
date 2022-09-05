import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, Box, Heading, VStack, Input, Button, Pressable} from 'native-base'
import { MaterialIcons, FontAwesome} from '@expo/vector-icons';
import {postUser} from '../redux/actions'


export default function RegisterScreen ({navigation}) {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        userName: '',
        email: '',
        password: ''
       })

    const signUp = () => {
        // dispatch(postUser(input))
        navigation.navigate('Bottom')
    }   

    const handleOnChange = event => {
        event.preventDefault()

      
        setInput({
            ...input,
            [event.target.name]:event.target.value
        })
        // setError(validateForm({
        //     ...input,
        //     [e.target.name]:e.target.value
        // }))
    }


    return (
        <Box flex={1} justifyContent='center' >
            <Heading>SIGN UP</Heading>
            <VStack space={6} pt='4'>
                {/* USERNAME */}
                <Input onChange={e => handleOnChange(e)} InputLeftElement={<FontAwesome name="user" size={20} color="red" />} name='userName' value={input.userName} variant='underlined' placeholder='Username' w='50%'></Input>
                {/* EMAIL */}
                <Input InputLeftElement={<MaterialIcons name="email" size={20} color="red" />}  name='email' value={input.email} variant='underlined' placeholder='user@gmail.com' w='50%'></Input>
                {/* PASSWORD */}
                <Input type='password' name='password' value={input.password} InputLeftElement={<FontAwesome name="bullseye" size={20} color="red" />} variant='underlined' placeholder='********' w='50%'></Input>
            </VStack>
            <Button onPress={() => signUp()} _pressed={{bg: '#000000'}} my={3} w= '40%' rounded={10} bg='#ff000f'>
                SIGN UP
            </Button>
            <Pressable mt={4} onPress={() => navigation.navigate('Login')}>
                <Text>LOGIN</Text>
            </Pressable>
        </Box>
    )
}