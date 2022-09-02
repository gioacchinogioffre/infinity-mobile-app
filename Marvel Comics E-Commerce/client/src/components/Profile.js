import React from 'react'
import { Box, ScrollView, VStack, FormControl, Input } from 'native-base'
import Buttone from './Buttone'
 
const inputs = [
    {
        label: 'USERNAME',
        type: 'text',
    },
    {
        label: 'EMAIL',
        type: 'text',
    },
    {
        label: 'NEW PASSWORD',
        type: 'password',
    },
    {
        label: 'CONFIRM PASSWORD',
        type: 'password',
    },
]

export default function Profile () {
    return (
        <Box h='90%' px={5} mb={10}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={8} mt={5} pb={10}>
                    {inputs.map((i,index) => (
                    <FormControl key={index}>
                        <FormControl.Label _text={{fontWeight: 'bold'}}>{i.label}</FormControl.Label>
                        <Input type={i.type} bg='#e06666' fontSize={17} color='white' _focus={{bg:'#e06666', borderColor:'black', borderWidth:1.5 }} />
                    </FormControl>
                    ))}
                </VStack>
                <Buttone color='white' bg='black' mb={10}>UPDATE PROFILE</Buttone>
            </ScrollView>
        </Box>
    )
}
