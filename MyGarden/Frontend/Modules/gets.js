import axios from "axios";
import { SysMod } from "../Classes/SysMod";

export const getCurrentlyActiveRelays = async (setState) => {
  try {
    const response = await axios(`http://10.57.0.195:3000/currentlyActive`);
    setState(switchDataFormatter(response.data));
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


export const getMostCommonActivationReason = async (setMostCommon) => {
  try {
    const response = await axios(
      `http://10.57.0.195:3000/activationHistory/getMostCommonActivationReason`
    );
    setMostCommon(response.data[0]);
  } catch (err) {
    console.log(error);
  }
};


export const getActivations = async (setActivations) => {
  try {
    const response = await fetch(
      `http://10.57.0.195:3000/activationHistory`
    );
    const data = await response.json();
    setActivations(formatTimeline(data));
  } catch (err) {
    console.log(error);
  }
};



const formatTimeline = (data) => {
  let newest = data.map((act) => {
    let timestamp = new Date(act.dateTime_of_activation).valueOf();
    return {
      date: timestamp,
      data: [
        {
          title: "Activate",
          subtitle: act.activation_reason,
          date: timestamp,
        },
        {
          title: "Ended",
          subtitle: act.finish_hour,
          date: timestamp,
        },
      ],
    };
  });
  return newest;
};

export const getScheduleActivation = async (
  setStartTime,
  setTimeToLive,
  setDaysToActivate,
  setSysToActivate,
  setTimeBtnTxt
) => {
  try {
    const response = await axios(
      `http://10.57.0.195:3000/scheduleActivation`
    );
    setStartTime(response.data[0].start_hour);
    setTimeToLive(response.data[0].time_to_live || 1);
    setTimeBtnTxt(
      response.data[0].start_hour === "00:00:01"
        ? "Enter Start Time"
        : response.data[0].start_hour.substring(0, 5)
    );
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

export const getSysMod = async (setIsActive, setMaxTemp, setMinMoist) => {
  try {
    const response = await axios(`http://10.57.0.195:3000/SysMod`);
    setIsActive(response.data[0].is_auto === 1);
    setMaxTemp(response.data[0].max_temp);
    setMinMoist(response.data[0].min_moist);
  } catch (err) {
    console.log(error);
  }
};

export const getSysModIsAuto = async (setIsAuto) => {
  try {
    const response = await axios(`http://10.57.0.195:3000/SysMod`);
    setIsAuto(response.data[0].is_auto === 1);
  } catch (err) {
    console.log(error);
  }
};




export const getSamples = async (setSamples) => {
  try {
    const response = await axios(`http://10.57.0.195:3000/samples`);
    setSamples(response.data);
  } catch (err) {
    console.log(error);
  }
};
