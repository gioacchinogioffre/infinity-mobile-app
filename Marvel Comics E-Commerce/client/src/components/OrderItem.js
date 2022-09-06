import React from 'react'
import { FlatList, HStack, Box, Center, Image, VStack, Text, Button } from 'native-base'
import comics from '../data/comics'
import { Pressable } from 'react-native'

export default function OrderItem () {
    return (
        <FlatList showsVerticalScrollIndicator={false} data={comics.slice(0,2)} keyExtractor={i => i.id} renderItem={({item}) => (
            <Pressable>
                <Box mb={3}>
                    <HStack alignItems='center' bg='white' shadow={1} rounded={10} overflow='hidden'>
                        <Center w='20%'>
                            <Image source={{uri: item.image}} alt={item.name} w='full' h={24} resizeMode='contain' />
                        </Center>
                        <VStack w='60%' px={2}>
                            <Text isTruncated bold>
                                {item.name}
                            </Text>
                            <Text isTruncated mt={2}>
                                ${item.price}
                            </Text>
                        </VStack>
                        <Center>
                            <Button bg='#ff000f' _text={{fontWeight: 'bold', fontSize:'18'}} _pressed={{bg:'#ff000f'}} >
                                1
                            </Button>
                        </Center>
                    </HStack>
                </Box>
            </Pressable>
        )}>
        </FlatList>
    )
}