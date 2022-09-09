import React, { useState } from 'react'
import { Heading, Text, Box, VStack, FormControl, Select, CheckIcon, TextArea, Input} from 'native-base'
import Rating from './Rating'
import Buttone from './Buttone'
import Message from './notifications/Message'
import { useDispatch } from 'react-redux'
import { postReview } from '../redux/actions'


export default function Review ({comicId, reviews}) {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        userID: '874188f2-e2d8-459a-b000-b5a2a5e64600', // cambiar por ID user
        comment: '',
        rating: 3,
        comicID: comicId,
        username: 'Joe'
   })


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

    const submitReview = () => {
        dispatch(postReview(input))
        setInput({...input, rating:3, comment:''})
    }

    return (
        <Box my={9}>
            <Heading mb={2} fontSize={15}>REVIEWS</Heading>

            {!reviews.length 
            ? 
            <Message bold={true} bg='#e06666' color='white'>NO REVIEWS YET</Message>
            :
            reviews.map(r => (
                <Box key={r._id} p={3} mt={5} rounded={5} bg='#e06666' borderColor='black'>
                    <Heading fontSize={15} color='white'>{r.username}</Heading>
                    <Rating value={r.rating} color='white'/>
                    <Text mb={2} my={2} fontSize={12} color='white'>{r.date}</Text>
                    <Message bg='#ffff00'>{r.comment}</Message>
                </Box>
            ))
            }


            {/* WRITE A REVIEW */}
            <Box mt={10}>
                <Heading fontSize={15} mb={2} color='black'>LEAVE YOUR REVIEW</Heading>
                <VStack space={4}>
                    <FormControl>
                        <FormControl.Label _text={{fontWeight: 'bold', color:'black'}}>Rating</FormControl.Label>
                        <Select py={2} bg='#e06666' placeholder='Choose Rate' rounded={5} _selectedItem={{bg: '#ffff00', endIcon: <CheckIcon size={4} mt={1}/> }} selectedValue={input.rating} onValueChange={(e) => setInput({...input, rating: e})}>
                            <Select.Item label='1' value={1}/>
                            <Select.Item label='2' value={2}/>
                            <Select.Item label='3' value={3}/>
                            <Select.Item label='4' value={4}/>
                            <Select.Item label='5' value={5}/>
                        </Select>
                    </FormControl>
                    <FormControl>
                     <FormControl.Label _text={{fontWeight: 'bold', color:'black'}}>Comment</FormControl.Label>
                     <TextArea onChangeText={(value) => handleOnChange({name: 'comment', value: value})}bg='#D3D3D3' h={100} _focus={{bg: '#D3D3D3', borderColor:'#D3D3D3'}} placeholder='The best comic by far..' value={input.comment}></TextArea>
                    </FormControl>
                    <Buttone onPress={submitReview} bg={'#ff000f'} mt={2} color='white'>SUBMIT</Buttone>
                </VStack>

            </Box>


        </Box>
    )

}