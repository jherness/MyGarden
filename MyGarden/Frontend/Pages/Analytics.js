import React, { useEffect, useState } from "react";
import { Flex, Spacer, Text } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import { StyleSheet, ScrollView, FlatList, View } from "react-native";
import * as Colors from "../Style/Colors";
import DropDown from "../Components/DropDown";
import Chart from "../Components/Chart";
import moment from "moment/moment";
import { getSamples } from "../Modules/gets";

export default function Analythics() {
  const [timeTypeText, setTimeTypeText] = useState("Hour");
  const [samples, setSamples] = useState([]);

  const [hourAgo, setHourAgo] = useState(
    new Date(moment().subtract(1, "hour"))
  );
  const [yesterday, setYesterday] = useState(
    new Date(moment().subtract(1, "day"))
  );
  const [weekAgo, setWeekAgo] = useState(
    new Date(moment().subtract(1, "week"))
  );
  const [monthAgo, setMonthAgo] = useState(
    new Date(moment().subtract(1, "month"))
  );
  const [yearAgo, setYearAgo] = useState(
    new Date(moment().subtract(1, "year"))
  );

  console.log(yearAgo);

  useEffect(() => {
    getSamples(setSamples);
  }, []);

  const flatlistData = [
    {
      title: "Light Data",
      yLabel: "Light (lumens)",
      yLabelTicks: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1500],
      xLabel: ["Hour", "Day", "Week", "Month", "Year"],
    },
    {
      title: "Humidity Data",
      yLabel: "Humidity (%)",
      yLabelTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      xLabel: ["Hour", "Day", "Week", "Month", "Year"],
    },
    {
      title: "Temperature Data",
      yLabel: "Temperature (C)",
      yLabelTicks: [0, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      xLabel: ["Hour", "Day", "Week", "Month", "Year"],
    },
    {
      title: "Atmospheric-Pressure Data",
      yLabel: "Atmospheric pressure (Mb)",
      xLabel: ["Hour", "Day", "Week", "Month", "Year"],
    },
  ];

  const timeTypeToPapa = (data) => {
    setTimeTypeText(data);
  };
  // useEffect(() => {
  //   console.log(timeTypeText);
  // }, [timeTypeText]);

  return samples ? (
    <VStack fill center>
      <HStack center fill spacing={30}>
        <View>
          <Text variant="h3" style={styles.headLine}>Last</Text>
        </View>
        <View>
          <DropDown state={timeTypeText} timeTypeToPapa={timeTypeToPapa} />
        </View>
        <View>
          <Text variant="h3" style={styles.headLine}>Data</Text>
        </View>
      </HStack>
      <VStack fill center spacing={10}>
        <HStack fill center ml={50}>
          <Chart xLabel={timeTypeText} data={samples} />
        </HStack>
      </VStack>
      <VStack fill center spacing={1}></VStack>
    </VStack>
  ) : (
    <Text>Loser</Text>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.backColor },
  headLine: {color:Colors.mainColor}
});
