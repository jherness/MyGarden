import React, { useState, useEffect } from "react";
import { HStack, VStack } from "@react-native-material/core";
import Timeline from "react-native-beautiful-timeline";
import { getActivations } from "../Modules/gets";
import * as Colors from '../Style/Colors'

export default function ActivationHistory({ navigate }) {
  const [activations, setActivations] = useState([]);

  useEffect(() => {
    getActivations(setActivations);
  }, []);

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: Colors.backColor }}>
      <HStack fill>
        <Timeline backgroundColor={Colors.backColor} data={activations} />
      </HStack>
    </VStack>
  );
}
