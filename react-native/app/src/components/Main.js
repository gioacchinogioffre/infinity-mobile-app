import React from 'react'
import { Text, View, TouchableWithoutFeedbak } from 'react-native';
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList.js'

// COMPONENTES
// Text - unico componente para mostrar texto
// View - vistar para crear las interfaces (parecido al div. Por defecto se ciomporta como un contenedor con flex-box)
// Textinput - inputs
// Touchable - cosas que se pueden tocar en la UI (reamplaza al boton por ejemplo, se hace onPress en lugar de onClick)
// Constants - constantes estipuladas para dar estilos. Util a la hora acomodar margenes segun dispositivo
// Flat list - para desplegar listas y hacer scroll / pensado para mas rendimiento en cuanto a listas de datos
// Scroll - solo para vista que necesita scroll (ejemplo solo texto)

export default function Main() {
    return (
      <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
        <RepositoryList/>
      </View>
    );
  }