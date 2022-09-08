import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import { Switch, Avatar, HStack } from "@react-native-material/core";
import * as Colors from "../Style/Colors";

export default function SysSwitch(props) {
  const [isActive, setIsActive] = useState(props.state);
  const iconName = props.iconName;
  const onPress = props.onPress;

  useEffect(() => {
    setIsActive(props.state);
  }, [props.state]);

  return (
    <HStack center spacing={7}>
      <Avatar
        size={55}
        style={Colors.mainColor}
        icon={(props) => (
          <Icon
            name={iconName}
            style={Colors.backColor}
            onPress={onPress}
            {...props}
          />
        )}
      />
      <Switch
        value={isActive}
        style={Colors.mainColor}
        onValueChange={onPress}
      />
    </HStack>
  );
}
