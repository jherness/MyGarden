import React, { useState, useEffect } from "react";
import Greetings from "../Components/Greetings.jsx";
import {
  Wrap,
  Box,
  Divider,
  HStack,
  VStack,
  TextInput,
} from "@react-native-material/core";

export default function Home({navigation}) {

  return (
    <VStack fill center spacing={1}>
      <HStack>
      <Greetings/>
      </HStack>
    </VStack>
  );
}

{
  /* <HStack fill center spacing={20}>
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
        leading={(props) => <Icon name="graph" {...props} />}
      />
      <Button
      titleStyle={{height:'100%'}}
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "100%",
          minWidth: "40%",
          minHeight: "80%"
        }}
        color="aquamarine"
        title="Remote Activtion"
        leading={(props) => <Icon name="remote-tv" {...props} />}
      />
    </HStack>

    <HStack fill spacing={20}></HStack>
    <HStack fill spacing={20}></HStack> */
}
