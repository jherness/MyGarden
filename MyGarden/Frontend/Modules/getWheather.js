import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, ActivityIndicator } from "react-native";
import { HStack, Spacer, Text, VStack } from "@react-native-material/core";
import * as Location from "expo-location";
import { mainColor } from "../Style/Colors";
import { Feather } from "@expo/vector-icons";

export default function Temprature() {
  const API_KEY = "2e8b8893b8266f8a7b799ad9827b3e4e";
  const [data, setData] = useState({});
  const [icon, setIcon] = useState();
  const [temp, setTemp] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const celLogo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9UgTzAH7U-owDcPTcgSRrgPHrOpHHForAcYuhYAdwbJM_20BWsyTMPlH0LmNEoDKvuE&usqp=CAU`;
  const [isLoading, setIsLoading] = useState(true);

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
          let sunriseData = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(data.sys.sunrise * 1000);
          let sunSetData = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(data.sys.sunset * 1000);
          setSunrise(sunriseData);
          setSunset(sunSetData);
          setData(data);
          setIcon(
            JSON.stringify(data["weather"][0]["icon"]).replace(/['"]+/g, "")
          );
          setTemp(JSON.stringify(data["main"]["temp"]).slice(0, 2));
          setIsLoading(false);
        });
    }
  };

  return isLoading ? (
    <View style={styles.container}>
      <Spacer />
      <ActivityIndicator
        color={mainColor}
        size="large"
        style={styles.indicator}
      />
      <Spacer />
    </View>
  ) : (
    <HStack fill center>
      <VStack fill center spacing={5} >
        <Image
          source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
          style={styles.image}
        />
        <HStack>
          <Text style={styles.text} variant="h5">
            {temp}
          </Text>
          <Image source={{ uri: celLogo }} style={styles.celcius} />
        </HStack>
      </VStack>
      <VStack fill center spacing={5}>
        <Text style={styles.textS} variant="h6">
          <Feather name="sunrise" size={24} color={mainColor} /> {sunrise}
        </Text>
        <Text style={styles.textS} variant="h6">
          <Feather name="sunset" size={24} color={mainColor} /> {sunset}
        </Text>
      </VStack>
    </HStack>
  );
}
const styles = StyleSheet.create({
  indicator: {
    alignItems: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  image: {
    height: "30%",
    width: "25%",
    marginBottom: "1%",
    justifyContent: "center",
    alignItems: "center",
  },
  celcius: {
    marginEnd: "1%",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "10%",
  },
});
