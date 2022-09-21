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
    console.log(flatlistData[0]);
  }, []);

  const flatlistData = [
    {
      timeName: timeTypeText,
      samples: samples,
      dataKey: "key2",
      dataName: "Light",
    },
    {
      timeName: timeTypeText,
      samples: samples,
      dataKey: "key3",
      dataName: "Humidity",
    },
    {
      timeName: timeTypeText,
      samples: samples,
      dataKey: "key4",
      dataName: "Temperature",
    },
    {
      timeName: timeTypeText,
      samples: samples,
      dataKey: "key5",
      dataName: "Air Pressure",
    },
  ];

  const Item = ({ timeName, samples, dataKey, dataName }) => (
    <View>
      <Chart
        timeName={timeName}
        samples={samples}
        dataKey={dataKey}
        dataName={dataName}
      />
    </View>
  );
  const renderItem = ({ item }) => (
    <Item
      timeName={item.timeName}
      samples={item.samples}
      dataKey={item.dataKey}
      dataName={item.dataName}
    />
  );

  const timeTypeToPapa = (data) => {
    setTimeTypeText(data);
  };

  return samples ? (
    <View>
      <DropDown state={timeTypeText} timeTypeToPapa={timeTypeToPapa} />
      <FlatList
        data={flatlistData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_of_sample}
      />
    </View>
  ) : (
    <Text>Loser</Text>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.backColor },
  headLine: { color: Colors.mainColor },
});
