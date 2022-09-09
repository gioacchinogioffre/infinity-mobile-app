import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Center, Modal, Text, VStack, HStack, Button } from 'native-base'
import Buttone from './Buttone'
import { useNavigation } from '@react-navigation/native'
import { postOrder } from '../redux/actions'

export default function PlacerOrderModel () {

    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const OrdersInfo = [
        {
            title: 'Products',
            price: 28.29,
        },
        {
            title: 'Shipping',
            price: 5.99,
        },
        {
            title: 'Tax',
            price: 3.12,
        },
        {
            title: 'Total Amount',
            price: 37.30,
            color: '#ff000f',
            fontSize: 18
        },
    ]

    const navigation= useNavigation() 

    const order = {
        total: 37.30,
        comicID: ['12d52d3d-c896-4081-8f76-3973aeb32847', "1223efe8-8403-4b66-89ec-7deb60a4062a"],
        userID: '3292d6f4-2998-474c-93cf-387a049d323b',
        paymentMethod: 'paypal',
    }

    const submitOrder = (order) => {
        dispatch(postOrder(order))
        navigation.navigate('Order')
        setShowModal(false)
    }

    return (
        <Center mb={5}>
            <Buttone width='full' bg='black' mt={5} mb={5}color='white' onPress={() => setShowModal(true)}>
                SHOW TOTAL
            </Buttone>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} size='lg'>
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton/>
                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {
                             OrdersInfo.map((o, index) => (
                                    <HStack key={index} alignItems='center' justifyContent='space-between'>
                                        <Text fontWeight='medium'>{o.title}</Text>
                                        <Text fontSize={o.fontSize ? o.fontSize : 15} color={o.color ? o.color : 'black'} bold >${o.price}</Text>
                                    </HStack>
                             ))
                            }
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onPress={e => submitOrder(order)} bg='#ff000f' w='full' h={45} _text={{color:'white'}} _pressed={{bg:'green'}}>
                            PLACE YOUR ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}