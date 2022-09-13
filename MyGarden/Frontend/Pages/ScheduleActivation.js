import React, { useState, useEffect } from "react";
import { HStack, VStack, Button } from "@react-native-material/core";
import { Text } from "react-native";
import PageHead from "../Components/PageHead";
import * as Colors from "../Style/Colors";
import DaysPicker from "../Components/DaysPicker";
import SysSwitches from "../Components/SysSwitches";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import HomeBtn from "../Components/HomeBtn";
import moment from "moment/moment";
import Slider from "react-native-slider";
import { ScheduleActive } from "../Classes/ScheduleActive";
import { scheduleChecker } from "../Modules/ScheduleActivationModules";
import { postToDb } from "../Modules/posts";
import { getScheduleActivation } from "../Modules/gets";

export default function ScheduleActivation({ navigation }) {
  const [sysToActivate, setSysToActivate] = useState([]);
  const [daysToActivate, setDaysToActivate] = useState([]);
  const [startTime, setStartTime] = useState(new Date());
  const [timeToLive, setTimeToLive] = useState(1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [timeBtnTxt, setTimeBtnTxt] = useState("");
  const [newSchedule, setNewSchedule] = useState(new ScheduleActive());

  useEffect(() => {
    getScheduleActivation(
      setStartTime,
      setTimeToLive,
      setDaysToActivate,
      setSysToActivate,
      setTimeBtnTxt
    );
    console.log(startTime);
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formatDatetime = moment(date).format("HH:mm:ss");
    setStartTime(formatDatetime);
    setTimeBtnTxt(moment(date.toLocaleTimeString(), "hhmm").format("HH:mm"));
    hideDatePicker();
  };

  const handleNewSchedule = () => {
    scheduleChecker(
      setNewSchedule,
      startTime,
      timeToLive,
      daysToActivate,
      sysToActivate
    );
    if (JSON.stringify(newSchedule) !== "{}") {
      postToDb(newSchedule, "scheduleActivation");
      navigation.navigate("Home");
    }
  };

  const handleReset = () => {
    newSchedule.setStartingTime("00:00:01");
    newSchedule.setTimeToLive(1);
    newSchedule.setWeekSchedule({
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    });
    newSchedule.setSystemToActivate({
      air_sys: false,
      water_sys: false,
      light_sys: false,
      fertelize_sys: false,
    });
    postToDb(newSchedule, "scheduleActivation");
    navigation.navigate("Home");
  };

  const daysToPapa = (data) => {
    setDaysToActivate(data);
  };

  const systemsToPapa = (data) => {
    setSysToActivate(data);
  };

  return (
    <VStack fill spacing={0} style={{ backgroundColor: Colors.backColor }}>
      <HStack fill center>
        <PageHead first = "Weekly" second="Schedule" />
      </HStack>
      <DaysPicker state={daysToActivate} daysToPapa={daysToPapa} />
      <HStack fill center>
        <SysSwitches state={sysToActivate} childToParent={systemsToPapa} />
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
          onValueChange={(value) => setTimeToLive(Math.round(value))}
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
        <HomeBtn
          style={{ paddingBottom: 20 }}
          title="RESET"
          onPress={handleReset}
          height="50%"
          width="40%"
        />
      </HStack>
    </VStack>
  );
}
