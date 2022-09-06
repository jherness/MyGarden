import { View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import {
  Stack,
  Button,
  Flex,
  Text,
  Switch,
  Avatar,
} from "@react-native-material/core";

export default function RemoteSwitch(props) {
  return (
    <View>
      <Avatar
        size={55}
        icon={(props) => (
          <Icon
            name="watering-can"
            onPress={() => setCheckedW(!checkedWater)}
            {...props}
          />
        )}
      />
      <Switch
        value={checkedWater}
        onValueChange={() => setCheckedW(!checkedWater)}
      />
    </View>
  );
}
