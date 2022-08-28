import React from 'react'
import { Text, View, TouchableWithoutFeedbak } from 'react-native';
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx';
import { Redirect, Switch, Route, Routes } from 'react-router-native';


// COMPONENTES
// Text - unico componente para mostrar texto
// View - vistar para crear las interfaces (parecido al div. Por defecto se ciomporta como un contenedor con flex-box)
// Textinput - inputs
// Touchable - cosas que se pueden tocar en la UI (reamplaza al boton por ejemplo, se hace onPress en lugar de onClick)
// Constants - constantes estipuladas para dar estilos. Util a la hora acomodar margenes segun dispositivo
// Flat list - para desplegar listas y hacer scroll / pensado para mas rendimiento en cuanto a listas de datos
// Scroll - solo para vista que necesita scroll (ejemplo solo texto)
// Image - source en lugar de src, se le pasa un objeto {{ uri: url de la imagen}}, hay que darle estilos si o si para que se renderice

export default function Main() {
    return (
      <View style={{ flexGrow: 1}}>
        <AppBar/>
        <RepositoryList/>
      </View>
    );
  }