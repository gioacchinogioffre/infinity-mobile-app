import React from 'react'
import { Box, Text, Center, ScrollView, VStack, Image, HStack} from 'native-base'
import Buttone from '../Components/Buttone'
import paypal from '../../assets/images/paypal.png'
import discover from '../../assets/images/discover.png'
import google from '../../assets/images/googlePay.png'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const methods = [
    {
        image: paypal,
        alt: 'paypal',
        icon: "Ionicons"
    },
    {
        image: discover,
        alt: 'discover',
        icon: "fontAwesome"
    },
    {
        image: google,
        alt: 'googlepay',
        icon: "fontAwesome"
    },
]

export default function PaymentScreen () {

    const navigation= useNavigation() 

    return (
        <Box flex={1} safeArea py={5} bg='#ff000f'>
            {/* HEADER */ }
            <Center pb={15}>
                <Text bold fontSize={18} color='white'>PAYMENT METHOD</Text>
            </Center>
            {/* METHODS */}
            <Box h='92%' bg='#ffe6e8' px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack mt={5} space={5}>
                        {methods.map((m, index) => (
                        <HStack key={index} bg='white' alignItems='center' px={3} py={1} justifyContent='space-between'>
                            <Box >
                                <Image source={m.image} alt={m.alt} w={70} h={60} resizeMode='contain'/>
                            </Box>
                                {m.icon === 'Ionicons' 
                                ? <Ionicons size={25} color='green' name="checkmark-circle" />
                                : <FontAwesome size={25} color='green' name="circle-thin" />
}
                        </HStack>
                        ))}
                     <Buttone onPress={() => navigation.navigate('PlaceOrder')} color='white' bg='black' mt={5}>CONTINUE</Buttone>
                     <Text italic textAlign='center'>Payment method is <Text bold>Paypal</Text> by default</Text>
                    </VStack>
                </ScrollView>
            </Box>

        </Box>
    )
}