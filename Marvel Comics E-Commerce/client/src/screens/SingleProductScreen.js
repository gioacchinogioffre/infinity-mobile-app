import React, { useState } from 'react'
import { Image, Text, Box, ScrollView, Heading, HStack, Spacer} from 'native-base'
import Rating from '../components/Rating'
import Buttone from '../components/Buttone'
import Review from '../components/Review'
import NumericInput from 'react-native-numeric-input'
import { useNavigation } from '@react-navigation/native'


export default function SingleProductScreen ({route}) {

    const [value, setValue] = useState(0)

    const navigation= useNavigation() 
    const comic = route.params
// poner en la imagen product.image

    return (
        <Box safeArea flex={1}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image source={{uri:'https://lumiere-a.akamaihd.net/v1/images/maractsminf001_cov_2a89b17b.jpeg?region=0%2C0%2C1844%2C2800'}} alt='comicDetail' w= 'full' h={300} resizeMode= 'contain' />
                <Heading fontSize={15} mt={5} >{comic.name}</Heading>
                <Rating value={comic.rating} color='#ffff00' text={`${comic.numReviews} reviews`} /> 
                <HStack space={2} alignItems='center' my={5}>
                    { comic.countInStock > 0 
                    ? <NumericInput value={value} totalWidth={90} step={1} maxValue={comic.countInStock} minValue={0} 
                    iconStyle={{color: 'white'}}rightButtonBackgroundColor='#ff000f' leftButtonBackgroundColor='#ff000f'  />
                    : <Heading  fontSize={14} italic color='#ff000f'>Out of stock</Heading>
                    }
                <Spacer />
                <Heading>${comic.price}</Heading>
                </HStack>
                <Text>{comic.description} </Text>
                <Buttone bg='#ff000f' color='white' mt={5}>ADD TO CART</Buttone>
                <Review></Review>
            </ScrollView>
        </Box>
    )
}