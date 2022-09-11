import { View} from "react-native";
import React, { useState, useEffect } from "react";
import { Wrap, HStack } from "@react-native-material/core";
import SysSwitch from "./SysSwitch";

export default function SysSwitches(props) {
  const [sysToActivate, setSysToActivate] = useState(props.state);
  const setState = props.onChange;



  return (
    <View>
      <HStack fill center spacing={70}>
        <Wrap m={2} items="center" spacing={10}>
          <SysSwitch
            iconName="watering-can"
            state={sysToActivate.water_sys}
            onPress={() => {
              setSysToActivate((prevState) => ({
                ...prevState,
                water_sys: !prevState.water_sys,
              }));
            }}
          />
        </Wrap>
        <Wrap m={2} items="center" spacing={10}>
          <SysSwitch
            iconName="lightbulb"
            state={sysToActivate.light_sys}
            onPress={() => {
              setSysToActivate((prevState) => ({
                ...prevState,
                light_sys: !prevState.light_sys,
              }));
            }}
          />
        </Wrap>
        </HStack>
        <HStack fill center spacing={70}>
        <Wrap  items="center"  spacing={10}>
          <SysSwitch
            iconName="fan"
            state={sysToActivate.air_sys}
            onPress={() => {
              setSysToActivate((prevState) => ({
                ...prevState,
                air_sys: !prevState.air_sys,
              }));
            }}
          />
        </Wrap>
        <Wrap m={2} items="center" spacing={10}>
          <SysSwitch
            iconName="leaf"
            state={sysToActivate.fertelize_sys}
            onPress={() => {
              setSysToActivate((prevState) => ({
                ...prevState,
                fertelize_sys: !prevState.fertelize_sys,
              }));
            }}
          />
        </Wrap>
      </HStack>
    </View>
  );
}


  

