import React, { useEffect, useState } from "react";
import { Text } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import { FlatList, ScrollView, View } from "react-native";
import { getMostCommonActivationReason, getSamples } from "../Modules/gets";
import { flatlistData, header, footer, renderItem, getSamplesByTime } from "../Modules/AnalyticsModules";
import moment from "moment/moment";

export default function Analythics() {
  const [timeTypeText, setTimeTypeText] = useState("Hour"); //
  const [allSamples, setAllSamples] = useState([]);
  const [samples, setSamples] = useState([]);
  const [hourSamples, setHourSamples] = useState([]);
  const [daySamples, setDaySamples] = useState([]);
  const [weekSamples, setWeekSamples] = useState([]);
  const [mostCommon, setMostCommon] = useState([]);
  const [hourAgo, setHourAgo] = useState(moment().subtract(1, "hour"));
  const [dayAgo, setDayAgo] = useState(moment().subtract(1, "day"));
  const [weekAgo, setWeekAgo] = useState(moment().subtract(1, "week"));



  /*getting the last month samples*/
  useEffect(() => {
    getSamples(setAllSamples);
    getMostCommonActivationReason(setMostCommon);
  }, []);

  useEffect(() => {
    setSamples(getHourSamples)
    setHourSamples(getHourSamples);
    setDaySamples(getDaySamples);
    setWeekSamples(getWeekSamples);
  }, [allSamples]);

  // useEffect(() => {

  // }, [hourSamples, daySamples, weekSamples]);

  useEffect(() => {
    getAppropriateSamples()
  }, [timeTypeText]);


  const getAppropriateSamples = () => {
    if (timeTypeText === "Hour") setSamples(hourSamples);
    if (timeTypeText === "Day") setSamples(daySamples);
    if (timeTypeText === "Week") setSamples(weekSamples);
    if (timeTypeText === "Month") setSamples(allSamples);
  };

  const getHourSamples = () => {
    return getSamplesByTime(allSamples, hourAgo)
  };

  const getDaySamples = () => {
    return getSamplesByTime(allSamples, dayAgo)
  };

  const getWeekSamples = () => {
    return getSamplesByTime(allSamples, weekAgo)
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
        ListFooterComponent={footer(mostCommon)}
      />
    </>
  ) : (
    <Text>Loading</Text>
  );
}
