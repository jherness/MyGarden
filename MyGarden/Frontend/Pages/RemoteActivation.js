import React, { useState, useEffect } from "react";
import { Text, Spacer } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import PageHead from "../Components/PageHead";
import { RemoteActive } from "../Classes/RemoteActive";
import * as Colors from "../Style/Colors";
import SysSwitches from "../Components/SysSwitches";
import { getCurrentlyActiveRelays } from "../Modules/gets";
import HomeBtn from "../Components/HomeBtn";
import Slider from "react-native-slider";
import { postToDb } from "../Modules/posts";
import { remoteChecker } from "../Modules/RemoteActivationModules";

export default function RemoteActivation({ navigation }) {
  const backColor = Colors.backColor;

  const [remote, setRemote] = useState(new RemoteActive());
  const [finishingData, setFinishing] = useState(1);
  const [sysToActivate, setSysToActivate] = useState([]);

  // Emmulate componentDidMount lifecycle
  useEffect(() => {
    getCurrentlyActiveRelays(setSysToActivate);
  }, []);

  const childToParent = (data) => {
    setSysToActivate(data);
  };

  const handleSubmit = () => {
    remoteChecker(setRemote, new Date(), finishingData, sysToActivate);
    if (JSON.stringify(remote) !== "{}") {
      postToDb(remote, `remoteActivation`);
      navigation.navigate("Home");
    }
  };

  const resetButtonClick = () => {
    remote.setFinishingData(1);
    remote.setStartingData(new Date());
    remote.setSystemToActivate({
      water_sys: false,
      air_sys: false,
      light_sys: false,
      fertelize_sys: false
    });
    postToDb(remote, `remoteActivation`);
    navigation.navigate("Home");
  };

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
      <HStack fill center>
        <PageHead first="Remote" second="Activation" />
      </HStack>
      <HStack fill center></HStack>
      <HStack fill center>
        <SysSwitches state={sysToActivate} childToParent={childToParent} />
      </HStack>
      <HStack fill center>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: Colors.mainColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Math.round(finishingData) == 1
            ? Math.round(finishingData) + " Minute"
            : Math.round(finishingData) + " Minutes"}
        </Text>
      </HStack>
      <HStack fill center>
        <Slider
          minimumValue={1}
          maximumValue={120}
          style={{ marginBottom: 50, width: "85%" }}
          value={finishingData}
          onValueChange={(value) => setFinishing(value)}
        />
      </HStack>
      <HStack fill center spacing={2}>
        <HomeBtn
          title={"ACTIVATE!"}
          onPress={handleSubmit}
          height="50%"
          width="40%"
        />
        <HomeBtn
          title="RESET"
          onPress={resetButtonClick}
          height="50%"
          width="40%"
          resetBtn={Colors.resetBtn}
        />
      </HStack>
      <HStack fill center></HStack>
    </VStack>
  );
}
