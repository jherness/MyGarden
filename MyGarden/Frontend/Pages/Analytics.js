import React, { useEffect, useState } from "react";
import { Flex, Spacer } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import { View, Image, StyleSheet } from "react-native";
import PageHead from "../Components/PageHead";
import { backColor, mainColor } from "../Style/Colors";
import DropDown from "../Components/DropDown";
import Graph from "../Components/Graph";

export default function Analythics() {
  const [timeTypeText, setTimeTypeText] = useState("Hour");

  const timeTypeToPapa = (data) => {
    setTimeTypeText(data);
  };
  useEffect(() => {
    console.log(timeTypeText);
  }, [timeTypeText]);

  return (
    <VStack fill center spacing={1} style={styles.container}>
      <Spacer />
          <HStack fill center>
            <Graph />
          </HStack>
        <HStack fill center>
          <DropDown state={timeTypeText} timeTypeToPapa={timeTypeToPapa} />
        </HStack>
      <Spacer />
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: backColor },
});
