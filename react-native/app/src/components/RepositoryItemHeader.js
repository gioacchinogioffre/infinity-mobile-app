import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';

export default function RepositoryItemHeader ({ownerAvatarUrl, fullName, language, description, styles}) {

    return (
        <View>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl}}></Image>
            <StyledText fontSize='subheading'fontWeight='bold'>{fullName}</StyledText>
            <StyledText>{description}</StyledText>
            <StyledText>{language}</StyledText>
        </View>
    )
}