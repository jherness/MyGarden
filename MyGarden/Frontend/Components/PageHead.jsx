import { View } from 'react-native'
import { Stack, Button, Flex, Text } from "@react-native-material/core";
import React from 'react'

export default function PageHead(props) {
    let first = props.first, second = props.second || ""
  return (
    <View style={{marginTop:50}}>
      <Text variant="h3">{first}</Text>
      <Text variant="h4" color="aquamarine" >
        {second}
      </Text>
    </View>
  );
}