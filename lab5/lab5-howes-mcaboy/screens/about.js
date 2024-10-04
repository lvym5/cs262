import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '@/styles/global';


export default function AboutScreen({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>All meowbout me</Text>
        </View>
    );
}