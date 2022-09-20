import React, { useEffect, useState } from "react";
import { Flex, Spacer } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";
import { backColor, mainColor } from "../Style/Colors";
import DropDown from "../Components/DropDown";
import Chart from "../Components/Chart";

export default function Analythics() {
  const [timeTypeText, setTimeTypeText] = useState("Hour");
  const [dataTypeText, setDataTypeText] = useState("lumens");

  const timeTypeToPapa = (data) => {
    setTimeTypeText(data);
  };
  useEffect(() => {
    console.log(timeTypeText);
  }, [timeTypeText]);

  return (
    <>
      <VStack fill center spacing={0} style={styles.container}>
        <HStack fill center>
          <DropDown state={timeTypeText} timeTypeToPapa={timeTypeToPapa} />
        </HStack>
      </VStack>
      <VStack fill center spacing={0} style={styles.container}>
        <HStack fill center>
          <Chart xLable={timeTypeText} yLable={dataTypeText} />
        </HStack>
      </VStack>
      <VStack fill center spacing={1} style={styles.container}></VStack>
    </>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: backColor },
});
