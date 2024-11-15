import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '@/styles/global';


export default function AboutScreen({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>All meowbout this application: </Text>
            <Text>This application accesses information on Monopoly players </Text>
        </View>
    );
}