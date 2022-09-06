import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Analythics from "../Pages/Analytics";
import RemoteActivation from "../Pages/RemoteActivation";
import Home from "../Pages/Home";
import ScheduleActivation from "../Pages/ScheduleActivation";
import ActivationHistory from "../Pages/ActivationHistory";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Analythics" component={Analythics} />
      <Stack.Screen name="Schedule Activation" component={ScheduleActivation} />
      <Stack.Screen name="Remote Activation" component={RemoteActivation} />
      <Stack.Screen name="Activation History" component={ActivationHistory} />

    </Stack.Navigator>
  );
}

export { MainStackNavigator };