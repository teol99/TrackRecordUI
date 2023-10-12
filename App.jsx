import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/screens/HomeScreen';
import RecordScreen from './src/components/screens/RecordScreen';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Track Record' }}/>
        <Stack.Screen name="RecordScreen" component={RecordScreen} options={{ title: 'My Record' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
