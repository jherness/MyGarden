import { View, Text } from "react-native";
import React, { useState } from "react";
import DayPicker from "./DayPicker";
import { Box, HStack } from "@react-native-material/core";

export default function DaysPicker() {
  const [sundayBtn, setSundayBtn] = useState(false);
  const [mondayBtn, setMondayBtn] = useState(false);
  const [tuesdayBtn, setTuesdayBtn] = useState(false);
  const [wednesdayBtn, setWednesdayBtn] = useState(false);
  const [thursdayBtn, setThursdayBtn] = useState(false);
  const [fridayBtn, setFridayBtn] = useState(false);
  const [saturdayBtn, setSaturdayBtn] = useState(false);
  const [daysToActivate, setDaysToActivate] = useState({
    "Sunday": false,
    "Monday": false,
    "Tuesday": false,
    "Wednesday": false,
    "Thursday": false,
    "Friday": false,
    "Saturday": false,
  });

  return (
    <HStack center fill>
      <DayPicker
        title="S"
        state={daysToActivate["Sunday"]}
        onPress={() => {
          setDaysToActivate({
            ...this.daysToActivate,
            "Sunday": !daysToActivate["Sunday"],
          });
          console.log(daysToActivate);
        }}
      />
      <DayPicker
        title="M"
        state={mondayBtn}
        onPress={() => {
          setDaysToActivate({
            ...this.daysToActivate,
            "Monday": !daysToActivate["Monday"],
          });
          console.log(daysToActivate);
        }}
      />
      <DayPicker
        title="T"
        state={tuesdayBtn}
        onPress={() => {
          setTuesdayBtn(!tuesdayBtn);
        }}
      />
      <DayPicker
        title="W"
        state={wednesdayBtn}
        onPress={() => {
          setWednesdayBtn(!wednesdayBtn);
        }}
      />
      <DayPicker
        title="T"
        state={thursdayBtn}
        onPress={() => {
          setThursdayBtn(!thursdayBtn);
        }}
      />
      <DayPicker
        title="F"
        state={fridayBtn}
        onPress={() => {
          setFridayBtn(!fridayBtn);
        }}
      />
      <DayPicker
        title="S"
        state={saturdayBtn}
        onPress={() => {
          setSaturdayBtn(!saturdayBtn);
        }}
      />
    </HStack>
  );
}
{
  /*
   */
}
