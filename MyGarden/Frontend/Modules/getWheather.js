import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { HStack, Text } from "@react-native-material/core";
import * as Location from "expo-location";

export default function Temprature() {
  const API_KEY = "2e8b8893b8266f8a7b799ad9827b3e4e";
  const [data, setData] = useState({});
  const [icon, setIcon] = useState();
  const [temp, seTtemp] = useState();
  const celLogo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9UgTzAH7U-owDcPTcgSRrgPHrOpHHForAcYuhYAdwbJM_20BWsyTMPlH0LmNEoDKvuE&usqp=CAU`;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        fetchDataFromApi("58.2546", "62.215");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchDataFromApi = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIcon(
            JSON.stringify(data["weather"][0]["icon"]).replace(/['"]+/g, "")
          );
          seTtemp(JSON.stringify(data["main"]["temp"]).slice(0, 2));
        });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
        style={styles.image}
      />
      <HStack center spacing={0}>
        <Text style={styles.text} variant="h6">
          {temp}{" "}
        </Text>
        <Image source={{ uri: celLogo }} style={styles.celcius} />
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight:"bold"
  },
  image: {
    height: "46%",
    width: "15%",
    marginBottom: "1%",
    justifyContent: "center",
    alignItems: "center",
  },
  celcius: {
    marginEnd: "1%",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    width: "5%",
  },
});
