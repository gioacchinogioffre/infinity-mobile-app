import React from 'react'
import { View, Text, Box, Heading, VStack, Input, Button, Pressable} from 'native-base'
import { MaterialIcons, FontAwesome} from '@expo/vector-icons';



export default function RegisterScreen ({navigation}) {
    return (
        <Box flex={1} justifyContent='center' >
            <Heading>SIGN UP</Heading>
            <VStack space={6} pt='4'>
                {/* USERNAME */}
                <Input InputLeftElement={<FontAwesome name="user" size={20} color="red" />} variant='underlined' placeholder='Username' w='50%'></Input>
                {/* EMAIL */}
                <Input InputLeftElement={<MaterialIcons name="email" size={20} color="red" />} variant='underlined' placeholder='user@gmail.com' w='50%'></Input>
                {/* PASSWORD */}
                <Input type='password' InputLeftElement={<FontAwesome name="bullseye" size={20} color="red" />} variant='underlined' placeholder='********' w='50%'></Input>
            </VStack>
            <Button onPress={() => navigation.navigate('Bottom')} _pressed={{bg: '#000000'}} my={3} w= '40%' rounded={10} bg='#ff000f'>
                SIGN UP
            </Button>
            <Pressable mt={4} onPress={() => navigation.navigate('Login')}>
                <Text>LOGIN</Text>
            </Pressable>
        </Box>
    )
}