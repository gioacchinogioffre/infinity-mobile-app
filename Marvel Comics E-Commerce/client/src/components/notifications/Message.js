import React from 'react'
import { Center, Text, Box} from 'native-base'

export default function Message ({children, bg, color, bold}) {
    return (
        <Center bgColor={bg}  p={3}>
            <Text bold={bold} color={color}>{children}</Text>
        </Center>
    )
}