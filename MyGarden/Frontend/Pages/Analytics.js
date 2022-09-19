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
      <HStack fill center spacing={1}>
        <Flex direction="column">
          <PageHead first="Analytics" />
        </Flex>
      </HStack>
      <HStack fill cente>
        <VStack fill center>
          <HStack fill center>
            <Graph/>
          </HStack>
          <HStack fill center>
            <DropDown state={timeTypeText} timeTypeToPapa={timeTypeToPapa} />
          </HStack>
        </VStack>
      </HStack>
      <Spacer/>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: backColor },
});
