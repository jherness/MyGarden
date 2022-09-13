import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import { Switch, Avatar, HStack } from "@react-native-material/core";
import * as Colors from "../Style/Colors";

export default function SysSwitch(props) {
  const [isActive, setIsActive] = useState(props.isActive);
  const iconName = props.iconName;
  const grandchildToChild = props.grandchildToChild
  const handleClick = () => {
    setIsActive(prev => !prev)
    grandchildToChild(isActive, iconName)
  }


  return (
    <HStack center spacing={7}>
      <Avatar
        size={55}
        style={Colors.mainColor}
        icon={(props) => (
          <Icon
            name={iconName}
            style={Colors.backColor}
            onPress={handleClick}
            {...props}
          />
        )}
      />
      <Switch
        value={props.isActive}
        style={Colors.mainColor}
        onValueChange={handleClick}
      />
    </HStack>
  );
}
