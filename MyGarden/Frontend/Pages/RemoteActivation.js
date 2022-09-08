import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
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
import * as Colors from "../Style/Colors"
import SysSwitches from "../Components/SysSwitches";
import moment from "moment";
import HomeBtn from "../Components/HomeBtn";



export default function RemoteActivation({ navigation }) {
  const mainColor = Colors.mainColor
  const backColor = Colors.backColor
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
    setTimeBtnTxt(moment(date.toLocaleTimeString() , "hhmm").format("HH:mm"));
    hideDatePicker();
  };

  const [remote, setRemote] = useState(new RemoteActive());
  const [finishingData, setFinishing] = useState();
  const [timeBtnTxt, setTimeBtnTxt] = useState("Pick Finish time");
  const [sysToActivate, setSysToActivate] = useState({
    Water: false,
    Light: false,
    Air: false,
    Fertilize: false
  });

  const dataChecker = (
    startingData,
    finishingData,
    sysToActivate
  ) => {
    debugger;
    if (finishingData === "" || finishingData === undefined) {
      alert("Please enter finish time");
      flag = false
    } else {
      remote.setStartingData(startingData);
      remote.setFinishingData(finishingData);
      remote.setSystemToActivate(sysToActivate);
      setRemote(remote);
      console.log(remote);
    }
  };

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
      <HStack>
        <PageHead first="Remote" second="Activation" />
      </HStack>
      <HStack fill center spacing={2}>
      <HomeBtn title={timeBtnTxt} onPress={showDatePicker} height="35%" width="50%"/>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </HStack>
      <HStack fill center>
        <SysSwitches state = {sysToActivate} onChange={(newState) => {setSysToActivate(newState)}}/>
      </HStack>
      <HStack fill center spacing={2}>
      <HomeBtn title={"Activate!"} onPress={() => {
            dataChecker(
              new Date(),
              finishingData,
              sysToActivate
            );
            if(flag){
              setTimeBtnTxt("Pick Finish time");
              navigation.navigate("Home");
            }
          }} height="35%" width="50%"/>
      </HStack>
      <HStack fill />
    </VStack>
  );
};



