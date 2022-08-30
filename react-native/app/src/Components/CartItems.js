import React from 'react'
import { Box, Pressable, HStack, Center, Image} from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view'
import comics from '../data/comics'
import { FontAwesome } from '@expo/vector-icons'

const Swiper = () => (
    <SwipeListView rightOpenValue={-50} previewRowKey='0' previewOpenValue={-40} previewOpenDelay={3000} data={comics.slice(0,2)} renderHiddenItem={hiddenItem} renderItem={renderItem} showsVerticalScrollIndicator={false} />
)

const renderItem = (data) => {
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems='center' shadow={1} rounded={10} overflow='hidden'>
                <Center w='25%'>
                    <Image source={{uri: data.item.image}} alt={data.item.name} w='full' h={24} resizeMode='center'/>
                </Center>
            </HStack>
        </Box>
    </Pressable>
}

const hiddenItem = (data) => {
    <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h='88%' ml='auto' justifyContent='center' bg='#ff000f' >
        <Center alignItems='center'space={2}>
            <FontAwesome name='trash' size={24} />
        </Center>
    </Pressable>
}

export default function CartItems () {
    return (
        <Box >
            <Swiper/>
        </Box>
    )
}