import React from 'react'
import { FlatList, Text, View, TouchableWithoutFeedback } from 'react-native';
import repositories from '../data/repositories.js';
import RepositoryItem from './RepositoryItem.jsx'

// Para dar estilos de dimensiones se hace en valor numérico, son "pixeles" representados segun el dispositivo, no son pixeles reales.

export default function RepositoryList () {
    return (
        <FlatList 
        data ={repositories}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({item: repo}) => (
                <RepositoryItem {...repo}/>
        )}/>
    )
}