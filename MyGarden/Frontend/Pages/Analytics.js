import { React, useState } from "react";
import { Flex } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import { View, Image, StyleSheet } from "react-native";
import PageHead from "../Components/PageHead";
import { backColor, mainColor } from "../Style/Colors";
import Chart from "../Components/Chart";
import DataTimeDrop from "../Components/DataTimeDrop";
import { AnalyzeGraph } from "../Classes/AnalyzeGraph";

export default function Analythics() {
  const [timeTypeText, setTimeTypeText] = useState("Hour");

  const getPastMonth = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.192:3000/Samples/LastMonth`
      );
      const data = await response.json();
      setActivations(formatTimeline(data));
    } catch (err) {
      console.log(error);
    }
  };

  const timeTypeToPapa = (data) => {
    setTimeTypeText(data);
  };

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },

    logo: {
      width: 350,
      height: 250,
    },
  });

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
      <HStack fill center spacing={1}>
        <Flex direction="column">
          <PageHead first="Analytics" />
        </Flex>
      </HStack>

      <View style={styles.container}>
        <Chart lable={timeTypeText} />
        <DataTimeDrop state={timeTypeText} timeTypeToPapa={timeTypeToPapa} />
      </View>

      <VStack fill center spacing={1}></VStack>
    </VStack>
  );
}
