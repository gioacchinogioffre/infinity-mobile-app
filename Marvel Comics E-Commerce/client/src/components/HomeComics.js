import React from 'react'
import { ScrollView, Flex, Text, Pressable, Image, Box, Heading } from 'native-base'
import Rating from './Rating'
import { useNavigation } from '@react-navigation/native'

export default function HomeComics ({comics}) {
    
    const navigation= useNavigation() 


    return (
        <ScrollView bg='#ffe5e5' flex={1} showsVerticalScrollIndicator={false}> 
            <Flex  flexWrap='wrap' direction='row' justifyContent='space-between' px={3}>
                {comics.map(c => (
                    <Pressable onPress={() => navigation.navigate('Single', c)} key={c._id} w='31%' bg='white' rounded='md' shadow={2} pt={0.3} my={3} pb={2} overflow='hidden'>
                        <Image source={{uri:c.image}} alt={c.name} w={24} h={24} mt='2'resizeMode='contain' />
                        <Box px={4} pt={1}>
                            <Heading size="sm" bold>${c.price}</Heading>
                            <Text isTruncated >{c.name}</Text>
                            <Rating value={c.rating} color='#f6bc66'  />
                        </Box>
                    </Pressable>
                ))
                }
            </Flex>
        </ScrollView>
    )
}