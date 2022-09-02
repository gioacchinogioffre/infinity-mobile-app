import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import StyledText from './StyledText';
import RepositoyStats from './RepositoryStats.jsx';
import theme from '../theme';
import RepositoryItemHeader from './RepositoryItemHeader.jsx';

// Para dar estilos en react-native se utiliza StyleSheet (no podemos usar css, esta es la forma correcta). Se pueden poner en un archivo aparte o abajo del componente.
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    language: {
        padding: 4,
        color: theme.color.white,
        backgroundColor: theme.color.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        paddingVertical: 2,
        marginVertical: 10,
        overflow: 'hidden' // sino a veces el border radius no funciona
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})


export default function RepositoryItem (props) {

    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader styles={styles} {...props}/>
            <RepositoyStats  {...props}/>
         </View>   
    )

}