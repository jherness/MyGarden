import React, { useState, useEffect } from "react";
import { HStack, VStack } from "@react-native-material/core";
import Timeline from "react-native-beautiful-timeline";
import { getActivations } from "../Modules/gets";

export default function ActivationHistory({ navigate }) {
  const [activations, setActivations] = useState([]);

  useEffect(() => {
    getActivations(setActivations);
  }, []);

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: "#E5E4D7" }}>
      <HStack fill>
        <Timeline data={activations} />
      </HStack>
    </VStack>
  );
}
