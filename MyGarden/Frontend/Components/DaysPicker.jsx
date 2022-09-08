import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import DayPicker from "./DayPicker";
import { Box, HStack } from "@react-native-material/core";

export default function DaysPicker(props) {
  const [daysToActivate, setDaysToActivate] = useState(props.state);
  const setState = props.onChange

  useEffect(() => {
    setState(daysToActivate)
  }, [daysToActivate])
  
  
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
                Sunday: !prevState.Sunday
              }
            )
          )
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
                Monday: !prevState.Monday
              }
            )
          )
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
                Tuesday: !prevState.Tuesday
              }
            )
          )
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
                Wednesday: !prevState.Wednesday
              }
            )
          )
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
                Thursday: !prevState.Thursday
              }
            )
          )
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
                Friday: !prevState.Friday
              }
            )
          )
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
                Saturday: !prevState.Saturday
              }
            )
          )
        }}
      />
    </HStack>
  );
}

