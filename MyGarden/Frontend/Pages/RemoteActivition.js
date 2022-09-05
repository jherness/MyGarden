import React from "react";
import { Stack, Button ,Flex,Text} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Wrap, Box, Divider ,HStack, VStack,TextInput} from "@react-native-material/core";
import { View, Image, StyleSheet } from 'react-native';
import Dropdown from'../Components/DropDown';





const Remote = () => (

  <VStack fill center spacing={-40} 
  >
  <HStack fill center spacing={0} > 

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
    Remote
    </Text>
    <Text variant="h6" color="aquamarine"
    style={{ marginTop: 90,marginBottom:50}}
    
     >
     Activtion    
     
     </Text> </HStack>
   
    
  
    


  
   <VStack fill center spacing={1}>
   <TextInput
      label="Starting Time"
      leading={props => <Icon name="clock-plus-outline" {...props} />}
      
    />
     <TextInput
      label="Finishing time"
      leading={props => <Icon name="clock-plus-outline" {...props} />}
      
    />
    <Dropdown/>


    
     <Button
      style={{
         maxWidth: "100px",
          maxHeight: "100px",
          minWidth: "150px",
          minHeight: "40px",
          marginTop :"30px"
      }}
      
      
      color="aquamarine"
      
      title="Start Activition"
      leading={props => <Icon name="remote" {...props} />}
    />
     
    </VStack>




     
  
    
  </VStack>
);

export default Remote;