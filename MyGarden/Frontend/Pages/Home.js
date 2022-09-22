import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Greetings from "../Components/Greetings.jsx";
import { Box, HStack, VStack } from "@react-native-material/core";
import HomeBtn from "../Components/HomeBtn.jsx";
import { backColor } from "../Style/Colors.js";
import { getSysModIsAuto } from "../Modules/gets.js";

export default function Home({ navigation }) {
  console.disableYellowBox = true;
  const [isAuto, setIsAuto] = useState();

useEffect(() => {
  const unmount = navigation.addListener("focus", () => {
    getSysModIsAuto(setIsAuto);
  });
  return unmount;
}, [navigation]);


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
            disabled={isAuto}
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
            disabled={isAuto}
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

// useEffect(() => {
//   const unmount = navigation.addListener("focus", () => {
//     getSysModIsAuto(setIsAuto);
//   });
//   return unmount;
// }, [navigation]);
