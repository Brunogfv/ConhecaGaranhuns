import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Details from './src/pages/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a6b4a'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Conheça Garanhuns'
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Detalhes do local'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
