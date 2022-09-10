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