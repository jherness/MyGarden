import React, { useEffect, useState } from "react";
import { Flex, Spacer } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import { StyleSheet, ScrollView, FlatList, Text } from "react-native";
import * as Colors from "../Style/Colors";
import DropDown from "../Components/DropDown";
import Chart from "../Components/Chart";
import moment from "moment/moment";
import { getSamples } from "../Modules/gets";


export default function Analythics() {
  const [timeTypeText, setTimeTypeText] = useState("Hour");
  const [dataTypeText, setDataTypeText] = useState("lumens");
  const [samples, setSamples] = useState([]);

  const [hourAgo, setHourAgo] = useState(new Date(moment().subtract(1, "hour")));
  const [yesterday, setYesterday] = useState(new Date(moment().subtract(1, "day")));
  const [weekAgo, setWeekAgo] = useState(new Date(moment().subtract(1, "week")));
  const [monthAgo, setMonthAgo] = useState(new Date(moment().subtract(1, "month")));
  const [yearAgo, setYearAgo] = useState(new Date(moment().subtract(1, "year")));


  console.log(yearAgo);


  useEffect(() => {
    getSamples(setSamples)
    return () => {
      setSamples(prev => prev.reverse())
      samples.map((sample) => console.log(sample));
    }
  }, [])
  

  const flatlistData = [
    {
      title: "Light Data",
      yLabel: "Light (lumens)",
      yLabelTicks: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1500],
      xLabel: ["Hour", "Day", "Week", "Month", "Year"],
      xLabelText: {"Hour" : [moment().add(11, 'minutes').format('HH:mm'), ]}
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

  
  return samples? (
    <VStack fill center>
      <VStack fill center spacing={10}>
        <HStack fill center>
          <Chart xLabel={timeTypeText} yLabel={dataTypeText} data={samples}/>
        </HStack>
        <HStack center>
          <DropDown state={timeTypeText} timeTypeToPapa={timeTypeToPapa} />
        </HStack>
      </VStack>
      <VStack fill center spacing={1}></VStack>
    </VStack>
  ) : (
    <Text>Loser</Text>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.backColor },
});
