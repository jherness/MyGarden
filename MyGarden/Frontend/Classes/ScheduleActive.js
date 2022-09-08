export class ScheduleActive {
    constructor() {
    }
    setStartingData(sd){
        this.startingData = sd;
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