import React, { useState, useEffect } from "react";
import { Stack, Button, Flex, Text, Spacer } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Wrap,
  Box,
  Divider,
  HStack,
  VStack,
  TextInput,
  Center,
} from "@react-native-material/core";
import { View, Image, StyleSheet } from "react-native";
import PageHead from "../Components/PageHead";
import * as Colors from "../Style/Colors";
import DaysPicker from "../Components/DaysPicker";

export default function ScheduleActivation({ navigation }) {
  const [daysToActivate, setDaysToActivate] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });

  useEffect(() => {
    console.log(daysToActivate);
  }, [daysToActivate])
  

  return (
    <VStack fill spacing={1} style={{ backgroundColor: Colors.backColor }}>
      <HStack fill center>
        <PageHead first="Schedule" second="Activation" />
      </HStack>
      <DaysPicker state = {daysToActivate} onChange = {(newState) => {setDaysToActivate(newState)}}/>
      <Spacer fill />
      <HStack fill>

      </HStack>
    </VStack>
  );
}

{
  /* <HStack  > 
  <Flex direction="column">
    <Greetings/>
    </Flex>
  </HStack>
  <HStack>
  <Text variant="h6" style={{ marginTop: 90}}
     >
    Schedule
    </Text>
    <Text variant="h6" color="aquamarine"
    style={{ marginTop: 90}}
    
     >
     Activtion    
     </Text> 
     </HStack>
    <VStack fill center spacing={2}>

    <DropdownDay/>

    </VStack>
   <VStack fill center spacing={20}>
     <Dropdown />
   <TextInput
      label="Starting Time"
      leading={props => <Icon name="clock-plus-outline" {...props} />}
      
    />
     <TextInput
      label="Finishing time"
      leading={props => <Icon name="clock-plus-outline" {...props} />}
      
    />



    
     <Button
      style={{
         maxWidth: "50%",
          maxHeight: "20%",
          minWidth: "5%",
          minHeight: "5%",
          marginTop:"3%"
      }}
      color="aquamarine"
      witch
      title="Schedule"
      leading={props => <Icon name="calendar-month" {...props} />}
    />
     
    </VStack>
 */
}
