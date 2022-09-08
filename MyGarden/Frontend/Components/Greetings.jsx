import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { getUser, getHeadlineText, getSamplesFromDB } from "../Modules/GlobalModule";
import { Stack, Button, Flex, Text } from "@react-native-material/core";
import Temprature from "../Modules/getWheather";
import { mainColor } from "../Style/Colors";
export default function Greetings() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [user, setUser] = useState(getUser().getFullName());

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
        <Text variant="h4">{user}</Text>
      </View>
      <Temprature />
    </View>
  );
}
