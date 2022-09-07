import React, { useState } from 'react'
import { HStack, Input, Pressable, Button, Menu, Divider, HamburgerIcon, Checkbox, Heading, Radio, Text, VStack } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const sorts = [
    {title: 'Popularity', items: ['Best Sellers', 'Highest Rated']},
    {title: 'Price', items: ['Price Low to High', 'Price High to Low']}
    ]
const filters = ['In Stock', 'Free Shipping']
const prices = ['$5 - $10', '$10 - $15', '$15 - $25', '$25 - $50', '$50 - $100']

export default function HomeSearch () {

    const [sort, setSort] = useState({
        Popularity: '',
        Price: ''
    })
    const navigation= useNavigation() 

    return (
        <HStack space={3} bg='#ff000f' w= 'full' px={6} py={4} alignItems='center' safeAreaTop >
            <Input placeholder='Avengers, Infinity, Secret Wars...' w='90%' bg='white' type='search' h={10} _focus={{bg:'white' }} />

            <Menu w="370" trigger={triggerProps => {
            return <Pressable {...triggerProps}>
                    <HamburgerIcon size='lg' color='white' />
                    </Pressable>;
            }}>
                {/* <Pressable w={150} justifyContent='flex-end'>
                    <HamburgerIcon justifyContent='flex-end' size='lg' color='black' />
                </Pressable> */}

                <Menu.Group>
                    <Heading size='sm' ml={3} mb={2}>Sort By</Heading>
                {sorts.map(s => (
                    <Menu.Group key={s.title} title={s.title}>
                        <Radio.Group  value={sort[s.title]} onChange={nextValue => setSort({...sort, [s.title]: nextValue})}>
                        {s.items.map(i=>(
                                <Radio colorScheme="red" ml={2} mb={2} value={i}>{i}</Radio>
                                ))}
                        </Radio.Group>
                    </Menu.Group>
                ))}
                </Menu.Group>
                <Divider mt="3" w="100%" />
                <Menu.Group mb={-4}>
                    <Heading size='sm' ml={4} mb={2}>Filter By</Heading>
                {filters.map(f => (
                    <Menu.Item key={f}>
                        <HStack w='100%'justifyContent='space-between'>
                            <Checkbox colorScheme="red">{f}</Checkbox>    
                            <Text>(8)</Text>
                        </HStack>
                    </Menu.Item>
                ))}
                    <Heading size='sm' ml={4} mt={5} mb={2}>Price</Heading>
                        <HStack>
                            <Input  ml={4} w='30%' mr={3} h={10} type='number' placeholder='Min'/>
                            <Input w='30%' h={10}type='number'placeholder='Max'/>
                        </HStack>
                        <VStack ml={5} mr={5} my={5}>
                            {prices.map(p => (
                                <HStack my={0.5}w='100%'justifyContent='space-between'>
                                    <Checkbox colorScheme="red">{p}</Checkbox>
                                    <Text>(5)</Text>
                                </HStack>
                            ))}
                        </VStack>
                </Menu.Group>
                <Button mt={10} h={20} bg='black' color='white' _pressed={{bg: '#ff000f'}} _text={{fontSize:'18'}}>Show 23 results</Button>
            </Menu>

            {/* <Pressable ml={3} onPress={() => navigation.navigate('Cart')} >
                <FontAwesome5 name='shopping-basket' size={24} color='white'/>
                <Box px={1} rounded='full' bg='black' position='absolute' top={-18} left={1.5} _text={{color: 'white'}}>5</Box>
            </Pressable> */}
        </HStack>
    )
}