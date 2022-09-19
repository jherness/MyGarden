import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import datajson from "../assets/data.json";

import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";

export default function Chart(props) {
  const lable = props.lable;
  console.log(props.lable + " Chart");

  return (
    <View>
      {/* <VictoryChart
        width={450}
        theme={VictoryTheme.material}
        domainPadding={{ x: 40 }}
      >
        <VictoryLine
          interpolation="natural"
          data={datajson}
          x="date"
          y="dataType"
          style={styles}
        />
        <VictoryAxis
          label={lable}
          style={{
            axisLabel: { padding: 30 },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axisLabel: { padding: 40 },
          }}
        />
      </VictoryChart> */}
            <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={datajson}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  data: { stroke: "#2C6700" },
  parent: { border: "1px solid #ccc" },
});

//;
