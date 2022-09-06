import React from "react";
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Analythics from "../Pages/Analytics";
import RemoteActivation from "../Pages/RemoteActivation";
import Home from "../Pages/Home";
import ScheduleActivation from "../Pages/ScheduleActivation";


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Home />
      </View>
    );
  }
  
  function RemoteScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <RemoteActivation />
      </View>
    );
  }
  
  function AnalyticScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Analythics />
      </View>
    );
  }
  
  function SchduleScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ScheduleActivation />
      </View>
    );
  }
  
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={RemoteActivation} />
      <Stack.Screen name="Analythics" component={Analythics} />
      <Stack.Screen name="Schedule Activation" component={ScheduleActivation} />
      <Stack.Screen name="Remote Activation" component={RemoteActivation} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };