import React, { useState, useEffect } from "react";
import {
  Stack,
  Button,
  Flex,
  Text,
  TextInput,
} from "@react-native-material/core";
import { VStack, HStack } from "@react-native-material/core";
import { backColor, mainColor } from "../Style/Colors";
import PageHead from "../Components/PageHead";
import SysSwitch from "../Components/SysSwitch";
import { StyleSheet } from "react-native";
import NumericInput from "react-native-numeric-input";

export default function Preferences({ navigation }) {
  const [isActive, setIsActive] = useState(false);
  const [maxTemp, setMaxTemp] = useState(35);

  const isMax = 50;


  const grandchildToChild = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
      <HStack fill center spacing={1}>
        <VStack fill center spacing={12}>
          <HStack>
            <Text variant="h4">System Mode</Text>
          </HStack>
          <HStack>
            <Text style={styles.modeTxt}>
              By turning the system to auto mode, you agree that we will take
              full control over the irrigation system. You will not be able to
              activate remotly or set a schedule. You can change the mode at any
              time.
            </Text>
          </HStack>
          <HStack>
            <SysSwitch
              iconName="sync"
              grandchildToChild={grandchildToChild}
              isActive={isActive}
            />
          </HStack>
        </VStack>
      </HStack>
      <HStack fill centre spacing={15}>
        <Text>Max temp before activision</Text>
        <NumericInput/>
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  modeTxt: {
    color: "grey",
    margin: 11,
    fontStyle: "italic",
  },
  txtInput: {
    width: "50%",
    backgroundColor: backColor,
    color: mainColor,
  },
});
