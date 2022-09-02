import React from 'react'
import { Button } from 'native-base'

export default function Buttone ({mt, bg, color, children, onPress, width}) {
    return (
        <Button w={width} h={55} mt={mt} rounded='full' bg={bg} _text={{color: color, fontWeight:'bold'}} _pressed={{bg:bg}} onPress={onPress}>{children}</Button>
    )
}