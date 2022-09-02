import React from 'react'
import { Box, Text, Center, ScrollView, VStack, FormControl, Input} from 'native-base'
import Buttone from '../Components/Buttone'
import { useNavigation } from '@react-navigation/native'

const inputs = [
    {
        label:'CITY',
        type: 'text'
    },
    {
        label:'COUNTRY',
        type: 'text'
    },
    {
        label:'ADDRESS',
        type: 'text'
    },
    {
        label:'POSTAL CODE',
        type: 'text'
    },
]

export default function ShippingScreen () {

    const navigation= useNavigation() 

    return (
        <Box flex={1} safeArea py={2} bg='#ff000f'>
            {/* HEADER */ }
            <Center pb={15} py={2} bg='#ff000f'>
                <Text bold fontSize={18} color='white' >DELIVERY INFORMATION</Text>
            </Center>
            {/* INPUTS */}
            <Box h='92%' bg='white' px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack mt={5} space={5}>
                        {inputs.map((i, index) => (
                        <FormControl key={index}>
                            <FormControl.Label>{i.label}</FormControl.Label>
                            <Input bg='#e06666' color='white' _focus={{bg:'#e06666', borderColor:'black'}} fontSize={15} py={3}></Input>
                        </FormControl>
                        ))}
                     <Buttone onPress={() => navigation.navigate('Checkout')} color='white' bg='black' mt={5}>CONTINUE</Buttone>
                    </VStack>
                </ScrollView>
            </Box>

        </Box>
    )
}