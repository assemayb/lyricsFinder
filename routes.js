import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./screens/HomePage";
import Test from './screens/Test';

import Lyrics from "./screens/Lyrics";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Lyrics Screen" component={Lyrics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
