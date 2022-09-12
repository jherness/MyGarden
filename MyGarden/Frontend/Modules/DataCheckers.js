import { postToDb } from "./posts";

export const scheduleChecker= (setNewSchedule, newSchedule, startTime, timeToLive, daysToActivate, sysToActivate) => {
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
  } else if( 
    sysToActivate.air_sys === false &&
    sysToActivate.water_sys === false &&
    sysToActivate.light_sys === false &&
    sysToActivate.fertelize_sys === false 
    ) {
        alert("Please pick systems to activate");
    }
    else if( 
      startTime === undefined || startTime === null
      ) {
          alert("Please enter start time");
      }
   else {
    newSchedule.setStartingTime(startTime);
    newSchedule.setFinishingData(timeToLive);
    newSchedule.setSystemToActivate(sysToActivate);
    newSchedule.setWeekSchedule(daysToActivate);
    setNewSchedule(newSchedule)
    postToDb(newSchedule, `ScheduleActivation`);
    navigation.navigate("Home");
  }
};


export class ScheduleActive {
  constructor() {
  }
  setStartingTime(sd){
      this.startTime = sd;
  }
  setTimeToLive(ttl){
      this.timeToLive = ttl;
  }
  setSystemToActivate(sa){
      this.systemsToActivate = sa;
  }
  setWeekSchedule(ws){
      this.weekSchedule = ws;
  }
}

