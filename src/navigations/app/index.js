import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, DetailActivity} from 'scenes';
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="DetailActivity" component={DetailActivity} />
    </Stack.Navigator>
  );
};

export default AppStack;
