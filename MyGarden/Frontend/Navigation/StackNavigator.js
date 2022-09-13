import React from "react";
import { StyleSheet } from "react-native";
import { Avatar } from "@react-native-material/core";
import { createStackNavigator } from "@react-navigation/stack";
import Analythics from "../Pages/Analytics";
import RemoteActivation from "../Pages/RemoteActivation";
import Home from "../Pages/Home";
import ScheduleActivation from "../Pages/ScheduleActivation";
import ActivationHistory from "../Pages/ActivationHistory";
import * as Colors from "../Style/Colors";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Preferences from "../Pages/Preferences";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const homeOptions = ({ navigation, route }) => ({
    back: styles.backBtn,
    headerStyle: styles.headerStyles.headerStyle,
    headerTitleStyle: styles.headerStyles.headerTitleStyle,
    headerRight: () => (
      <Avatar
        size={45}
        style={styles.avatar}
        icon={(props) => (
          <Icon
            name="star-settings"
            style={styles.icon}
            onPress={() => navigation.navigate("Preferences")}
          />
        )}
      />
    ),
  });

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={homeOptions} />
      <Stack.Screen
        name="Analythics"
        component={Analythics}
        options={styles.headerStyles}
      />
      <Stack.Screen
        name="Schedule Activation"
        component={ScheduleActivation}
        options={styles.headerStyles}
      />
      <Stack.Screen
        name="Remote Activation"
        component={RemoteActivation}
        options={styles.headerStyles}
      />
      <Stack.Screen
        name="Activation History"
        component={ActivationHistory}
        options={styles.headerStyles}
      />
      <Stack.Screen
        name="Preferences"
        component={Preferences}
        options={styles.headerStyles}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: { color: Colors.backColor, fontSize: 28 },
  avatar: { backgroundColor: Colors.mainColor },
  headerStyles: {
    headerStyle: {
      backgroundColor: Colors.mainColor,
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: Colors.backColor,
    },
    headerTintColor: Colors.backColor,
  },
});

export { MainStackNavigator };
