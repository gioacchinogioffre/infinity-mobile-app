import React from 'react'
import { View, Text, Box, Heading, VStack, Input, Button, Pressable} from 'native-base'
import { MaterialIcons, FontAwesome} from '@expo/vector-icons';



export default function LoginScreen ({navigation}) {
    return (
        <Box flex={1} justifyContent='center' >
            <Heading>LOGIN</Heading>
            <VStack space={6} pt='4'>
                <Input InputLeftElement={<MaterialIcons name="email" size={20} color="red" />} variant='underlined' placeholder='user@gmail.com' w='50%'></Input>
                <Input type='password' InputLeftElement={<FontAwesome name="bullseye" size={20} color="red" />} variant='underlined' placeholder='********' w='50%'></Input>
            </VStack>
            <Button onPress={() => navigation.navigate('Bottom')} _pressed={{bg: '#000000'}} my={3} w= '40%' rounded={10} bg='#ff000f'>
                LOGIN
            </Button>
            <Pressable onPress={() => navigation.navigate('Register')} mt={4}>
                <Text>SIGN UP</Text>
            </Pressable>
        </Box>
    )
}