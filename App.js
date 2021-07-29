import * as React from 'react';
import { Button, View, Text,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeS from "./screens/HomeS"

import BreakfastOptions from "./screens/BreakfastOptions"
import LunchOptions from "./screens/LunchOptions"
import DinnerOptions from "./screens/DinnerOptions"
import SnackOptions from "./screens/SnackOptions"
import TabNavigator from "./navigation/TabNavigator";




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
  
      <Stack.Navigator initialRouteName="HomeS">
        <Stack.Screen name="HomeS" component={TabNavigator} />
        <Stack.Screen name="BreakfastOptions" component={ BreakfastOptions } />
        <Stack.Screen name="LunchOptions" component={ LunchOptions } />
        <Stack.Screen name="SnackOptions" component={ SnackOptions } />
        <Stack.Screen name="DinnerOptions" component={ DinnerOptions } />
      </Stack.Navigator>
        
    </NavigationContainer>
  );
}

export default App;
