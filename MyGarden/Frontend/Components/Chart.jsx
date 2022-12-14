import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import { Flex, HStack, Spacer, Text } from "@react-native-material/core";
import React, { useState, useEffect } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import * as Colors from "../Style/Colors";

import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import { VStack } from "@react-native-material/core";
import { measurementUnit, xTicksFormat } from "../Modules/AnalyticsModules";

export default function Chart(props) {
  const screenWidth = Dimensions.get("screen").width * 0.97;
  const datajson = props.samples;
  const dataName = props.dataName;
  const timeName = props.timeName;
  const dataKey = props.dataKey;
  const [iconName, setIconName] = useState();

  const hazardZone = ({ tick }, dataName) => {
    let res;
    switch (dataName) {
      case "Light":
        res = tick >= 7000 ? Colors.activeBtn : Colors.mainColor;
        setIconName("lightbulb")
        break;
      case "Humidity":
        res = tick >= 80 ? Colors.activeBtn : Colors.mainColor;
        setIconName("hand-holding-water")
        break;
      case "Temperature":
        res = tick >= 30 ? Colors.activeBtn : Colors.mainColor;
        setIconName("temperature-low")
        break;
      case "Air Pressure":
        res = tick >= 1025 || tick <= 990 ? Colors.activeBtn : Colors.mainColor;
        setIconName("wind")
        break;
    }
    return res;
  };

  return (
    <VStack
      fill
      center
      spacing={-20}
      borderBottom={`2px solid ${Colors.mainColor}`}
    >
      <HStack fill center spacing={10} style = {{paddingTop: 30}}>
      < FontAwesome5 name={iconName} size={24} color={Colors.mainColor}/>
        <Text
          variant="h5"
          color={Colors.mainColor}
          style={{ fontWeight: "bold"}}
        >
          Last {timeName} {dataName} Data
        </Text>
      </HStack>
      <HStack fill center>
        <VictoryChart
          width={screenWidth}
          theme={VictoryTheme.material}
          style={styles.mainChart}
          domainPadding={{ y: 50 }}
          padding={{top: 80, bottom: 60, left: 60, right: 40}}
        >
          <VictoryLine
            interpolation="catmullRom"
            data={datajson}
            x="dt_of_sample"
            y={dataKey}
            style={styles.mainLine}
            animate={{
              duration: 2500,
              onLoad: { duration: 1500 },
            }}
          />
          <VictoryAxis
            fixLabelOverlap={true}
            tickFormat={xTicksFormat(timeName)}
            style={styles.xLabel}
          />
          <VictoryAxis
            dependentAxis
            fixLabelOverlap={true}
            tickFormat={(t) => `${Math.round(t)}${measurementUnit(dataName)}`}
            style={{
              ...styles.yLabel,
              grid: {
                stroke: ({ tick }) => hazardZone({ tick }, dataName),
              },
            }}
          />
        </VictoryChart>
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  mainChart: {
    grid: {
      fill: Colors.activeBtn,
      stroke: Colors.activeBtn,
      pointerEvents: "painted",
    },
  },
  mainLine: {
    data: { stroke: Colors.mainColor },
    parent: {
      border: `1px solid ${Colors.mainColor}`,
    },
  },
  xLabel: {
    axisLabel: { fontSize: 20, padding: 30 },
    tickLabels: {
      fill: Colors.mainColor,
    },
  },
  yLabel: {
    axisLabel: { fontSize: 20, padding: 30 },
    grid: {
      strokeWidth : 5,
      pointerEvents: "painted",
    },
    ticks:{
      
    },
    tickLabels: {
      fill: Colors.mainColor,
      padding: 2,
    },
  },
});

// stroke: ({ tick }) => (tick > 450 ? "red" : "grey"),
