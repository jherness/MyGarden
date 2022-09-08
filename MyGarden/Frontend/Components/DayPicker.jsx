import { View, Text, StyleSheet, Pressable } from "react-native";
import React, {useState, useEffect} from "react";
import * as Colors from "../Style/Colors";
import { round } from "react-native-reanimated";

export default function DayPicker(props) {
  const [isActive, setIsActive] = useState(props.state)
  const title = props.title;
  const onPress = props.onPress;
  useEffect(() => {
    setIsActive(props.state)
    return () => {}
  }, [props.state])
  

  return (
    <View>
      <Pressable
        style={isActive? styles.btnSelected : styles.btnNotSelected}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnSelected: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.activeBtn,
    borderRadius: 100,
    margin:7
  },
  btnNotSelected: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.mainColor,
    borderRadius: 100,
    margin:7
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: Colors.backColor,
  },
});
