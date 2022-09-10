import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {
  Wrap,
  Box,
  Divider,
  HStack,
  VStack,
  TextInput,
  ListItem,
  Spacer,
} from "@react-native-material/core";
import PageHead from "../Components/PageHead.jsx";
import Timeline from "react-native-beautiful-timeline";

export default function ActivationHistory({ navigate }) {
  const [activations, setActivations] = useState([]);
  const [timelineData, setTimelineData] = useState([]);

  const getActivations = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.192:3000/activationHistory`
      );
      const data = await response.json();
      setActivations(data);
    } catch (err) {
      console.log(error);
    }
  };

  const formatTimeline = () => {
    let newest = activations.map((act) => {
      // let timestamp = new Date(act.dateTime_of_activation).valueOf()
      return  {
        "date": new Date(act.dateTime_of_activation).valueOf(),
        "data": [
          {
            "title": "Activate",
            "subtitle": act.activation_reason,
            "date": new Date(act.dateTime_of_activation).valueOf()
          },
          {
            "title": "Ended",
            "subtitle": act.finish_hour,
            "date": new Date(act.dateTime_of_activation).valueOf()
          }
        ]
      }
    })
    return newest;
  };

  useEffect(() => {
    getActivations();
    setTimelineData(formatTimeline())
    //get data from DB every 60 seconds
    const interval = setInterval(() => {
      getActivations();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: "#E5E4D7" }}>
      <HStack fill style={{marginTop: "0%"}}>
        <Timeline data={timelineData} />
      </HStack>
    </VStack>
  );
}
