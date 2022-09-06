import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native'
import {
  Wrap,
  Box,
  Divider,
  HStack,
  VStack,
  TextInput,
} from "@react-native-material/core";
import PageHead from "../Components/PageHead.jsx";

export default function ActivationHistory({navigate}) {
  return (
    <VStack fill center spacing={1} style={{ backgroundColor: "#E5E4D7" }}>
      <HStack fill center spacing={1}>
        <PageHead first = "Activation" second="History"/>
      </HStack>
    </VStack>
  )
}