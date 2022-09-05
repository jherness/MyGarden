import React from "react";
import { Stack, Button ,Flex,Text} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Wrap, Box, Divider ,HStack, VStack,TextInput} from "@react-native-material/core";
import { View, Image, StyleSheet } from 'react-native';
import Dropdown from'./DropDown';
import DropdownDay from'./DropDownDays';


const Schedule = () => (
  
  <VStack fill center spacing={-50}>
  <HStack  > 
  <Flex direction="column">
    <Text variant="h4" style={{ margin: 16 }} color="aquamarine" >
    Greetings
    </Text>
     <Text variant="h5" style={{ margin: 16 }}>
      Nir
    </Text>
    
    
    </Flex>
     <Flex direction="Row">
    <Text variant="h6" style={{ marginBottom: 16 }}
     >
    Temp
    </Text>
    <Icon size={30} name="temperature-celsius"/>
    <Icon size={30} name="weather-partly-cloudy"/>
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




     
  
    
  </VStack>
);

export default Schedule;