import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import {
  Stack,
  Button,
  Flex,
  Text,
  Switch,
  Avatar,
  Spacer,
} from "@react-native-material/core";
import {
  Wrap,
  Box,
  Divider,
  HStack,
  VStack,
  TextInput,
} from "@react-native-material/core";
import PageHead from "../Components/PageHead";
import { RemoteActive } from "../Classes/RemoteActive";
import * as Colors from "../Style/Colors";
import SysSwitches from "../Components/SysSwitches";
import moment from "moment";
import HomeBtn from "../Components/HomeBtn";
import Spinner from "react-native-loading-spinner-overlay";
import Slider from "react-native-slider";

export default function RemoteActivation({ navigation }) {
  const mainColor = Colors.mainColor;
  const backColor = Colors.backColor;

  const [remote, setRemote] = useState(new RemoteActive());
  const [finishingData, setFinishing] = useState(1);
  const [sysToActivate, setSysToActivate] = useState([]);

  const getCurrentlyActiveRelays = async () => {
    try {
      const response = await fetch(`http://192.168.1.192:3000/currentlyActive`);
      const data = await response.json();
      setSysToActivate(dataFormatter(data));
    } catch (err) {
      console.log(error);
    }
  };

  const dataFormatter = (data) => {
    return {
      air_sys: data[0].air_sys === 1,
      water_sys: data[0].water_sys === 1,
      light_sys: data[0].light_sys === 1,
      fertelize_sys: data[0].fertelize_sys === 1,
    };
  };

  const [counter, setCounter] = useState(0);
  // Emmulate componentDidMount lifecycle
  React.useEffect(() => {
    getCurrentlyActiveRelays();

    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const dataChecker = (startingData, finishingData, sysToActivate) => {
    debugger;
    if (finishingData === "" || finishingData === undefined) {
      alert("Please enter finish time");
    } else {
      remote.setStartingData(startingData);
      remote.setFinishingData(Math.round(finishingData));
      remote.setSystemToActivate(sysToActivate);
      setRemote(remote);
      console.log(remote);
    }
  };
  const childToParent = (data) => {
    setSysToActivate(data);
  };

  return counter < 1 ? (
    <Spinner
      visible={true}
      textContent={"Loading..."}
      textStyle={{ color: "#FFF" }}
    />
  ) : (
    <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
      <HStack fill center>
        <PageHead first="Remote" second="Activation" />
      </HStack>
      <Spacer fill />
      <HStack fill center>
        <SysSwitches state={sysToActivate} childToParent={childToParent} />
      </HStack>
      <HStack fill center>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: Colors.mainColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Math.round(finishingData) == 1
            ? Math.round(finishingData) + " Minute"
            : Math.round(finishingData) + " Minutes"}
        </Text>
      </HStack>
      <HStack fill center>
        <Slider
          minimumValue={1}
          maximumValue={120}
          style={{ marginBottom: 50, width: "85%" }}
          value={finishingData}
          onValueChange={(value) => setFinishing(value)}
        />
      </HStack>
      <HStack fill center spacing={2}>
        <HomeBtn
          title={"Activate!"}
          onPress={() => {
            dataChecker(new Date(), finishingData, sysToActivate);
            navigation.navigate("Home");
          }}
          height="35%"
          width="50%"
        />
      </HStack>
      <HStack fill />
    </VStack>
  );
}
