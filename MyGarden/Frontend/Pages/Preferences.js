import React, { useState, useEffect } from "react";
import { Text, Spacer } from "@react-native-material/core";
import { VStack, HStack } from "@react-native-material/core";
import { backColor, mainColor } from "../Style/Colors";
import SysSwitch from "../Components/SysSwitch";
import { StyleSheet } from "react-native";
import NumericInput from "react-native-numeric-input";
import { getSysMod } from "../Modules/gets";
import { SysMod } from "../Classes/SysMod";
import { putToDb } from "../Modules/puts";

export default function Preferences({ navigation }) {
  const [isActive, setIsActive] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minMoist, setMinMoist] = useState();
  const [sysMod, setSysMod] = useState(new SysMod());

  const grandchildToChild = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    getSysMod(setIsActive, setMaxTemp, setMinMoist);
  }, []);

  useEffect(() => {
    sysMod.setIsActive(isActive)
    sysMod.setMaxTemp(maxTemp)
    sysMod.setMinMoist(minMoist)
  }, [isActive, maxTemp, minMoist]);

  useEffect(() => {
    const unmount = navigation.addListener('blur', () => {
      putToDb(sysMod, "SysMod")
    });
    return unmount;
  }, [navigation])
  

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
      <HStack fill center spacing={1}>
        <VStack center spacing={12}>
          <HStack center>
            <Text style={{ marginTop: 15 }} variant="h4">
              System Mode
            </Text>
          </HStack>
          <HStack center>
            <Text style={styles.modeTxt} variant="h6">
              By turning the system to auto mode, you agree that we will take
              full control over the irrigation system, if we detect an
              exception. You will not be able to activate remotly or set a
              schedule. You can change the mode and the limitis at any time.
            </Text>
          </HStack>
          <HStack fill center>
            <SysSwitch
              iconName="sync"
              grandchildToChild={grandchildToChild}
              isActive={isActive}
            />
          </HStack>
        </VStack>
      </HStack>
      <VStack fill center spacing={10}>
        <HStack fill spacing={30}>
          <Text style={styles.modeTxt}>Max temp (C):</Text>
          <NumericInput
            rounded
            minValue={0}
            maxValue={50}
            textColor={mainColor}
            onLimitReached={(isMax, msg) => alert(msg)}
            initValue={maxTemp}
            value={maxTemp}
            onChange={(value) => setMaxTemp(value)}
            type="up-down"
          />
        </HStack>
        <HStack fill centre spacing={30}>
          <Text style={styles.modeTxt}>Min Moisture (%):</Text>
          <NumericInput
            rounded
            type="up-down"
            minValue={0}
            maxValue={100}
            textColor={mainColor}
            onLimitReached={(isMax, msg) => alert(msg)}
            value={minMoist}
            onChange={(value) => setMinMoist(value)}
            initValue={minMoist}
          />
        </HStack>
        <Spacer />
        <Spacer />
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  modeTxt: {
    color: "grey",
    margin: 13,
    fontStyle: "italic",
  },
  txtInput: {
    width: "50%",
    backgroundColor: backColor,
    color: mainColor,
  },
});
