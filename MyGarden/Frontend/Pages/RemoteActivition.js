import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Image, StyleSheet } from 'react-native';
import Dropdown from'../Components/DropDown';
import Greetings from "../Components/Greetings";
import React, { useState } from 'react';
import { Stack, Button ,Flex,Text,Switch,Avatar  } from "@react-native-material/core";
import { Wrap, Box, Divider ,HStack, VStack,TextInput} from "@react-native-material/core";
import DateTimePickerModal from "react-native-modal-datetime-picker";





const Remote = () => {


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
 
  const [dataToSend , setdataToSend] = useState(data)
  const [startingData , setStarting] = useState("")
  const [finishingData , setFinishing] = useState("")
  const [checkedWater, setCheckedW] = useState(true);
  const [checkedLight, setCheckedL] = useState(true);
  const [checkedAir, setCheckedA] = useState(true);

  const data = {startingData:"", finishingData:"", systemToTurn: [true, true,true]};

  
 
const dataChecker=(startingData,finishingData,checkedWater,checkedLight,checkedAir)=>{
  debugger
   if (startingData===""||finishingData==="") {
    alert("You Didnt Fill The Input Right ")
    
   } else {
    data.startingData={startingData}
    data.finishingData={finishingData}
    data.systemToTurn=[checkedWater,checkedLight,checkedAir]
    setdataToSend(data)
    console.log(data)
    
   }
  

}


  
 
 
  
  

  

  return (
  <VStack fill center spacing={-40} 
  >
  <HStack fill center spacing={2} > 

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
  <Text variant="h6" 
     >
    Remote
    </Text>
    <Text variant="h6" color="aquamarine"
    style={{ marginBottom:50}}
    
     >
     Activtion    
     
     </Text> </HStack>
   
    
  
    


  
   <VStack fill center spacing={0.5} style={{marginBottom:30}} >
   <Button title="Show Date Picker" color="aquamarine" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
     <TextInput
      placeholder="Finishing time"
      leading={props => <Icon name="clock-plus-outline" {...props} />}
      onChangeText={newText => setFinishing(newText)}
      
    />
    /**WATER ICON AND SWITCH STACK */
     <HStack fill center spacing={2} > 
     <Avatar size={40} icon={props => <Icon name="watering-can" {...props} />}
   />
    <Switch value={checkedWater} onValueChange={() => setCheckedW(!checkedWater)} />

    
     </HStack>



     /**Light ICON AND SWITCH STACK */
     <HStack fill center spacing={2} > 
     <Avatar
     size={40}
    
    icon={props => <Icon name="lightbulb" {...props} />}
  />
   <Switch value={checkedLight} onValueChange={() => setCheckedL(!checkedLight)} />

    
    </HStack>



    /**AIR ICON AND SWITCH STACK */
    <HStack fill center spacing={2} > 
    <Avatar
    size={40}
    
    icon={props => <Icon name="fan" {...props} />}
  />
   <Switch value={checkedAir} onValueChange={() => setCheckedA(!checkedAir)} />
   
    
    </HStack>

     <Button
      style={{
         maxWidth: "40%",
          maxHeight: "20%",
          minWidth: "30%",
          minHeight: "5%",
          marginBottom:"20"
         
      }}
      
      
      color="aquamarine"
      
      title="Start Activition"
      leading={props => <Icon name="remote" {...props} />}
      onPress={()=>dataChecker(startingData,finishingData,checkedWater,checkedLight,checkedAir)}
    />
     
    </VStack>




     
  
    
  </VStack>)
  
    ;
}

export default Remote;