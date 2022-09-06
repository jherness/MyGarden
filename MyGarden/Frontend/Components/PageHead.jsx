import { View } from 'react-native'
import { Stack, Button, Flex, Text } from "@react-native-material/core";
import React from 'react'
import { mainColor } from '../Style/Colors';

export default function PageHead(props) {
    let first = props.first, second = props.second || ""
  return (
    <View style={{marginTop:50}}>
      <Text variant="h3" color={mainColor} >{first}</Text>
      <Text variant="h3" >
        {second}
      </Text>
    </View>
  );
}