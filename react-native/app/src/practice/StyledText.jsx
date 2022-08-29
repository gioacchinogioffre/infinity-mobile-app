import React from 'react'
import { Text, StyleSheet} from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fonstSizes.body,
        color: theme.color.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        fontSize: theme.fonstSizes.subheading
    },
    colorPrimary: {
        color: theme.color.primary
    },
    colorSecondary: {
        color: theme.color.textSecondary
    },
    textAlignCenter: {
        textAlign: 'center'
    }
})

// el componente Text envuelve un texto que es el children
// Creamos un componente de Texto con estilos reutilizable para renderizar textos.
// restOfProps es ppor si le pasamos props que no estamos contemplando en los parametros de StyledText

export default function StyledText ({align, children, color, fontSize, fontWeight, style, ...restOfProps}) { // le pasamos props que evaluaremos si están para darle los estilos

    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )

}