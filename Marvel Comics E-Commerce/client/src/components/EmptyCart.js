import React from 'react'
import { Box, Text, Center} from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import Buttone from './Buttone'

export default function EmptyCart () {
    return (
        <Box alignItems='center'>
            <Center h='80%'>
                <Center bg='#ff000f' w={200} h={200} rounded='full'>
                    <FontAwesome name='shopping-basket' size={64} color='white'/>
                </Center>
                <Text mt={4} color='black' bold >CART IS EMPTY</Text>
            </Center>
            <Buttone width='90%' bg='#ff000f' color='white'>GET SOME COMICS!</Buttone>
        </Box>
    )
}