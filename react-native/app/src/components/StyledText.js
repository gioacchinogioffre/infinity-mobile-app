import React from 'react'
import { Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: 'grey'
    },
    bold: {
        fontWeight: 'bold',
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    }
})

// el componente Text envuelve un texto que es el children
// Creamos un componente de Texto con estilos reutilizable para renderizar textos.

export default function StyledText ({blue, bold, children, big, small}) { // le pasamos props que evaluaremos si están para darle los estilos

    const textStyles = [
        styles.text,
        blue && styles.blue,
        big && styles.big,
        small && styles.small,
        bold && styles.bold
    ]

    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )

}