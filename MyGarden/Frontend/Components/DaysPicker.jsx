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
        state={daysToActivate.sunday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                sunday: !prevState.sunday
              }
            )
          )
        }}
      />
      <DayPicker
        title="M"
        state={daysToActivate.monday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                monday: !prevState.monday
              }
            )
          )
        }}
      />
      <DayPicker
        title="T"
        state={daysToActivate.tuesday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                tuesday: !prevState.tuesday
              }
            )
          )
        }}
      />
      <DayPicker
        title="W"
        state={daysToActivate.wednesday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                wednesday: !prevState.wednesday
              }
            )
          )
        }}
      />
      <DayPicker
        title="T"
        state={daysToActivate.thursday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                thursday: !prevState.thursday
              }
            )
          )
        }}
      />
      <DayPicker
        title="F"
        state={daysToActivate.friday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                friday: !prevState.friday
              }
            )
          )
        }}
      />
      <DayPicker
        title="S"
        state={daysToActivate.saturday}
        onPress={() => {
          setDaysToActivate(
            (prevState) => (
              {
                ...prevState,
                saturday: !prevState.saturday
              }
            )
          )
        }}
      />
    </HStack>
  );
}

