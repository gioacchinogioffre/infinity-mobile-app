import React from 'react'
import { ScrollView, Flex, Text, Pressable, Image, Box, Heading } from 'native-base'
import comics from '../data/comics.js'
import Rating from './Rating'
import { useNavigation } from '@react-navigation/native'

export default function HomeComics () {
    
    const navigation= useNavigation() 


    return (
        <ScrollView flex={1} showsVerticalScrollIndicator={false}> 
            <Flex flexWrap='wrap' direction='row' justifyContent='space-between' px={6}>
                {comics.map(c => (
                    <Pressable onPress={() => navigation.navigate('Single', c)} key={c.id} w='31%' bg='#ff000f' rounded='md' shadow={2} pt={0.3} my={5} pb={2} overflow='hidden'>
                        <Image source={{uri:'https://lumiere-a.akamaihd.net/v1/images/maractsminf001_cov_2a89b17b.jpeg?region=0%2C0%2C1844%2C2800'}} alt={c.name} w={24} h={24} resizeMode='contain' />
                        <Box px={4} pt={1}>
                            <Heading size="sm" bold>${c.price}</Heading>
                            <Text isTruncated >{c.name}</Text>
                            <Rating value={c.rating} color='#ffff00'  />
                        </Box>
                    </Pressable>
                ))
                }
            </Flex>
        </ScrollView>
    )
}