import React from 'react'
import { Box, Text} from 'native-base'
import HomeSearch from '../Components/HomeSearch'
import HomeComics from '../Components/HomeComics'

export default function HomeScreen () {
    return (
        <Box flex={1}>
            <HomeSearch/>
            <HomeComics />
        </Box>
    )
}