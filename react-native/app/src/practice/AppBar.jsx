import React from 'react'
import { View, StyleSheet} from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme'
import {Link} from 'react-router-native'

const styles = StyleSheet.create ({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.primaryText
    }

})

const AppBarTab = ({ active, children, to}) => {
    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>
        </Link>
    )
}

export default function AppBar () {
    return (
         <View style={styles.container}>
            <AppBarTab active={true} to='/'>Repositories</AppBarTab>
         </View>
    )
}