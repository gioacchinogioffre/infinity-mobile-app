import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Text, Center, ScrollView, VStack, FormControl, Input} from 'native-base'
import Buttone from '../components/Buttone'
import { useNavigation } from '@react-navigation/native'
import { updateUser } from '../redux/actions'


export default function ShippingScreen () {
    
    const navigation= useNavigation() 
    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)  
    const inputs = [
        {
            label:'CITY',
            type: 'text',
            name: 'city',
            value: user.city
        },
        {
            label:'COUNTRY',
            type: 'text',
            name: 'country',
            value: user.country
        },
        {
            label:'ADDRESS',
            type: 'text',
            name: 'address',
            value: user.address    
        },
        {
            label:'POSTAL CODE',
            type: 'text',
            name: 'postalCode',
            value: user.postalCode
        },
        {
            label:'TELEPHONE NUMER',
            type: 'text',
            name: 'telephone_number',
            value: user.telephone_number
        },
    ]
    
    const [input, setInput] = useState({})

    const update = () => {
        dispatch(updateUser(user.email, input))
        navigation.navigate('Checkout')
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
                            <Input defaultValue={i.value} onChangeText={(value) => handleOnChange({name: i.name, value: value})} bg='#e06666' color='white' _focus={{bg:'#e06666', borderColor:'black'}} fontSize={15} py={3}></Input>
                        </FormControl>
                        ))}
                     <Buttone onPress={update} color='white' bg='black' mt={5}>CONTINUE</Buttone>
                    </VStack>
                </ScrollView>
            </Box>

        </Box>
    )
}