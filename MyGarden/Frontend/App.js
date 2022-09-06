import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./Navigation/StackNavigator";



export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
}
