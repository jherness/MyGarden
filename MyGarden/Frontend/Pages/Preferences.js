import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import { VStack, HStack } from '@react-native-material/core';
import { backColor } from '../Style/Colors';

export default function Preferences({ navigation }) {
    return (
      <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
        <HStack fill center spacing={1}>
            <Text>Hello</Text>
        </HStack>
      </VStack>
    );
  }