import React, { useState, useEffect } from "react";
import { Text, Spacer } from "@react-native-material/core";
import { HStack, VStack } from "@react-native-material/core";
import PageHead from "../Components/PageHead";
import { RemoteActive } from "../Classes/RemoteActive";
import * as Colors from "../Style/Colors";
import SysSwitches from "../Components/SysSwitches";
import { getCurrentlyActiveRelays } from "../Modules/gets";
import HomeBtn from "../Components/HomeBtn";
import Spinner from "react-native-loading-spinner-overlay";
import Slider from "react-native-slider";
import { postToDb } from "../Modules/posts";
import { remoteChecker } from "../Modules/DataCheckers";
import axios from "axios";

export default function RemoteActivation({ navigation }) {
  const backColor = Colors.backColor;

  const [remote, setRemote] = useState(new RemoteActive());
  const [finishingData, setFinishing] = useState(1);
  const [sysToActivate, setSysToActivate] = useState([]);
  const [counter, setCounter] = useState(0);

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

  return (
    <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
      <HStack fill center>
        <PageHead first="Remote" second="Activation" />
      </HStack>
      <Spacer fill />
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
          title={"Activate!"}
          onPress={handleSubmit}
          height="35%"
          width="50%"
        />
      </HStack>
      <HStack fill />
    </VStack>
  );
}

// import React, { useState, useEffect } from "react";
// import { Text, Spacer } from "@react-native-material/core";
// import { HStack, VStack } from "@react-native-material/core";
// import PageHead from "../Components/PageHead";
// import { RemoteActive } from "../Classes/RemoteActive";
// import * as Colors from "../Style/Colors";
// import SysSwitches from "../Components/SysSwitches";
// import { getCurrentlyActiveRelays } from "../Modules/gets";
// import HomeBtn from "../Components/HomeBtn";
// import Spinner from "react-native-loading-spinner-overlay";
// import Slider from "react-native-slider";
// import { postToDb } from "../Modules/posts";
// import { remoteChecker } from "../Modules/DataCheckers";

// export default function RemoteActivation({ navigation }) {
//   const backColor = Colors.backColor;

//   const [remote, setRemote] = useState(new RemoteActive());
//   const [finishingData, setFinishing] = useState(1);
//   const [sysToActivate, setSysToActivate] = useState([]);
//   const [counter, setCounter] = useState(0);

//   // Emmulate componentDidMount lifecycle
//   useEffect(() => {
//     getCurrentlyActiveRelays(setSysToActivate);

//     const interval = setInterval(() => {
//       setCounter((prev) => prev + 1);
//     }, 1500);
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const childToParent = (data) => {
//     setSysToActivate(data);
//   };

//   const handleSubmit = () => {
//     remoteChecker(setRemote, new Date(), finishingData, sysToActivate);
//     if (JSON.stringify(remote) !== "{}") {
//       postToDb(remote, `remoteActivation`);
//       navigation.navigate("Home");
//     }
//   };

//   return counter < 1 ? (
//     <Spinner
//       visible={true}
//       textContent={"Loading..."}
//       textStyle={{ color: "#FFF" }}
//     />
//   ) : (
//     <VStack fill center spacing={1} style={{ backgroundColor: backColor }}>
//       <HStack fill center>
//         <PageHead first="Remote" second="Activation" />
//       </HStack>
//       <Spacer fill />
//       <HStack fill center>
//         <SysSwitches state={sysToActivate} childToParent={childToParent} />
//       </HStack>
//       <HStack fill center>
//         <Text
//           style={{
//             fontSize: 24,
//             fontWeight: "bold",
//             color: Colors.mainColor,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {Math.round(finishingData) == 1
//             ? Math.round(finishingData) + " Minute"
//             : Math.round(finishingData) + " Minutes"}
//         </Text>
//       </HStack>
//       <HStack fill center>
//         <Slider
//           minimumValue={1}
//           maximumValue={120}
//           style={{ marginBottom: 50, width: "85%" }}
//           value={finishingData}
//           onValueChange={(value) => setFinishing(value)}
//         />
//       </HStack>
//       <HStack fill center spacing={2}>
//         <HomeBtn
//           title={"Activate!"}
//           onPress={handleSubmit}
//           height="35%"
//           width="50%"
//         />
//       </HStack>
//       <HStack fill />
//     </VStack>
//   );
// }
