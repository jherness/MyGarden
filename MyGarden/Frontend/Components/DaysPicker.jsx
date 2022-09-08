import { View, Text } from "react-native";
import React, { useState } from "react";
import DayPicker from "./DayPicker";
import { Box, HStack } from "@react-native-material/core";

export default function DaysPicker() {
  const [daysToActivate, setDaysToActivate] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });

  return (
    <HStack center fill>
      <DayPicker
        title="S"
        state={daysToActivate.Sunday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                Monday: !prevState.Monday,
              },
              () => console.log(daysToActivate)
            )
          );
        }}
      />
      <DayPicker
        title="M"
        state={daysToActivate.Monday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                Monday: !prevState.Monday,
              },
              () => console.log(daysToActivate)
            )
          );
        }}
      />
      <DayPicker
        title="T"
        state={daysToActivate.Tuesday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                Tuesday: !prevState.Tuesday,
              },
              () => console.log(daysToActivate)
            )
          );
        }}
      />
      <DayPicker
        title="W"
        state={daysToActivate.Wednesday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                Wednesday: !prevState.Wednesday,
              },
              () => console.log(daysToActivate)
            )
          );
        }}
      />
      <DayPicker
        title="T"
        state={daysToActivate.Thursday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                Thursday: !prevState.Thursday,
              },
              () => console.log(daysToActivate)
            )
          );
        }}
      />
      <DayPicker
        title="F"
        state={daysToActivate.Friday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                Friday: !prevState.Friday,
              },
              () => console.log(daysToActivate)
            )
          );
        }}
      />
      <DayPicker
        title="S"
        state={daysToActivate.Saturday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                Saturday: !prevState.Saturday,
              },
              () => console.log(daysToActivate)
            )
          );
        }}
      />
    </HStack>
  );
}
{
  /*
   */
}
