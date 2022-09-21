import React, { useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { mainColor } from "../Style/Colors";

export default function DropdownComponent(props) {
  const data = [
    { label: "Hour", value: "Hour" },
    { label: "Day", value: "Day" },
    { label: "Week", value: "Week" },
    { label: "Month", value: "Month" },
    { label: "Year", value: "Year" },
  ];
  const [value, setValue] = useState("Hour");

  const timeTypeToPapa = props.timeTypeToPapa;

  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Time "
        searchPlaceholder="Search..."
        value={value}
        onChange={(item) => {
          setValue(item.value);
          timeTypeToPapa(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.leftIcon}
            color={mainColor}
            name="calendar"
            size={30}
          />
        )}
        renderRightIcon={() => (
          <AntDesign
            style={styles.rightIcon}
            color={mainColor}
            name="caretdown"
            size={20}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    minHeight: 60,
    minWidth: Dimensions.get("screen").width,
    borderBottomColor: mainColor,
    borderBottomWidth: 2,
  },
  leftIcon: {
    marginRight: 10,
    color: mainColor,
  },
  rightIcon: {
    color: mainColor,
  },
  selectedTextStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: mainColor,
    alignContent:"center"
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 20,
    color: mainColor,
  },
});
