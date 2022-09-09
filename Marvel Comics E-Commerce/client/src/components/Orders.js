import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Box, ScrollView, Pressable, HStack, Text, Button } from 'native-base'

export default function Orders () {

    const user = useSelector(state => state.user) 
    console.log(user)

    useEffect(() => {
    },[user])

    return (
        <Box h='90%' pt={5}>
            <ScrollView showsVerticalScrollIndicator={false} >
                {/* PAID */}
                <Pressable mb={5}>
                    <HStack space={4} bg='#ACD1AF' justifyContent='space-between' alignItems='center' py={4} px={2}>
                    <Text color= 'black' fontSize={15} isTruncated>#19832</Text>
                    <Text color= 'black' bold fontSize={15} isTruncated>{user.orders[0].state}</Text>
                    <Text color= 'black' italic  fontSize={15} isTruncated>{user.orders[0].date}</Text>
                    <Button px={5} py={1.5} bg='#55a630' rounded={5} _pressed={{bg:'black'}}>${user.orders[0].total}</Button>
                    </HStack>
                </Pressable>
                {/* UNPAID */}
                <Pressable>
                    <HStack space={4} justifyContent='space-between' alignItems='center' py={4} px={2}>
                    <Text color= 'black' fontSize={15} isTruncated>#19870</Text>
                    <Text color= 'black' bold fontSize={15} isTruncated>UNPAID</Text>
                    <Text color= 'black' italic  fontSize={15} isTruncated>Dec 17 2022</Text>
                    <Button px={5} py={1.5} bg='#ff000f' rounded={5} _pressed={{bg:'black'}}>$80</Button>
                    </HStack>
                </Pressable>
            </ScrollView>
        </Box>
    )
}