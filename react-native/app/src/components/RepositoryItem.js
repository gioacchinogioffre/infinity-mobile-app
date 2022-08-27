import React from 'react'
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';

// Para dar estilos en react-native se utiliza StyleSheet (no podemos usar css, esta es la forma correcta). Se pueden poner en un archivo aparte o abajo del componente.
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
})

export default function RepositoryItem (props) {

        <View key={props.id} style={styles.container}>
            <StyledText bold>id: {props.id}</StyledText>
            <StyledText blue>Name: {props.fullName}</StyledText>
            <StyledText>Description: {props.description}</StyledText>
            <StyledText>Language: {props.language}</StyledText>
            <StyledText small>Stars: {props.stargazersCount}</StyledText>
            <StyledText small>Forks: {props.forksCount}</StyledText>
            <StyledText small>Review: {props.reviewCount}</StyledText>
            <StyledText small>Rating: {props.ratingAverage}</StyledText>           
         </View>
}