import React, { useState, useEffect } from "react";
import { Spacer } from "@react-native-material/core";
import { HStack, VStack, Button } from "@react-native-material/core";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import { Box, Wrap } from "@react-native-material/core";
import PageHead from "../Components/PageHead";
import * as Colors from "../Style/Colors";
import DaysPicker from "../Components/DaysPicker";
import SysSwitches from "../Components/SysSwitches";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import HomeBtn from "../Components/HomeBtn";
import moment from "moment/moment";
import Slider from "react-native-slider";
import { ScheduleActive } from "../Classes/ScheduleActive";
import { putScheduleActivation } from "../Modules/GlobalModule";

export default function ScheduleActivation({ navigation }) {
  const [sysToActivate, setSysToActivate] = useState({
    Water: false,
    Light: false,
    Air: false,
    Fertilize: false,
  });
  const [daysToActivate, setDaysToActivate] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });
  const [startTime, setStartTime] = useState(new Date());
  const [timeToLive, setTimeToLive] = useState(0.2);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [timeBtnTxt, setTimeBtnTxt] = useState("Enter Start Time");
  const [newSchedule, setNewSchedule] = useState(new ScheduleActive());


  useEffect(() => {
    newSchedule.setStartingTime(startTime.toLocaleTimeString());
    newSchedule.setSystemToActivate(sysToActivate);
    newSchedule.setTimeToLive(Math.round(timeToLive));
    newSchedule.setWeekSchedule(daysToActivate);
  }, [timeToLive, sysToActivate, daysToActivate, startTime]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setStartTime(date);
    setTimeBtnTxt(moment(date.toLocaleTimeString(), "hhmm").format("HH:mm"));
    hideDatePicker();
  };

  const handleNewSchedule = () => {
    // putScheduleActivation(newSchedule)
    navigation.navigate("Home");
  };
  return (
    <VStack fill spacing={0} style={{ backgroundColor: Colors.backColor }}>
      <HStack fill center>
        <PageHead first="Schedule" />
      </HStack>
      <DaysPicker
        state={daysToActivate}
        onChange={(newState) => {
          setDaysToActivate(newState);
        }}
      />
      <HStack fill center>
        <SysSwitches
          state={sysToActivate}
          onChange={(newState) => {
            setSysToActivate(newState);
          }}
        />
      </HStack>
      <HStack fill center>
        <HomeBtn
          title={timeBtnTxt}
          onPress={showDatePicker}
          height="45%"
          width="55%"
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </HStack>
      <HStack
        center
        fill
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: Colors.mainColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Math.round(timeToLive) == 1
            ? Math.round(timeToLive) + " Minute"
            : Math.round(timeToLive) + " Minutes"}
        </Text>
      </HStack>
      <HStack center fill spacing={10}>
        <Slider
          minimumValue={1}
          maximumValue={120}
          style={{ marginBottom: 50, width: "85%" }}
          value={timeToLive}
          onValueChange={(value) => setTimeToLive(value)}
        />
      </HStack>
      <HStack style={{ paddingBottom: 20 }} fill center>
        <HomeBtn
          style={{ paddingBottom: 20 }}
          title="SAVE"
          onPress={handleNewSchedule}
          height="50%"
          width="40%"
        />
      </HStack>
    </VStack>
  );
}
