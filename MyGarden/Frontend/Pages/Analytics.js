import React, { useEffect, useState } from "react";
import { Text } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import { FlatList, ScrollView, View } from "react-native";
import { getSamples } from "../Modules/gets";
import { flatlistData, header, renderItem } from "../Modules/AnalyticsModules";
import moment from "moment/moment";

export default function Analythics() {
  const [timeTypeText, setTimeTypeText] = useState("Hour");
  const [allSamples, setAllSamples] = useState([]);
  const [samples, setSamples] = useState([]);
  const [startDate, setStartDate] = useState(
    moment().subtract(1, timeTypeText.toLowerCase())
  );

  console.log();

  useEffect(() => {
    getSamples(setAllSamples);
  }, []);

  useEffect(() => {
    setSamples(getAppropriateSamples);
  }, [allSamples]);

  useEffect(() => {
    setStartDate(moment().subtract(1, timeTypeText.toLowerCase()));
  }, [timeTypeText]);

  useEffect(() => {
    setSamples(getAppropriateSamples);
  }, [startDate]);

  const getAppropriateSamples = () => {
    return allSamples.filter(checkSample).reverse();
  };

  const checkSample = (sample) => {
    return moment(sample.dt_of_sample) >= startDate;
  };

  const timeTypeToPapa = (data) => {
    setTimeTypeText(data);
  };

  return samples ? (
    <>
        <FlatList
          keyExtractor={(item) => item.dataKey}
          ListHeaderComponent={header(timeTypeText, timeTypeToPapa)}
          data={flatlistData(timeTypeText, samples)}
          renderItem={renderItem}
        />
    </>
  ) : (
    <Text>Loser</Text>
  );
}
