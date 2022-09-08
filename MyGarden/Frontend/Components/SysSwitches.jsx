import { View} from "react-native";
import React, { useState, useEffect } from "react";
import { Wrap, HStack } from "@react-native-material/core";
import SysSwitch from "./SysSwitch";

export default function SysSwitches(props) {
  const [sysToActivate, setSysToActivate] = useState(props.state);
  const setState = props.onChange;

  useEffect(() => {
    setState(sysToActivate);
  }, [sysToActivate]);

  return (
    <View>
      <HStack fill center spacing={70}>
        <Wrap m={2} items="center" spacing={10}>
          <SysSwitch
            iconName="watering-can"
            state={sysToActivate.Water}
            onPress={() => {
              setSysToActivate((prevState) => ({
                ...prevState,
                Water: !prevState.Water,
              }));
            }}
          />
        </Wrap>
        <Wrap m={2} items="center" spacing={10}>
          <SysSwitch
            iconName="lightbulb"
            state={sysToActivate.Light}
            onPress={() => {
              setSysToActivate((prevState) => ({
                ...prevState,
                Light: !prevState.Light,
              }));
            }}
          />
        </Wrap>
        </HStack>
        <HStack fill center spacing={70}>
        <Wrap  items="center"  spacing={10}>
          <SysSwitch
            iconName="fan"
            state={sysToActivate.Air}
            onPress={() => {
              setSysToActivate((prevState) => ({
                ...prevState,
                Air: !prevState.Air,
              }));
            }}
          />
        </Wrap>
        <Wrap m={2} items="center" spacing={10}>
          <SysSwitch
            iconName="leaf"
            state={sysToActivate.Fertilize}
            onPress={() => {
              setSysToActivate((prevState) => ({
                ...prevState,
                Fertilize: !prevState.Fertilize,
              }));
            }}
          />
        </Wrap>
      </HStack>
    </View>
  );
}


  

