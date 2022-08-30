import React, { useState } from 'react'
import { Image, Text, Box, ScrollView, Heading, HStack, Spacer} from 'native-base'
import Rating from '../Components/Rating'
import Buttone from '../Components/Buttone'
import Review from '../Components/Review'
import NumericInput from 'react-native-numeric-input'

export default function SingleProductScreen () {

    const [value, setValue] = useState(0)

    return (
        <Box safeArea flex={1}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image source={{uri:'https://lumiere-a.akamaihd.net/v1/images/maractsminf001_cov_2a89b17b.jpeg?region=0%2C0%2C1844%2C2800'}} alt='comicDetail' w= 'full' h={300} resizeMode= 'contain' />
                <Heading fontSize={15} mt={5} >Spider Man</Heading>
                <Rating value={4} /> 
                <HStack space={2} alignItems='center' my={5}>
                    <NumericInput value={value} totalWidth={90} step={1} maxValue={5} minValue={0} 
                    iconStyle={{color: 'white'}}rightButtonBackgroundColor='#ff000f' leftButtonBackgroundColor='#ff000f'  />
                <Spacer />
                <Heading>$400</Heading>
                </HStack>
                <Text>Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto Esto es un texto </Text>
                <Buttone bg='#ff000f' color='white' mt={5}>ADD TO CART</Buttone>
                <Review></Review>
            </ScrollView>
        </Box>
    )
}