import React, { useState } from 'react'
import { Text } from 'native-base'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view' 
import { useWindowDimensions, StyleSheet } from 'react-native'
import Profile from './Profile'
import Orders from './Orders'


const renderScene = SceneMap({ // Declaramos las escenas/componentes que mostraremos en cada ruta de navegación.
    first: Profile,
    second: Orders,
})

export default function Tabs () {

    // const layout = useWindowDimensions()
    // initialLayout={{width: layout.width}}

    const [index, setIndex] = useState(0)
    const [routes] = useState([ // seteamos las rutas de nuestra navegación con los títulos. Las keys tienen que coincidir con las escenas que queremos mostrar.
        { key: 'first', title:'PROFILE'},
        { key: 'second', title:'ORDERS'},
    ]
    )

    // Para personalizar las barras de navegación
    const renderTabsBar = (props) => (
        <TabBar {...props}  tabStyle={styles.tabStyle} activeColor='#ffff00' inactiveColor='white' renderLabel={({route, color}) => (<Text style={{color, ...styles.text}}>{route.title}</Text>)}/>
    )

    // Renderizamos la escena (renderScene), seteamos index para que cambiar entre barras de navegacion (onIndexChange, obligatorio)
    return (
       <TabView navigationState={{index, routes}} renderScene={renderScene} onIndexChange={setIndex}  renderTabBar={renderTabsBar} />
    )
}

const styles= StyleSheet.create({
    tabStyle: {
        backgroundColor: 'black'
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold'
    }
}
)