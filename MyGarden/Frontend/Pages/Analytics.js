import React, { useEffect, useState } from "react";
import { Flex, Spacer } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import { StyleSheet, ScrollView } from "react-native";
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
    <ScrollView style={styles.container}>
      <VStack fill center spacing={10}>
        <HStack fill center>
          <Chart xLabel={timeTypeText} yLabel={dataTypeText} />
        </HStack>
        <HStack fillcenter>
          <DropDown state={timeTypeText} timeTypeToPapa={timeTypeToPapa} />
        </HStack>
      </VStack>
      <VStack fill center spacing={1} ></VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: backColor },
});
