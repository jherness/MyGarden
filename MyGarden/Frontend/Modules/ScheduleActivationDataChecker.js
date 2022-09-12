const dataChecker = (startTime, timeToLive, daysToActivate, sysToActivate) => {
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
   else {
    remote.setStartingData(startingData);
    remote.setFinishingData(Math.round(finishingData));
    remote.setSystemToActivate(sysToActivate);
    setRemote(remote);
    postToDb(remote, `remoteActivation`);
    navigation.navigate("Home");
  }
};

daysToActivate.sunday === false &&
  daysToActivate.monday === false &&
  daysToActivate.tuesday === false &&
  daysToActivate.wednesday === false &&
  daysToActivate.thursday === false &&
  daysToActivate.friday === false &&
  daysToActivate.saturday === false;
