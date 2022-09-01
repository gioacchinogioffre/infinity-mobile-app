import React from 'react'
import { Box, ScrollView, Heading} from 'native-base'
import OrderInfo from '../Components/OrderInfo'
import OrderItem from '../Components/OrderItem'
import OrderModel from '../Components/OrderModel'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'

export default function OrderScreen () {
    return (
        <Box flex={1} safeArea pt={6} bg='#ffe6e8'>
            <Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <OrderInfo title='SHIPPING INFO' subTitle='Shipping: Argentina' success text='Pay Method: Paypal' icon={<FontAwesome5 name='shipping-fast' size={30} color='white'/>}/>
                    <OrderInfo title='DELIVER TO' subTitle='Address:' text='Av. Siempreviva 123, Buenos Aires' icon={<Ionicons name='location-sharp' size={30} color='white'/>}/>
                </ScrollView>
                {/* Order Item */}
                <Box px={6} pb={5} mb={4}>
                    <Heading bold color='black' fontSize={15} my={4}>
                        PRODUCTS
                    </Heading>
                    <OrderItem/>
                {/* Total */}
                    <OrderModel/>
                </Box>
            </Box>
        </Box>
    )
}