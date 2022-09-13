import axios from "axios";

export const getCurrentlyActiveRelays = async (setState) => {
  try {
    const response = await axios(`http://192.168.1.192:3000/currentlyActive`);
    setState(switchDataFormatter(response.data));
    console.log(response.data);
  } catch (err) {
    console.log(error);
  }
};

const switchDataFormatter = (data) => {
  return {
    air_sys: data[0].air_sys === 1,
    water_sys: data[0].water_sys === 1,
    light_sys: data[0].light_sys === 1,
    fertelize_sys: data[0].fertelize_sys === 1,
  };
};

export const getScheduleActivation = async (
  setStartTime,
  setTimeToLive,
  setDaysToActivate,
  setSysToActivate,
  setTimeBtnTxt,
) => {
  try {
    const response = await axios(
      `http://192.168.1.192:3000/scheduleActivation`
    );
    setStartTime(response.data[0].start_hour);
    setTimeToLive(response.data[0].time_to_live || 1);
    setTimeBtnTxt(response.data[0].start_hour === "00:00:01" ? "Enter Start Time" : response.data[0].start_hour)
    setDaysToActivate({
      sunday: response.data[0].sunday === 1 || false,
      monday: response.data[0].monday === 1 || false,
      tuesday: response.data[0].tuesday === 1 || false,
      wednesday: response.data[0].wednesday === 1 || false,
      thursday: response.data[0].thursday === 1 || false,
      friday: response.data[0].friday === 1 || false,
      saturday: response.data[0].saturday === 1 || false,
    });
    setSysToActivate({
      air_sys: response.data[0].air_sys === 1 || false,
      water_sys: response.data[0].water_sys === 1 || false,
      light_sys: response.data[0].light_sys === 1 || false,
      fertelize_sys: response.data[0].fertelize_sys === 1 || false,
    });
  } catch (err) {
    console.log(error);
  }
};
