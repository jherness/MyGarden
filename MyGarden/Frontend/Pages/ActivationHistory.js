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
} from "@react-native-material/core";
import PageHead from "../Components/PageHead.jsx";
import { getActivations } from "../Modules/GlobalModule.js";
import { List } from "react-native-paper";
import Timeline from "react-native-timeline-flatlist";

export default function ActivationHistory({ navigate }) {
  const [activations, setActivations] = useState([]);
  const [timeline, setTimeline] = useState([]);

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

  useEffect(() => {
    getActivations();
    //get data from DB every 60 seconds
    const interval = (setInterval(() => {
      getActivations();
    }, 60000));

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: "#E5E4D7" }}>
      <HStack fill center spacing={1}>
        <PageHead first="Activation" second="History" />
      </HStack>
      <HStack fill center>
        <Timeline data={activations} />
      </HStack>
    </VStack>
  );
}
