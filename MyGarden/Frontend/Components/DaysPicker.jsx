import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import DayPicker from "./DayPicker";
import { Box, HStack } from "@react-native-material/core";

export default function DaysPicker(props) {
  const daysToPapa = props.daysToPapa;

  const daysToGrandpa = (data, day) => {
    switch (day) {
      case "sunday":
        daysToPapa((prev) => ({ ...prev, sunday: !prev.sunday }));
        console.log("sunday");

        break;
      case "monday":
        daysToPapa((prev) => ({ ...prev, monday: !prev.monday }));
        console.log("monday");

        break;
      case "tuesday":
        daysToPapa((prev) => ({ ...prev, tuesday: !prev.tuesday }));
        console.log("tuesday");

        break;
      case "wednesday":
        daysToPapa((prev) => ({ ...prev, wednesday: !prev.wednesday }));
        console.log("wednesday");

        break;
      case "thursday":
        daysToPapa((prev) => ({ ...prev, thursday: !prev.thursday }));
        console.log("thursday");

        break;
      case "friday":
        daysToPapa((prev) => ({ ...prev, friday: !prev.friday }));
        console.log("friday");

        break;
      case "saturday":
        daysToPapa((prev) => ({ ...prev, saturday: !prev.saturday }));
        console.log("saturday");

        break;
    }
  };

  return (
    <HStack center fill>
      <DayPicker
        title="S"
        name="sunday"
        state={props.state.sunday}
        daysToGrandpa={daysToGrandpa}
      />
      <DayPicker
        title="M"
        name="monday"
        state={props.state.monday}
        daysToGrandpa={daysToGrandpa}
      />
      <DayPicker
        title="T"
        name="tuesday"
        state={props.state.tuesday}
        daysToGrandpa={daysToGrandpa}
      />
      <DayPicker
        title="W"
        name="wednesday"
        state={props.state.wednesday}
        daysToGrandpa={daysToGrandpa}
      />
      <DayPicker
        title="T"
        name="thursday"
        state={props.state.thursday}
        daysToGrandpa={daysToGrandpa}
      />
      <DayPicker
        title="F"
        name="friday"
        state={props.state.friday}
        daysToGrandpa={daysToGrandpa}
      />
      <DayPicker
        title="S"
        name="saturday"
        state={props.state.saturday}
        daysToGrandpa={daysToGrandpa}
      />
    </HStack>
  );
}
