import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import * as Colors from "../Style/Colors";
import datajson from "../assets/data.json";

import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import { VStack } from "@react-native-material/core";

export default function Chart(props) {
  const xLable = props.xLable;
  const yLable = props.yLable;
  const screenWidth = Dimensions.get("window").width;
  const strokeLinecap = "round";

  return (
    <VStack center fill >
      <VictoryChart
        width={screenWidth}
        theme={VictoryTheme.material}
        style={styles.mainChart}
        tickCount={24}
      >
        <VictoryLine
          interpolation="natural"
          data={datajson}
          x="date"
          y="dataType"
          style={styles.mainLine}
          animate={{
            duration: 2500,
            onLoad: { duration: 1500 },
          }}
        />
        <VictoryAxis
          label={xLable}
          tickCount={8}
          tickFormat={(t) => `${Math.round(t)}`}
          style={styles.xLable}
        />
        <VictoryAxis
          dependentAxis
          tickCount={11}
          tickFormat={(t) => `${Math.round(t)}Lm`}
          label={yLable}
          style={styles.yLable}
        />
      </VictoryChart>
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
  xLable: {
    axisLabel: { fontSize: 20, padding: 30 },
    tickLabels: {
      fill: Colors.mainColor,
    },
  },
  yLable: {
    axisLabel: { fontSize: 20, padding: 30 },
    grid: {
      stroke: Colors.activeBtn,
      strokeWidth: 1,
      pointerEvents: "painted",
    },
    tickLabels: {
      fill: Colors.mainColor,
    },
  },
});
