import React from 'react'
import { Box, Center, Image, VStack} from 'native-base'
import Buttone from '../components/Buttone'
import logo from '../../assets/favicon.png'

export default function NotVerifyScreen () {
    return (
        <Box flex={1} safeAreaTop>
            <Center w='full' h={250} bg='#ff000f'>
                <Image source={logo} alt='logo' size='lg'/>
            </Center>
            <VStack space={6} mt={10} alignItems='center'>
                <Buttone bg='black' color='white' >REGISTER</Buttone>
                <Buttone bg='#ff000f' color='white' >LOGIN</Buttone>
            </VStack>
        </Box>
    )
}