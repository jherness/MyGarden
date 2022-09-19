import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';

export default function DropdownComponent(props) {
  const data = [
    { label: 'Hour', value: "Hour" },
    { label: 'Day', value: "Day" },
    { label: 'Week', value: "Week" },
    { label: 'Month', value: "Month" },
    { label: 'Year', value: "Year" },
  
  ];
  const [value, setValue] = useState("Hour"
  );


  const timeTypeToPapa = props.timeTypeToPapa;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

  
  return (
    <Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    iconStyle={styles.iconStyle}
    data={data}
    search
    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder="Select Time Back To Show"
    searchPlaceholder="Search..."
    value={value}
    onChange={item => {
      setValue(item.value);
      timeTypeToPapa(item.value)
      console.log(item.value+" DataTime")
      
      
      
    }}
    renderLeftIcon={() => (
      <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
    )}
  />
);
};

