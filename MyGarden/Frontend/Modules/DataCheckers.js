import { postToDb } from "./posts";
import { ScheduleActive } from "../Classes/ScheduleActive";
import { RemoteActive } from "../Classes/RemoteActive";

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
  } else if (startTime === undefined || startTime === null) {
    alert("Please enter start time");
  } else {
    newSchedule.setStartingTime(startTime);
    newSchedule.setTimeToLive(timeToLive);
    newSchedule.setSystemToActivate(sysToActivate);
    newSchedule.setWeekSchedule(daysToActivate);
    setNewSchedule(newSchedule);
  }
};

export const remoteChecker = (
  setRemote,
  startingData,
  finishingData,
  sysToActivate
) => {
  let remote = new RemoteActive();
  debugger;
  if (
    sysToActivate.air_sys === false &&
    sysToActivate.water_sys === false &&
    sysToActivate.light_sys === false &&
    sysToActivate.fertelize_sys === false
  ) {
    alert("Please pick systems to activate");
  } else {
    remote.setStartingData(startingData);
    remote.setFinishingData(Math.round(finishingData));
    remote.setSystemToActivate(sysToActivate);
    setRemote(remote);
  }
};
