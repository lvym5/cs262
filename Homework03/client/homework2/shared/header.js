import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SharedHeader({ route, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Icon name="cat" size={40}/>
        </TouchableOpacity>
    );
}