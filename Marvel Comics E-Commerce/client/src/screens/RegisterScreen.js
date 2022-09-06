import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Text, Box, Heading, VStack, Button, Pressable, Input} from 'native-base'
import { MaterialIcons, FontAwesome} from '@expo/vector-icons';
import { postUser } from '../redux/actions'


export default function RegisterScreen ({navigation}) {

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
        <Box flex={1} justifyContent='center' >
            <Heading>SIGN UP</Heading>
            <VStack space={6} pt='4'>
                {/* USERNAME */}
                <Input onChangeText={(value) => handleOnChange({name: 'username', value: value})} InputLeftElement={<FontAwesome name="user" size={20} color="red" />} variant='underlined' placeholder='Username' w='50%'></Input>
                {/* EMAIL */}
                <Input InputLeftElement={<MaterialIcons name="email" size={20} color="red" />}  onChangeText={(value) => handleOnChange({name: 'email', value: value})} variant='underlined' placeholder='user@gmail.com' w='50%'></Input>
                {/* PASSWORD */}
                <Input type='password' onChangeText={(value) => handleOnChange({name: 'password', value: value})} InputLeftElement={<FontAwesome name="bullseye" size={20} color="red" />} variant='underlined' placeholder='********' w='50%'></Input>
            </VStack>
            <Button onPress={signUp} _pressed={{bg: '#000000'}} my={3} w= '40%' rounded={10} bg='#ff000f'>
                SIGN UP
            </Button>
            <Pressable mt={4} onPress={() => navigation.navigate('Login')}>
                <Text>LOGIN</Text>
            </Pressable>
        </Box>
    )
}