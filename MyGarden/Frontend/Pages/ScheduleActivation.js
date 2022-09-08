import React, { useState, useEffect } from "react";
import { Spacer } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import { StyleSheet, Text } from "react-native";
import PageHead from "../Components/PageHead";
import * as Colors from "../Style/Colors";
import DaysPicker from "../Components/DaysPicker";
import SysSwitches from "../Components/SysSwitches";

export default function ScheduleActivation({ navigation }) {
  const [sysToActivate, setSysToActivate] = useState({
    Water: false,
    Light: false,
    Air: false,
    Fertilize: false,
  });
  const [daysToActivate, setDaysToActivate] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });
  const [startTime, setStartTime] = useState();
  const [timeToLive, setTimeToLive] = useState();
  const [value, setValue] = useState(0);



  useEffect(() => {
    console.log(daysToActivate);
    console.log(sysToActivate);
  }, [daysToActivate, sysToActivate]);

  


  return (
    <VStack fill spacing={1} style={{ backgroundColor: Colors.backColor }}>
      <HStack fill center>
        <PageHead first="Schedule" second="Activation" />
      </HStack>
      <DaysPicker
        state={daysToActivate}
        onChange={(newState) => {
          setDaysToActivate(newState);
        }}
      />

      <HStack fill center>
        <SysSwitches
          state={sysToActivate}
          onChange={(newState) => {
            setSysToActivate(newState);
          }}
        />
      </HStack>
      <Spacer />
      <HStack fill center>
      </HStack>
      <HStack fill center>

      </HStack>
    </VStack>
  );
}
