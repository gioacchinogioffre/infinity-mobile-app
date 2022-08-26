import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants'
import repositories from '../data/repositories.js';

export default function RepositoryList () {
    return (
        <View>
            {repositories.map(repo => {
                <View key={repo.id}>
                    <Text>{repo.id}</Text>
                
                </View>
            })}

        </View>
    )
}