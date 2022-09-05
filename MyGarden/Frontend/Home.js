import React from "react";
import { Stack, Button, Flex, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Wrap,
  Box,
  Divider,
  HStack,
  VStack,
} from "@react-native-material/core";

const Home = () => (
  <VStack fill center spacing={1}>
    <HStack fill center spacing={20}>
      <Flex direction="column" >
        <Text variant="h3" style={{}} color="aquamarine">
          Greetings
        </Text>
        <Text variant="h4" style={{ margin: 7 }}>
          Nir
        </Text>
      </Flex>

      <Flex direction="Row" center>
        <Text variant="h6" >
          Temp
        </Text>
        <Icon size={30} name="temperature-celsius" />
        <Icon size={30} name="weather-partly-cloudy" />
      </Flex>
    </HStack>

    <HStack fill center spacing={20}>
      <Button
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "30%",
          minWidth: "25%",
          minHeight: "20%",
        }}
        color="aquamarine"
        witch
        title="Schedule Activtion"
        leading={(props) => <Icon name="calendar-month" {...props} />}
        onPressonPress={() => navigation.navigate}
      />
      <Button
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "30%",
          minWidth: "25%",
          minHeight: "20%",
        }}
        color="aquamarine"
        title="Activtion History"
        leading={(props) => <Icon name="history" {...props} />}
      />
    </HStack>
    <HStack fill center spacing={20}>
      <Button
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "30%",
          minWidth: "25%",
          minHeight: "20%",
        }}
        color="aquamarine"
        witch
        title="Analythics"
        leading={(props) => <Icon name="chart-bar" {...props} />}
      />
      <Button
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "30%",
          minWidth: "25%",
          minHeight: "20%",
        }}
        color="aquamarine"
        title="Remote Activtion"
        leading={(props) => <Icon name="remote" {...props} />}
      />
    </HStack>
  </VStack>
);

export default Home;
