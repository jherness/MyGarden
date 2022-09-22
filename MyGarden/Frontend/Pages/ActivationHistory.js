import React, { useState, useEffect } from "react";
import { HStack, VStack } from "@react-native-material/core";
import Timeline from "react-native-beautiful-timeline";
import { getActivations } from "../Modules/gets";

export default function ActivationHistory({ navigate }) {
  const [activations, setActivations] = useState([]);


  useEffect(() => {
    getActivations(setActivations);
    //get data from DB every 60 seconds
    const interval = setInterval(() => {
      getActivations(setActivations);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: "#E5E4D7" }}>
      <HStack fill style={{ marginTop: "0%" }}>
        <Timeline data={activations} />
      </HStack>
    </VStack>
  );
}
