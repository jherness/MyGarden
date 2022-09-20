import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import * as Colors from "../Style/Colors";
import moment from "moment/moment";

import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import { VStack } from "@react-native-material/core";

export default function Chart(props) {
  const xLabel = props.xLabel;
  const yLabel = props.yLabel;
  const screenWidth = Dimensions.get("screen").width;
  const datajson = props.data;
  const dataName = props.dataName

  return (
    <View>
      <VictoryChart
        width={screenWidth}
        theme={VictoryTheme.material}
        style={styles.mainChart}
        
      >
        <VictoryLine
          interpolation="natural"
          data={datajson}
          x="dt_of_sample"
          y="key2"
          style={styles.mainLine}
          animate={{
            duration: 2500,
            onLoad: { duration: 1500 },
          }}
        />
        <VictoryAxis
          fixLabelOverlap = {true}
          tickFormat={(t) => `${moment(t).format("HH:mm")}`}
          style={styles.xLabel}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(t) => `${Math.round(t)}Lm`}
          style={styles.yLabel}
        />
      </VictoryChart>
    </View>
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
      padding:2,

    },
  },
});
