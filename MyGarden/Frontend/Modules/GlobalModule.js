import {User} from '../Classes/User'

export const getHeadlineText = (currentTime) => {
    let hour = currentTime.getHours()
    if(hour >= 6 && hour <= 11)
        return "Good Morning"
    else if(hour == 12)
        return "Good Noon"
    else if(hour >= 13 && hour <= 17)
        return "Good Afternoon"
    else
        return "Good Evening"
};


export const getUser = () => {
    /*TODO: Fetch data from server about the user/check if in local storage first*/
    return new User();
}


export const getSamplesFromDB = () => {
    fetch(`http://192.168.1.192:3000/samples`)
      .then(response => response.json())
      .then(samples => console.log(samples))
}







