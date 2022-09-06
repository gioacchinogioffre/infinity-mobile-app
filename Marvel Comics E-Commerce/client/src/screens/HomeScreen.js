import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from 'native-base'
import HomeSearch from '../components/HomeSearch'
import HomeComics from '../components/HomeComics'
import { getComics } from '../redux/actions'

export default function HomeScreen () {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComics())
    }, [])

    const comics = useSelector(state => state.comics)

    return (
        <Box flex={1}>
            <HomeSearch/>
            <HomeComics comics={comics} />
        </Box>
    )
}