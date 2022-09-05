import React, { useState } from 'react';

import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(['Water System', 'Light System', 'Air System']);
  const [items, setItems] = useState([
    {label: 'Water System', value: 'Water system'},
    {label: 'Light System', value: 'Light System'},
    {label: 'Air System', value: 'Air System'},
   
  ]);

  return (
    <View style={{
      maxWidth: "400px",
          maxHeight: "60px",
          minWidth: "350px",
          minHeight: "60px",
      backgroundColor: 'aquamarine',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15
    }}>
      <DropDownPicker
   
      dropDownContainerStyle={{
        backgroundColor: "#7fffd4"
      }}
      listItemLabelStyle={{
        color: "000000"
      }}
      closeIconStyle={{
        width: 30,
        height: 30,
        color:"000000"
      }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}

        theme="DARK"
        multiple={true}
        mode="BADGE"
       
      />
    </View>
  );
}