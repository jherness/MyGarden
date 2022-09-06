import { View } from 'react-native'
import React from 'react'
import {
    Stack,
    Button,
    Flex,
    Text,
    Switch,
    Avatar,
  } from "@react-native-material/core";

export default function HomeBtn(props) {
    const title = props.title
  return (
    <View>
        <Text>
        {title}
        </Text>
    </View>
  )
}