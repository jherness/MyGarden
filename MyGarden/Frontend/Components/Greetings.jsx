import { View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getUser,  getHeadlineText} from '../Modules/GlobalModule';
import { Stack, Button, Flex, Text } from "@react-native-material/core";



export default function Greetings() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [user, setUser] = useState(getUser().getFullName());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }, [currentTime.getSeconds()]);


  return (
    <View>
      <Text variant="h3" color="aquamarine">
        {getHeadlineText(currentTime)}
      </Text>
      <Text variant="h4" style={{ margin: 7 }}>
        {user}
      </Text>
    </View>
  );
}