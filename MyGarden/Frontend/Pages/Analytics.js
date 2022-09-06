import {React} from "react";
import { Stack, Button ,Flex,Text} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Wrap, Box, Divider ,HStack, VStack,TextInput} from "@react-native-material/core";
import { View, Image, StyleSheet } from 'react-native';
import Greetings from "../Components/Greetings";
import PageHead from "../Components/PageHead";
import { backColor, mainColor } from "../Style/Colors";



const Analythics = ({navigation}) => (
  <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
    <HStack fill center spacing={1}>
      <Flex direction="column">
        <PageHead first="Analytics"/>
      </Flex>
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
 
  logo: {
    width: 350,
    height: 250,
  },
});

export default Analythics;