import React from "react";
import { Stack, Button ,Flex,Text} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Wrap, Box, Divider ,HStack, VStack} from "@react-native-material/core";


function RemoteScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <RemoreActivition/>
    </View>
  );}
const Home = () => (

  

  
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
  
    


  
   <HStack fill center spacing={1}>
     <Button
      style={{
         maxWidth: "100px",
          maxHeight: "100px",
          minWidth: "150px",
          minHeight: "40px"
      }}
      
      
      color="aquamarine"
      witch
      title="Schedule Activtion"
      leading={props => <Icon name="calendar-month" {...props} />}
     onPressonPress={() => navigation.navigate}/>
     <Button
     style={{
         maxWidth: "100px",
          maxHeight: "100px",
          minWidth: "150px",
          minHeight: "40px"
      }}
      color="aquamarine"
      title="Activtion History"
      leading={props => <Icon name="history"  style={{marginTop:20}} {...props} />}
    />


     </HStack>
      <HStack fill center spacing={1}>
       <Button
       style={{
         maxWidth: "100px",
          maxHeight: "100px",
          minWidth: "150px",
          minHeight: "40px"
      }}
      
      color="aquamarine"
      witch
      title="Analythics"
      leading={props => <Icon name="chart-bar"  style={{marginTop:20}} {...props} />}
    />
     <Button
     style={{
         maxWidth: "100px",
          maxHeight: "100px",
          minWidth: "150px",
          minHeight: "40px"
      }}
      color="aquamarine"
      title="Remote Activtion"
      leading={props => <Icon name="remote"  style={{marginTop:20}} {...props} />}
    />
    </HStack>




     
  
    
  </VStack>
);

export default Home;