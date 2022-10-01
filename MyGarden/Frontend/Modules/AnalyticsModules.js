import moment from "moment/moment";
import { VStack, HStack, Text } from "@react-native-material/core";
import Chart from "../Components/Chart";
import DropDown from "../Components/DropDown";
import { StyleSheet } from "react-native";
import { mainColor } from "../Style/Colors";
import CurrentlyActiveIcon from "../Components/currentlyActiveIcon";

/*data to be rendered in flatlist*/
export const flatlistData = (timeTypeText, samples) => [
  {
    timeName: timeTypeText, // "Hour/day/week..."
    samples: samples, // the last year samples
    dataKey: "light", //the name of the col in the db
    dataName: "Light",
  },
  {
    timeName: timeTypeText,
    samples: samples,
    dataKey: "humidity",
    dataName: "Humidity",
  },
  {
    timeName: timeTypeText,
    samples: samples,
    dataKey: "temperature",
    dataName: "Temperature",
  },
  {
    timeName: timeTypeText,
    samples: samples,
    dataKey: "pressure",
    dataName: "Air Pressure",
  },
];

export const getSamplesByTime = (allsamples, timeAgo) => {
  return allsamples.filter((sample) => {
    return moment(sample.dt_of_sample) >= timeAgo;
  });
};

/*X axis format, each time choosen has a diff format*/
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
    // case "Year":
    //   res = (t) => `${moment(t).format("MM/YY")}`;
  }
  return res;
};

/*text for the appropriate measurement unit*/
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

/*JSX element to be rendered for each col in flatlist*/
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

/*sending data to the element to be rendered*/
export const renderItem = ({ item }) => (
  <Item
    timeName={item.timeName}
    samples={item.samples}
    dataKey={item.dataKey}
    dataName={item.dataName}
  />
);

/*static header the only renders one time in flatlist*/
export const header = (timeTypeText, timeTypeToPapa, currentlyActiveRelays) => {
  return (
    <VStack fill center style={styles.header}>
      <DropDown
        style={{ paddingTop: 50 }}
        state={timeTypeText}
        timeTypeToPapa={timeTypeToPapa}
      />
      <CurrentlyActiveIcon
        style={{ paddingTop: 30 }}
        currentActive={currentlyActiveRelays}
      />
    </VStack>
  );
};

export const footer = (mostCommon) => {
  return mostCommon ? (
    <HStack fill center style={styles.footer}>
      <Text variant="h6" style={styles.textStyle}>
        The Most Common Activation Reason is "{mostCommon.activation_reason}"
        Happend {mostCommon.AHCounter} Times{" "}
      </Text>
    </HStack>
  ) : (
    <Text style={styles.footer}></Text>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: 30,
  },
  footer: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  textStyle: {
    color: mainColor,
  },
});
