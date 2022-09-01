import React from 'react'
import { FlatList, HStack, Box, Center, Image } from 'native-base'
import comics from '../data/comics'
import { Pressable } from 'react-native'

export default function OrderItem () {
    return (
        <FlatList showsVerticalScrollIndicator={false} data={comics.slice(0,3)} keyExtractor={i => i.id} renderItem={({item}) => (
            <Pressable>
                <Box mb={3}>
                    <HStack alignItems='center' bg='white' shadow={1} rounded={10} overflow='hidden'>
                        <Center w='25%'>
                            <Image source={{uri: 'https://lumiere-a.akamaihd.net/v1/images/maractsminf001_cov_2a89b17b.jpeg?region=0%2C0%2C1844%2C2800'}} alt={item.name} w='full' h={24} resizeMode='contain' />
                        </Center>
                    </HStack>
                </Box>
            </Pressable>
        )}>
        </FlatList>
    )
}