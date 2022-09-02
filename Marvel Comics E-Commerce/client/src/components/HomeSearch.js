import React from 'react'
import { HStack, Input, Pressable, Box } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function HomeSearch () {
    const navigation= useNavigation() 

    return (
        <HStack space={3} bg='#ff000f' w= 'full' px={6} py={4} alignItems='center' safeAreaTop >
            <Input placeholder='Iron Man, SpiderMan, Captain America...' w='85%' bg='white' type='search' h={10} _focus={{bg:'white' }} />
            <Pressable ml={3} onPress={() => navigation.navigate('Cart')} >
                <FontAwesome5 name='shopping-basket' size={24} color='white'/>
                <Box px={1} rounded='full' bg='black' position='absolute' top={-18} left={1.5} _text={{color: 'white'}}>5</Box>
            </Pressable>
        </HStack>
    )
}