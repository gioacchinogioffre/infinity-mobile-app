import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, ScrollView, VStack, FormControl, Input } from 'native-base'
import Buttone from './Buttone'
import { updateUser } from '../redux/actions'

 
const inputs = [
    {
        label: 'USERNAME',
        type: 'text',
        name: 'username'
    },
    {
        label: 'EMAIL',
        type: 'text',
        name: 'email'
    },
    {
        label: 'NEW PASSWORD',
        type: 'password',
        name: 'password'
    },
    {
        label: 'CONFIRM PASSWORD',
        type: 'password',
        name: 'confirmPassword'
    },
]

export default function Profile () {

    const dispatch = useDispatch()

    const [input, setInput] = useState({})

    const userId = '6316a76ef01e6a867ee76414' // cambiar por la del usuario cuando hagamos el get user

    const update = () => {
        dispatch(updateUser(userId, input))
        setInput({})
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
        <Box h='90%' px={5} mb={10}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={8} mt={5} pb={10}>
                    {inputs.map((i,index) => (
                    <FormControl key={index}>
                        <FormControl.Label _text={{fontWeight: 'bold'}}>{i.label}</FormControl.Label>
                        <Input onChangeText={(value) => handleOnChange({name: i.name, value: value})}  type={i.type} bg='#e06666' fontSize={17} color='white' _focus={{bg:'#e06666', borderColor:'black', borderWidth:1.5 }} />
                    </FormControl>
                    ))}
                </VStack>
                <Buttone onPress={update} color='white' bg='black' mb={10}>UPDATE PROFILE</Buttone>
            </ScrollView>
        </Box>
    )
}
