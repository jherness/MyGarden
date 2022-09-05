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
    <HStack fill center spacing={50} style={{ marginTop: 40 }}>
      <Flex direction="Row">
        <Text variant="h3" color="aquamarine">
          Greetings
        </Text>
        <Text variant="h4" style={{ margin: 7 }}>
          Nir
        </Text>
      </Flex>

      <Flex direction="Row" center>
        <Text variant="h6">Temp</Text>
        <Icon size={30} name="temperature-celsius" />
        <Icon size={30} name="weather-partly-cloudy" />
      </Flex>
    </HStack>
    <HStack fill spacing={20}></HStack>

    <HStack fill center spacing={20}>
      <Button
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "100%",
          minWidth: "40%",
          minHeight: "80%",
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
          maxHeight: "100%",
          minWidth: "40%",
          minHeight: "80%",
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
          maxHeight: "100%",
          minWidth: "40%",
          minHeight: "80%",
        }}
        color="aquamarine"
        witch
        title="Analytics"
        leading={(props) => <Icon name="calendar-month" {...props} />}
        onPressonPress={() => navigation.navigate}
      />
      <Button
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "100%",
          minWidth: "40%",
          minHeight: "80%",
        }}
        color="aquamarine"
        title="Remote Activtion"
        leading={(props) => <Icon name="history" {...props} />}
      />
    </HStack>

    <HStack fill spacing={20}></HStack>
    <HStack fill spacing={20}></HStack>
  </VStack>
);

export default Home;
