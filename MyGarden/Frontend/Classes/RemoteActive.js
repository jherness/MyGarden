export class RemoteActive {
  constructor() {
    this.finishingData = 1;
    this.startingData = new Date();
    this.systemsToActivate = {
      water_sys: false,
      air_sys: false,
      light_sys: false,
      fertelize_sys: false,
    };
  }
  setFinishingData(fd) {
    this.finishingData = fd;
  }
  setStartingData(sd) {
    this.startingData = sd;
  }
  setSystemToActivate(sa) {
    this.systemsToActivate = sa;
  }
}
