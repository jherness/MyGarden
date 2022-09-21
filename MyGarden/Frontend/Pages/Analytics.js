import React, { useEffect, useState } from "react";
import { Text } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import { FlatList } from "react-native";
import { getSamples } from "../Modules/gets";
import { flatlistData, header, renderItem } from "../Modules/AnalyticsModules";

export default function Analythics() {
  const [timeTypeText, setTimeTypeText] = useState("Hour");
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    getSamples(setSamples);
  }, []);

  const timeTypeToPapa = (data) => {
    setTimeTypeText(data);
  };

  return samples ? (
    <VStack fill>
      <FlatList
        keyExtractor={(item) => item.dataKey}
        ListHeaderComponent={header(timeTypeText, timeTypeToPapa)}
        data={flatlistData(timeTypeText, samples)}
        renderItem={renderItem}
      />
    </VStack>
  ) : (
    <Text>Loser</Text>
  );
}
