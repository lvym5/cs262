import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '@/styles/global';

export default function HomeScreen({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getMonopolyData = async () => {
      try {
        const response = await fetch(
          'https://cs262-webservice.azurewebsites.net/players'
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
              <Text>{ item.email }</Text>
          </TouchableOpacity>
      )} />
      )}
    </View>
    );
}