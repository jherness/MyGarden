import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Location from "expo-location";
import { Icon } from "@react-native-material/core";

export default function Temprature() {
  const API_KEY = "2e8b8893b8266f8a7b799ad9827b3e4e";
  const [data, setData] = useState({});

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
           console.log(JSON.stringify(data["weather"][0]["icon"]))
          setData(data);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Image>`http://openweathermap.org/img/w/{JSON.stringify(data["weather"][0]["icon"])}.png`</Image>
      <Text>{data["name"]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
