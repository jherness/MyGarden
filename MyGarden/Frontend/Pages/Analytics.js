import {React} from "react";
import { Stack, Button ,Flex,Text} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Wrap, Box, Divider ,HStack, VStack,TextInput} from "@react-native-material/core";
import { View, Image, StyleSheet } from 'react-native';
import Greetings from "../Components/Greetings";


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
 
  logo: {
    width: 350,
    height: 250,
  },
});

;

const Analythics = ({navigation}) => (
  <VStack fill center spacing={0} style={{ backgroundColor: "#E5E4D7" }}>
    <HStack fill center spacing={0}>
      <Flex direction="column">
        <Greetings />
      </Flex>
    </HStack>

    <HStack>
      <Text variant="h6" style={{ marginTop: 90 }}>
        Analytic
      </Text>
      <Text
        variant="h6"
        color="aquamarine"
        style={{ marginTop: 90, marginBottom: 50 }}
      >
        Data
      </Text>
    </HStack>
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg",
        }}
      />
    </View>

    <VStack fill center spacing={1}></VStack>
  </VStack>
);

export default Analythics;