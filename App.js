import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import navigationScreen from '@navigation/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TransactionHome">
      {navigationScreen.map((pages, idx) => {
        return (
        <Stack.Screen
          key={idx}
          options={{headerShown: false}}
          {...pages}
        />
      )})}
    </Stack.Navigator>
    </NavigationContainer>
  );
}
