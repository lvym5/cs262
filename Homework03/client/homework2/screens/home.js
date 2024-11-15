import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '@/styles/global';

export default function HomeScreen({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getMonopolyData = async () => {
      try {
        const response = await fetch(
          'https://lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/property'
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    
    useEffect(() => {
      getMonopolyData();
    }, []);


    return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={data} renderItem={({ item })=> (
          <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
              <Text>{ item.name }</Text>
          </TouchableOpacity>
      )} />
      )}
    </View>
    );
}