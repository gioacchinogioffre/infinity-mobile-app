import React from 'react'
import { Box, Center, Text, Image, Heading} from 'native-base'
import Tabs from '../Components/Tabs'

export default function ProfileScreen () {
    return (
        <>
        <Center pt={10} pb={6} bg='#ff000f'>
            <Image source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/53c6fd42419075.57cc3f77e7ba5.png'}} alt='profilePicture' w={24} h={24} rounded={50}/>
            <Heading color='white' bold fontSize={15} isTruncated my={2}>
                Admin
            </Heading>
        </Center>
        {/* TABS */}   
        <Tabs/>
        
        </>
    )
}