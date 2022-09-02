import React, { useState } from 'react'
import { Center, Modal, Text, VStack, HStack, Button, Image, Pressable } from 'native-base'
import Buttone from './Buttone'
import paypal from '../../assets/images/paypal.png'
import { useNavigation } from '@react-navigation/native'


export default function OrderModel () {

    const [showModal, setShowModal] = useState(false)

    const OrdersInfo = [
        {
            title: 'Products',
            price: 125.77,
        },
        {
            title: 'Shipping',
            price: 34.00,
        },
        {
            title: 'Tax',
            price: 11.12,
        },
        {
            title: 'Total Amount',
            price: 170.89,
            color: '#ff000f',
            fontSize: 18
        },
    ]

    const navigation= useNavigation() 


    return (
        <Center>
            <Buttone width='full' bg='black' mt={1} color='white' onPress={() => setShowModal(true)}>
                SHOW PAYMENT & TOTAL
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
                        <Pressable w='full' justifyContent='center' h={45} onPress={() => setShowModal(false)}>
                            <Image source={paypal} alt='paypal' resizeMode='contain' w='full' h={34}/>
                        </Pressable>
                        <Button bg='#ff000f' w='full' h={45} _text={{color:'white'}} onPress={() => {setShowModal(false); navigation.navigate('Home')}} _pressed={{bg:'green'}}>
                            PAY LATER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}