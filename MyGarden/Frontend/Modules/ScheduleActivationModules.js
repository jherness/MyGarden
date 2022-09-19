import { ScheduleActive } from "../Classes/ScheduleActive";
import { postToDb } from "./posts";
export const scheduleChecker = (
  setNewSchedule,
  startTime,
  timeToLive,
  daysToActivate,
  sysToActivate
) => {
  let newSchedule = new ScheduleActive();
  debugger;
  if (
    daysToActivate.sunday === false &&
    daysToActivate.monday === false &&
    daysToActivate.tuesday === false &&
    daysToActivate.wednesday === false &&
    daysToActivate.thursday === false &&
    daysToActivate.friday === false &&
    daysToActivate.saturday === false
  ) {
    alert("Please pick activation days");
  } else if (
    sysToActivate.air_sys === false &&
    sysToActivate.water_sys === false &&
    sysToActivate.light_sys === false &&
    sysToActivate.fertelize_sys === false
  ) {
    alert("Please pick systems to activate");
  } else if (
    startTime === undefined ||
    startTime === null ||
    startTime === "00:00:01"
  ) {
    alert("Please enter start time");
  } else {
    newSchedule.setStartingTime(startTime);
    newSchedule.setTimeToLive(timeToLive);
    newSchedule.setSystemToActivate(sysToActivate);
    newSchedule.setWeekSchedule(daysToActivate);
    setNewSchedule(newSchedule);
  }
};

export const handleReset = (newSchedule) => {
  newSchedule.setStartingTime("00:00:01");
  newSchedule.setTimeToLive(1);
  newSchedule.setWeekSchedule({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });
  newSchedule.setSystemToActivate({
    air_sys: false,
    water_sys: false,
    light_sys: false,
    fertelize_sys: false,
  });
  postToDb(newSchedule, "scheduleActivation");
};
