import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "@/screens/home";
import DetailsScreen from "@/screens/details";
import AboutScreen from "@/screens/about";
import SharedHeader from "@/shared/header";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
                <SharedHeader navigation={navigation} />
            )
          })}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 0xb00b }}
        />
        <Stack.Screen
          name="About"
          component ={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;