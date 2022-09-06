import React from 'react'
import {Box, Center, Heading, Text} from 'native-base'

export default function OrderInfo ({icon, title, subTitle, text, success, danger}) {
    return (
        <Center bg='white' w={200} py={2} rounded={10} shadow={4} mb={2} ml={5} mr={1} px={4}>
            <Center bg='#ff000f' w={60} h={60} rounded='full'>
                {icon}
            </Center>
            <Heading bold color='black'fontSize={12} isTruncated mt={3} mb={2}>
                {title}
            </Heading>
            <Text color='black' >
                {subTitle}
            </Text>
            <Text color='black' italic textAlign='center'>
                {text}
            </Text>
            {success && (
                <Center py={2} mt={2} rounded={5} w='full' bg='#00000f'>
                    <Text color='white' >
                     Unpaid
                    </Text>
                </Center>
            )}
            {danger && (
                <Center py={2} mt={2} rounded={5} w='full' bg='#ff000f'>
                    <Text color='white' >
                     NotDeliver
                    </Text>
                </Center>
            )}
        </Center>
    )
}