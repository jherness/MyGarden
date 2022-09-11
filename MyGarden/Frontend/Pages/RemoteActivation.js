import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import {
  Stack,
  Button,
  Flex,
  Text,
  Switch,
  Avatar,
} from "@react-native-material/core";
import {
  Wrap,
  Box,
  Divider,
  HStack,
  VStack,
  TextInput,
} from "@react-native-material/core";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PageHead from "../Components/PageHead";
import { RemoteActive } from "../Classes/RemoteActive";
import * as Colors from "../Style/Colors";
import SysSwitches from "../Components/SysSwitches";
import moment from "moment";
import HomeBtn from "../Components/HomeBtn";

export default function RemoteActivation({ navigation }) {
  const mainColor = Colors.mainColor;
  const backColor = Colors.backColor;
  let flag = true;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setFinishing(date);
    setTimeBtnTxt(moment(date.toLocaleTimeString(), "hhmm").format("HH:mm"));
    hideDatePicker();
  };

  const [remote, setRemote] = useState(new RemoteActive());
  const [finishingData, setFinishing] = useState();
  const [timeBtnTxt, setTimeBtnTxt] = useState("Pick Finish time");
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
      fertelize_sys: data[0].fertelize_sys === 1
    }
  }


  const [counter, setCounter] = useState(0);
  let s

  // Emmulate componentDidMount lifecycle
  React.useEffect(() => {
    getCurrentlyActiveRelays()

    s = setInterval(() => {
      setCounter(state => (state +1));
    }, 2000);
  }, []);

  // This is for counter state variable
  React.useEffect(() => {
    if (counter > 2) {
      clearInterval(s);
    }
  }, [counter]);





  const dataChecker = (startingData, finishingData, sysToActivate) => {
    debugger;
    if (finishingData === "" || finishingData === undefined) {
      alert("Please enter finish time");
      flag = false;
    } else {
      remote.setStartingData(startingData);
      remote.setFinishingData(finishingData);
      remote.setSystemToActivate(sysToActivate);
      setRemote(remote);
      console.log(remote);
    }
  };

  return (
    counter <= 2 ? <Text>Loading</Text> : <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
    <HStack>
      <PageHead first="Remote" second="Activation" />
    </HStack>
    <HStack fill center spacing={2}>
      <HomeBtn
        title={timeBtnTxt}
        onPress={showDatePicker}
        height="35%"
        width="50%"
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </HStack>
    <HStack fill center>
      <SysSwitches
        state={sysToActivate}
        onChange={(newState) => {
          setSysToActivate(newState);
        }}
      />
    </HStack>
    <HStack fill center spacing={2}>
      <HomeBtn
        title={"Activate!"}
        onPress={() => {
          dataChecker(new Date(), finishingData, sysToActivate);
          if (flag) {
            setTimeBtnTxt("Pick Finish time");
            navigation.navigate("Home");
          }
        }}
        height="35%"
        width="50%"
      />
    </HStack>
    <HStack fill />
  </VStack>
  );
}
