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

const Remote = () => {
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

  const [dataToSend, setdataToSend] = useState(data);
  const [finishingData, setFinishing] = useState();
  const [checkedWater, setCheckedW] = useState(false);
  const [checkedLight, setCheckedL] = useState(false);
  const [checkedAir, setCheckedA] = useState(false);
  const [checkedFert, setCheckedF] = useState(false);
  const [timeBtnTxt, setTimeBtnTxt] = useState("Pick Finish time");

  const data = {
    startingData: "",
    finishingData: "",
    systemToTurn: [false, false, false, false],
  };

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
    } else {
      data.startingData = startingData.toLocaleString();
      data.finishingData = finishingData.toLocaleString();
      data.systemToTurn = {
        Water: checkedWater,
        Light: checkedLight,
        Air: checkedAir,
        Fertilize: checkedFert,
      };
      setdataToSend(data);
      console.log(data);
    }
  };

  return (
    <VStack fill center spacing={1}>
      <HStack>
        <PageHead first="Remote" second="Activation" />
      </HStack>
      <HStack fill center spacing={2}>
        <Button
          title={timeBtnTxt}
          color="aquamarine"
          onPress={showDatePicker}
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
            icon={(props) => <Icon name="watering-can" {...props} />}
          />
          <Switch
            value={checkedWater}
            onValueChange={() => setCheckedW(!checkedWater)}
          />
        </Wrap>
        /**Light ICON AND SWITCH STACK */
        <Wrap m={2} items="center" spacing={10} shouldWrapChildren={true}>
          <Avatar
            size={55}
            icon={(props) => <Icon name="lightbulb" {...props} />}
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
          <Avatar size={55} icon={(props) => <Icon name="fan" {...props} />} />
          <Switch
            value={checkedAir}
            onValueChange={() => {
              setCheckedA(!checkedAir);
            }}
          />
        </Wrap>
        <Wrap m={2} items="center" spacing={10} shouldWrapChildren={true}>
          <Avatar size={55} icon={(props) => <Icon name="leaf" {...props} />} />
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
            maxWidth: "40%",
            maxHeight: "20%",
            minWidth: "30%",
            minHeight: "5%",
          }}
          color="aquamarine"
          title="Activate!"
          leading={(props) => <Icon name="remote" {...props} />}
          onPress={() =>
            dataChecker(
              new Date(),
              finishingData,
              checkedWater,
              checkedLight,
              checkedAir,
              checkedFert
            )
          }
        />
      </HStack>
    </VStack>
  );
};

export default Remote;
