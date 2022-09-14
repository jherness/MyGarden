export const getHeadlineText = (currentTime) => {
    let hour = currentTime.getHours();
    if (hour >= 6 && hour <= 11) return "Good Morning";
    else if (hour == 12) return "Good Noon";
    else if (hour >= 13 && hour <= 17) return "Good Afternoon";
    else return "Good Evening";
  };