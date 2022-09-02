import React from 'react'
import { Box, Text} from 'native-base'
import HomeSearch from '../components/HomeSearch'
import HomeComics from '../components/HomeComics'

export default function HomeScreen () {
    return (
        <Box flex={1}>
            <HomeSearch/>
            <HomeComics />
        </Box>
    )
}