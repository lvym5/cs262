import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '@/styles/global';


export default function DetailsScreen({ route, navigation }) {

    return (
        <View style={globalStyles.container}>
            {/* Display the fields of the received movie object. */}
            <Text>ID : { route.params.id }</Text>
            <Text>Name: { route.params.name }</Text>
        </View>
    );
}