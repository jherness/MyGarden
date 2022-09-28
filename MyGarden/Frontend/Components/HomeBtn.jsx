import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";
import * as Colors from "../Style/Colors";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomeBtn(props) {
  const title = props.title;
  const onPress = props.onPress;
  const width = props.width || "43%";
  const height = props.height || "60%";
  const backgroundColor = props.resetBtn || Colors.mainColor;

  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      minWidth: width,
      height: height,
      marginHorizontal: 12,
      backgroundColor: backgroundColor,
      borderRadius: 8,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: Colors.backColor,
    },
    buttonDisabled: {
      alignItems: "center",
      justifyContent: "center",
      minWidth: width,
      height: height,
      marginHorizontal: 12,
      backgroundColor: Colors.disabledBtn,
      borderRadius: 8,
    },
  });

  return (
    <Pressable
      disabled={props.disabled}
      style={props.disabled ? styles.buttonDisabled : styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
