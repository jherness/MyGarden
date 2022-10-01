import { View } from "react-native";
import {
  Stack,
  Button,
  Wrap,
  Avatar,
  VStack,
  HStack,
} from "@react-native-material/core";
import React, { useEffect } from "react";
import * as Colors from "../Style/Colors";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function CurrentlyActiveIcon(props) {
  const currentActive = props.currentActive;

  const ChangeColor = (iconName, currentActive) => {
    switch (iconName) {
      case "watering-can":
        if (currentActive.water_sys) {
          return Colors.TunrOn;
        } else {
          return Colors.TurnOff;
        }

      case "lightbulb":
        if (currentActive.light_sys) {
          return Colors.TunrOn;
        } else {
          return Colors.TurnOff;
        }
      case "fan":
        if (currentActive.air_sys) {
          return Colors.TunrOn;
        } else {
          return Colors.TurnOff;
        }
      case "leaf":
        if (currentActive.fertelize_sys) {
          return Colors.TunrOn;
        } else {
          return Colors.TurnOff;
        }
    }
  };

  return (
    <VStack center spacing={30} >
      <HStack center spacing={70}>
        <Wrap m={2} items="center" spacing={10}>
          <Avatar
            size={55}
            color={ChangeColor("watering-can", currentActive)}
            icon={(props) => <Icon name={"watering-can"} {...props} />}
          />
        </Wrap>
        <Wrap m={2} items="center" spacing={10}>
          <Avatar
            size={55}
            color={ChangeColor("lightbulb", currentActive)}
            icon={(props) => (
              <Icon name={"lightbulb"} style={Colors.backColor} {...props} />
            )}
          />
        </Wrap>
      </HStack>
      <HStack center spacing={70}>
        <Wrap m={2} items="center" spacing={10}>
          <Avatar
            size={55}
            color={ChangeColor("fan", currentActive)}
            icon={(props) => <Icon name={"fan"} {...props} />}
          />
        </Wrap>
        <Wrap m={2} items="center" spacing={10}>
          <Avatar
            size={55}
            color={ChangeColor("leaf", currentActive)}
            icon={(props) => (
              <Icon name={"leaf"} style={Colors.backColor} {...props} />
            )}
          />
        </Wrap>
      </HStack>
    </VStack>
  );
}
