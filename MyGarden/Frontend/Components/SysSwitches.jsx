import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { Wrap, HStack, VStack } from "@react-native-material/core";
import SysSwitch from "./SysSwitch";

export default function SysSwitches(props) {
  const childToParent = props.childToParent;

  const grandchildToChild = (data, iconName) => {
    switch (iconName) {
      case "watering-can":
        childToParent((prev) => ({ ...prev, water_sys: !prev.water_sys }));
        break;
      case "lightbulb":
        childToParent((prev) => ({ ...prev, light_sys: !prev.light_sys }));
        break;
      case "fan":
        childToParent((prev) => ({ ...prev, air_sys: !prev.air_sys }));
        break;
      case "leaf":
        childToParent((prev) => ({
          ...prev,
          fertelize_sys: !prev.fertelize_sys,
        }));
        break;
    }
  };

  return (
    <View>
      <VStack center fill spacing={30}>
        <HStack fill center spacing={70}>
          <Wrap m={2} items="center" spacing={10}>
            <SysSwitch
              iconName="watering-can"
              grandchildToChild={grandchildToChild}
              isActive={props.state.water_sys}
            />
          </Wrap>
          <Wrap m={2} items="center" spacing={10}>
            <SysSwitch
              iconName="lightbulb"
              grandchildToChild={grandchildToChild}
              isActive={props.state.light_sys}
            />
          </Wrap>
        </HStack>
        <HStack fill center spacing={70}>
          <Wrap items="center" spacing={10}>
            <SysSwitch
              iconName="fan"
              grandchildToChild={grandchildToChild}
              isActive={props.state.air_sys}
            />
          </Wrap>
          <Wrap m={2} items="center" spacing={10}>
            <SysSwitch
              iconName="leaf"
              grandchildToChild={grandchildToChild}
              isActive={props.state.fertelize_sys}
            />
          </Wrap>
        </HStack>
      </VStack>
    </View>
  );
}
