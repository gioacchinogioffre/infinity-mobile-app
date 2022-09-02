import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';

export default function RepositoryItemHeader ({ownerAvatarUrl, fullName, language, description, styles}) {

    // flex: 1 --> en caso de que no alcance el espacio, para que vaya abajo

    return (
        <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl}}></Image>
            <View style={{ flex: 1, paddingLeft: 5}}>
                <StyledText fontSize='subheading'fontWeight='bold'>{fullName}</StyledText>
                <StyledText>{description}</StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>
        </View>
    )
}