import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as RemoteModule from "../Modules/RemoteModule";
import React, { useState } from "react";
import {
  Stack,
  Button,
  Flex,
  Text,
  Switch,
  Avatar,
} from "@react-native-material/core";
import {
  Wrap,
  Box,
  Divider,
  HStack,
  VStack,
  TextInput,
} from "@react-native-material/core";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PageHead from "../Components/PageHead";
import { RemoteActive } from "../Classes/RemoteActive";
import * as Colors from "../Style/Colors"



export default function RemoteActivation({ navigation }) {
  const mainColor = Colors.mainColor
  const backColor = Colors.backColor
  let flag = true;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setFinishing(date);
    setTimeBtnTxt(date.toLocaleTimeString());
    hideDatePicker();
  };

  const [remote, setRemote] = useState(new RemoteActive());
  const [finishingData, setFinishing] = useState();
  const [checkedWater, setCheckedW] = useState(false);
  const [checkedLight, setCheckedL] = useState(false);
  const [checkedAir, setCheckedA] = useState(false);
  const [checkedFert, setCheckedF] = useState(false);
  const [timeBtnTxt, setTimeBtnTxt] = useState("Pick Finish time");

  const dataChecker = (
    startingData,
    finishingData,
    checkedWater,
    checkedLight,
    checkedAir,
    checkedFert
  ) => {
    debugger;
    if (finishingData === "" || finishingData === undefined) {
      alert("Please enter finish time");
      flag = false
    } else {
      remote.setStartingData(startingData);
      remote.setFinishingData(finishingData);
      remote.setSystemToActivate({
        Water: checkedWater,
        Light: checkedLight,
        Air: checkedAir,
        Fertilize: checkedFert,
      });
      setRemote(remote);
      console.log(remote);
    }
  };

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
      <HStack>
        <PageHead first="Remote" second="Activation" />
      </HStack>
      <HStack fill center spacing={2}>
        <Button
          title={timeBtnTxt}
          titleStyle={{color:backColor}}
          color={mainColor}
          onPress={showDatePicker}
          style={{ width: "50%", height: "40%", justifyContent: "center" }}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </HStack>
      /**WATER ICON AND SWITCH STACK */
      <HStack fill center spacing={40}>
        <Wrap m={2} items="center" spacing={10}>
          <Avatar
            size={55}
            style={{backgroundColor:mainColor}}
            icon={(props) => <Icon name="watering-can" style={{color:backColor}}
            onPress={() => setCheckedW(!checkedWater)} {...props}/>}
          />
          <Switch
            value={checkedWater}
            style={{color:mainColor}}
            onValueChange={() => setCheckedW(!checkedWater)}
          />
        </Wrap>
        /**Light ICON AND SWITCH STACK */
        <Wrap m={2} items="center" spacing={10} shouldWrapChildren={true}>
          <Avatar
          style={{backgroundColor:mainColor}}
            size={55}
            icon={(props) => <Icon name="lightbulb" style={{color:backColor}}
            onPress={() => setCheckedL(!checkedLight)} {...props} />}
          />
          <Switch
            value={checkedLight}
            onValueChange={() => setCheckedL(!checkedLight)}
          />
        </Wrap>
      </HStack>
      /**AIR ICON AND SWITCH STACK */
      <HStack fill center spacing={40}>
        <Wrap m={2} items="center" spacing={10} shouldWrapChildren={true}>
          <Avatar size={55} style={{backgroundColor:mainColor}} icon={(props) => <Icon name="fan" style={{color:backColor}}
          onPress={() => setCheckedA(!checkedAir)} {...props} />} />
          <Switch
            value={checkedAir}
            onValueChange={() => {
              setCheckedA(!checkedAir);
            }}
          />
        </Wrap>
        <Wrap m={2} items="center" spacing={10} shouldWrapChildren={true}>
          <Avatar size={55} style={{backgroundColor:mainColor}} icon={(props) => <Icon name="leaf" style={{color:backColor}}
          onPress={() => setCheckedF(!checkedFert)} {...props} />} />
          <Switch
            value={checkedFert}
            onValueChange={() => {
              setCheckedF(!checkedFert);
            }}
          />
        </Wrap>
      </HStack>
      <HStack fill center spacing={2}>
        <Button
          style={{
            justifyContent: "center",
            width: "40%",
            height: "30%",
          }}
          color={mainColor}
          title="Activate!"
          titleStyle={{color:backColor}}
          leading={(props) => <Icon name="remote" {...props} />}
          onPress={() => {
            dataChecker(
              new Date(),
              finishingData,
              checkedWater,
              checkedLight,
              checkedAir,
              checkedFert
            );
            if(flag){
              setTimeBtnTxt("Pick Finish time");
              navigation.navigate("Home");
            }
          }}
        />
      </HStack>
      <HStack fill />
    </VStack>
  );
};


