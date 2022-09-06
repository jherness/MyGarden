// import { RemoteActive } from "../Classes/RemoteActive";
// import { View, Text } from "react-native";
// import React from "react";

// export function RemoteModule() {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date) => {
//     setFinishing(date);
//     setTimeBtnTxt(date.toLocaleTimeString());
//     hideDatePicker();
//   };

//   const [remote, setRemote] = useState(new RemoteActive());
//   const [finishingData, setFinishing] = useState();
//   const [checkedWater, setCheckedW] = useState(false);
//   const [checkedLight, setCheckedL] = useState(false);
//   const [checkedAir, setCheckedA] = useState(false);
//   const [checkedFert, setCheckedF] = useState(false);
//   const [timeBtnTxt, setTimeBtnTxt] = useState("Pick Finish time");

//   const dataChecker = (
//     startingData,
//     finishingData,
//     checkedWater,
//     checkedLight,
//     checkedAir,
//     checkedFert
//   ) => {
//     debugger;
//     if (finishingData === "" || finishingData === undefined) {
//       alert("Please enter finish time");
//     } else {
//       remote.setFinishingData(startingData);
//       remote.setFinishingData(finishingData);
//       remote.setSystemToActivate({
//         Water: checkedWater,
//         Light: checkedLight,
//         Air: checkedAir,
//         Fertilize: checkedFert,
//       });
//       setRemote(remote);
//       console.log(remote);
//     }
//   };
//   return (
//     <View>
//       <Text>RemoteModule</Text>
//     </View>
//   );
// }
