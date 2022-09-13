import React from "react";
import Greetings from "../Components/Greetings.jsx";
import { Box, HStack, VStack } from "@react-native-material/core";
import HomeBtn from "../Components/HomeBtn.jsx";
import { backColor } from "../Style/Colors.js";

export default function Home({ navigation }) {
  console.disableYellowBox = true;
  return (
    <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
      <HStack fill center spacing={1}>
        <Greetings />
      </HStack>
      <HStack fill center spacing={1}>
        <Box>
          <HomeBtn
            title="Remote Activation"
            onPress={() => navigation.navigate("Remote Activation")}
          />
        </Box>
        <Box>
          <HomeBtn
            title="Analythics"
            onPress={() => navigation.navigate("Analythics")}
          />
        </Box>
      </HStack>
      <HStack fill center spacing={1}>
        <Box>
          <HomeBtn
            title="Schedule Activation"
            onPress={() => navigation.navigate("Schedule Activation")}
          />
        </Box>
        <Box>
          <HomeBtn
            title="Activation History"
            onPress={() => navigation.navigate("Activation History")}
          />
        </Box>
      </HStack>
      <HStack fill />
    </VStack>
  );
}
