import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?' + new URLSearchParams({
          q: "book",
          filter: "full",
          langRestrict: "en",
          orderBy: "relevance",
        }).toString(),
      );
      const json = await response.json();
      setData(json.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getMovies();
  }, []);

  console.log(data);
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.volumeInfo.title} ---- Average Rating: {item.volumeInfo.averageRating || "Unknown"}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;
