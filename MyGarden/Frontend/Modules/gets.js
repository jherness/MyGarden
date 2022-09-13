import axios from "axios";

export const getCurrentlyActiveRelays = async (setState) => {
  try {
    const response = await axios(
      `http://192.168.1.192:3000/currentlyActive`
    );
    setState(dataFormatter(response.data))
    console.log(response.data)
  } catch (err) {
    console.log(error);
  }
  };

  const dataFormatter = (data) => {
    return {
      air_sys: data[0].air_sys === 1,
      water_sys: data[0].water_sys === 1,
      light_sys: data[0].light_sys === 1,
      fertelize_sys: data[0].fertelize_sys === 1,
    };
  };

  const getScheduleActivation = async() => {
    try {
      const response = await fetch(`http://192.168.1.192:3000/scheduleActivation`);
      const data = await response.json();
      setState(dataFormatter(data));
    } catch (err) {
      console.log(error);
    }
  };