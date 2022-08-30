import React, { useState } from 'react'
import { Heading, Text, Box, VStack, FormControl, Select, CheckIcon, TextArea} from 'native-base'
import Rating from './Rating'
import Buttone from './Buttone'
import Message from './Notifications/Message'


export default function Review () {

    const [rating, setRating] = useState('')

    return (
        <Box my={9}>
            <Heading mb={2} fontSize={15}>REVIEWS</Heading>
            {/* NO REVIEWS */}
            <Message bold={true} bg='#e06666' color='white'>NO REVIEWS YET</Message>

            {/* REVIEWS */}
            <Box p={3} mt={5} rounded={5} bg='#e06666' borderColor='black'>
                <Heading fontSize={15} color='white'>User Doe</Heading>
                <Rating value={3} color='white'/>
                <Text mb={2} my={2} fontSize={12} color='white'>Jan 12 2022</Text>
                <Message bg='#ffff00'>Esto es un mensaje esto es un mensaje esto es un mensaje</Message>
            </Box>

            {/* WRITE A REVIEW */}
            <Box mt={10}>
                <Heading fontSize={15} mb={2} color='black'>LEAVE YOUR REVIEW</Heading>
                <VStack space={4}>
                    <FormControl>
                        <FormControl.Label _text={{fontWeight: 'bold', color:'black'}}>Rating</FormControl.Label>
                        <Select py={2} bg='#e06666' placeholder='Choose Rate' rounded={5} _selectedItem={{bg: '#ffff00', endIcon: <CheckIcon size={4} mt={1}/> }} selectedValue={rating} onValueChange={(e) => setRating(e)}>
                            <Select.Item label='1' value = '1'/>
                            <Select.Item label='2' value = '2'/>
                            <Select.Item label='3' value = '3'/>
                            <Select.Item label='4' value = '4'/>
                            <Select.Item label='5' value = '5'/>
                        </Select>
                    </FormControl>
                    <FormControl>
                     <FormControl.Label _text={{fontWeight: 'bold', color:'black'}}>Comment</FormControl.Label>
                     <TextArea bg='#D3D3D3' h={100} _focus={{bg: '#D3D3D3', borderColor:'#D3D3D3'}} placeholder='The best comic by far..' ></TextArea>
                    </FormControl>
                    <Buttone bg={'#ff000f'} mt={2} color='white'>SUBMIT</Buttone>
                    <Message bg='black' color='white'>Please Login to write a review</Message>
                </VStack>

            </Box>


        </Box>
    )

}