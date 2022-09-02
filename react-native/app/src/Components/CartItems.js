import React from 'react'
import { Box, Pressable, HStack, Center, Image, VStack, Text, Button} from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view'
import comics from '../data/comics'
import { FontAwesome } from '@expo/vector-icons'


const Swiper = () => (
    <SwipeListView rightOpenValue={0} previewRowKey='0' previewOpenValue={-20} previewOpenDelay={3000} data={comics.slice(0,3)} renderHiddenItem={hiddenItem} renderItem={renderItem} showsVerticalScrollIndicator={false} />
)

const renderItem = (data) => (
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems='center' shadow={1} rounded={10} overflow='hidden'>
                <Center w='25%'>
                    <Image source={{uri: 'https://lumiere-a.akamaihd.net/v1/images/maractsminf001_cov_2a89b17b.jpeg?region=0%2C0%2C1844%2C2800'}} alt={data.item.name} w='full' h={100} resizeMode='contain'/>
                </Center>
                <VStack w='40%' space={1}>
                    <Text bold >
                        {data.item.name}
                    </Text>
                    <Text>
                        ${data.item.price}
                    </Text>
                </VStack>
                <Center>
                    <Button bg='#ff000f'>5</Button>
                </Center>
            </HStack>
        </Box>
    </Pressable>
)


// HORA 1:47
const hiddenItem = () => (
    <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h='88%' ml='auto' justifyContent='center' bg='#ff000f' >
        <Center alignItems='center'space={2}>
            <FontAwesome color='white' name='trash' size={24} />
        </Center>
    </Pressable>
)

export default function CartItems () {
    return (
        <Box >
            <Swiper/>
        </Box>
    )
}