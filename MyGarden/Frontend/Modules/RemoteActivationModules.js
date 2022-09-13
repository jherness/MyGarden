import { RemoteActive } from "../Classes/RemoteActive";



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