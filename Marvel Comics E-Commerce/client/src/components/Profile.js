import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, ScrollView, VStack, FormControl, Input } from 'native-base'
import Buttone from './Buttone'
import { updateUser } from '../redux/actions'

 

export default function Profile () {
    
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)  
    
    useEffect(() => {
    },[user, inputs])
    
    const inputs = [
        {
            label: 'USERNAME',
            type: 'text',
            name: 'username',
            value: user.username,
            disabled: false
        },
        {
            label: 'EMAIL',
            type: 'text',
            name: 'email',
            value: user.email,
            disabled: true
        },
        {
            label: 'CHANGE PASSWORD',
            type: 'password',
            name: 'password',
            disabled: false
        },
        {
            label: 'CONFIRM PASSWORD',
            type: 'password',
            name: 'confirmPassword',
            disabled: false
        },
    ]
    const [input, setInput] = useState({})

    const userId = '874188f2-e2d8-459a-b000-b5a2a5e64600' // cambiar por la del usuario cuando hagamos el get user

    const update = () => {
        dispatch(updateUser(user.email, input))
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
                        <Input isDisabled={i.disabled} defaultValue={i.value} onChangeText={(value) => handleOnChange({name: i.name, value: value})}  type={i.type} bg='#ffaaa5' fontSize={17} color='white' _focus={{bg:'#ff686b', borderColor:'black', borderWidth:1.5 }} />
                    </FormControl>
                    ))}
                </VStack>
                <Buttone onPress={update} color='white' bg='black' mb={10}>UPDATE PROFILE</Buttone>
            </ScrollView>
        </Box>
    )
}
