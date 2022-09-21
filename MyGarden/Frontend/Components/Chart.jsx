import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import { Flex, HStack, Spacer, Text } from "@react-native-material/core";
import React, { useState, useEffect } from "react";
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


  return (
    <VStack fill center>
      <HStack fill center>
        <Text variant="h5">
          Last {timeName} {dataName} Data
        </Text>
      </HStack>
      <HStack fill center>
        <VictoryChart
          width={screenWidth}
          theme={VictoryTheme.material}
          style={styles.mainChart}
          domainPadding={{ y: 50 }}
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
            tickFormat={(t) => `${Math.round(t)}${measurementUnit(dataName)}`}
            style={styles.yLabel}
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
      strokeWidth: 1,
      pointerEvents: "painted",
      stroke: ({ tick }) => (tick > 450 ? "red" : "grey"),
    },
    tickLabels: {
      fill: Colors.mainColor,
      padding: 2,
    },
  },
});
