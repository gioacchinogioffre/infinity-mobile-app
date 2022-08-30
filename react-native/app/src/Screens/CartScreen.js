import React from 'react'
import { Box, Text, Center, ScrollView} from 'native-base'
import EmptyCart from '../Components/EmptyCart'
import CartItems from '../Components/CartItems'

export default function CartScreen () {
    return (
        <Box safeAreaTop >
            {/* Header */}
            <Center py={5}>
                <Text bold fontSize={20}>Cart</Text>
            </Center>
            {/* Empty Cart */}
            {/* <EmptyCart/> */}
            {/* Cart Items */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <CartItems /> */}
            </ScrollView>



        </Box>
    )
}