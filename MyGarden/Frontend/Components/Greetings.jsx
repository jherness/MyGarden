import { View } from "react-native";
import React, { useEffect, useState } from "react";
import {getHeadlineText } from "../Modules/GlobalModule";
import { Stack, Button, Flex, Text } from "@react-native-material/core";
import Temprature from "../Modules/getWheather";
import { mainColor } from "../Style/Colors";
export default function Greetings() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [currentTime.getSeconds()]);

  return (
    <View>
      <View style={{ marginRight: "15%", marginTop: "10%" }}>
        <Text
          variant="h3"
          color = {mainColor}
        >
          {getHeadlineText(currentTime)}
        </Text>
      </View>
      <Temprature />
    </View>
  );
}
