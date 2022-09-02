import React from 'react'
import { Box, Text, Center, ScrollView, HStack, Button} from 'native-base'
// import EmptyCart from '../Components/EmptyCart'
import CartItems from '../Components/CartItems'
import Buttone from '../Components/Buttone'
import { useNavigation } from '@react-navigation/native'

export default function CartScreen () {

    const navigation= useNavigation() 

    return (
        <Box safeAreaTop >
            {/* Header */}
            <Center py={5}>
                <Text bold fontSize={20}>Cart</Text>
            </Center>
            {/* Empty Cart */}
            {/* <EmptyCart/> */}
            {/* Cart Items */}
            <ScrollView h='full' showsVerticalScrollIndicator={false}>
                <CartItems />
            {/* Total */}
                <Center mt={5}>
                    <HStack rounded={50} justifyContent='space-between' bg='white' shadow={3} w='90%' pl={5} h={45} alignItems='center' mb={5}>
                        <Text>Total</Text>
                        <Button _text={{fontWeight:'bold'}} _pressed={{bg:'white', _text: {color:'#ff000f'}}} bg='#ff000f' px={10} h={45} rounded={50}>$80</Button>
                    </HStack>
                </Center>
            {/* Checkout */}
                <Center px={5}>
                    <Buttone onPress={() => navigation.navigate('Shipping')} width='full' bg='black' color='#ffff00' mt={5} mb={10}>CHECKOUT</Buttone>
                </Center>
            </ScrollView>
        </Box>
    )
}