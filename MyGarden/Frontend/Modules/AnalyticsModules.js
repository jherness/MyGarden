import moment from "moment/moment";
import { HStack } from "@react-native-material/core";
import Chart from "../Components/Chart";
import DropDown from "../Components/DropDown";
import { StyleSheet } from "react-native";


export const flatlistData = (timeTypeText, samples) => [
  {
    timeName: timeTypeText,
    samples: samples,
    dataKey: "key2",
    dataName: "Light",
  },
  {
    timeName: timeTypeText,
    samples: samples,
    dataKey: "key3",
    dataName: "Humidity",
  },
  {
    timeName: timeTypeText,
    samples: samples,
    dataKey: "key4",
    dataName: "Temperature",
  },
  {
    timeName: timeTypeText,
    samples: samples,
    dataKey: "key5",
    dataName: "Air Pressure",
  },
];

export const xTicksFormat = (timeName) => {
  let res = "";
  switch (timeName) {
    case "Hour":
    case "Day":
      res = (t) => `${moment(t).format("HH:mm")}`;
      break;
    case "Week":
    case "Month":
      res = (t) => `${moment(t).format("DD/MM")}`;
      break;
    case "Year":
      res = (t) => `${moment(t).format("MM/YY")}`;
  }
  return res;
};
export const measurementUnit = (dataName) => {
  let res = "";
  switch (dataName) {
    case "Light":
      res = "Lm";
      break;
    case "Humidity":
      res = "%";
      break;
    case "Temperature":
      res = "C";
      break;
    case "Air Pressure":
      res = "Mb";
      break;
  }
  return res;
};

export const Item = ({ timeName, samples, dataKey, dataName }) => (
  <HStack fill center>
    <Chart
      timeName={timeName}
      samples={samples}
      dataKey={dataKey}
      dataName={dataName}
    />
  </HStack>
);

export const renderItem = ({ item }) => (
  <Item
    timeName={item.timeName}
    samples={item.samples}
    dataKey={item.dataKey}
    dataName={item.dataName}
  />
);

export const header = (timeTypeText, timeTypeToPapa) => {
    return (
      <HStack fill center style={styles.header}>
        <DropDown state={timeTypeText} timeTypeToPapa={timeTypeToPapa} />
      </HStack>
    );
  };

  const styles = StyleSheet.create({
    header:{
        paddingBottom:30
    }
  })