import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "@react-native-material/core";

import * as Location from "expo-location";

export default function Temprature() {
  const API_KEY = "2e8b8893b8266f8a7b799ad9827b3e4e";
  const [data, setData] = useState({});
  const [icon, setIcon] = useState();
  const [temp, seTtemp] = useState()

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
          seTtemp(JSON.stringify(data["main"]["temp"]).slice(0,2))
        });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
        style={{ height: "20%", width: "15%", marginBottom:"3%", justifyContent:"center", alignItems:"center" }}
      />
      <Text style={{justifyContent:"center", alignItems:"center"}} variant="h6">{temp} C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"flex-end"
  }
});
