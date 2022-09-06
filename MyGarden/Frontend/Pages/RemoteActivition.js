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
    } else {
      remote.setFinishingData(startingData);
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
    <VStack fill center spacing={1}>
      <HStack>
        <PageHead first="Remote" second="Activation" />
      </HStack>
      <HStack fill center spacing={2}>
        <Button
          title={timeBtnTxt}
          color="aquamarine"
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
            justifyContent: "center",
            width: "40%",
            height: "30%",
          }}
          color="aquamarine"
          title="Activate!"
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
            setTimeBtnTxt("Pick Finish time")
          }}
        />
      </HStack>
      <HStack fill />
    </VStack>
  );
};

export default Remote;
