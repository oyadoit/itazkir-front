import { message, Button, notification, Space } from 'antd';
import _ from "lodash";
import { AUTH_TOKEN } from "../utils/constants";


function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

//function from ant design to display error message
export const errorMessage = (args) => {
    message.error(args);
    message.config({
        top: 200,
        rtl: false,
        
    })
}



export const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message: [message],
    description: [description],
    placement: 'bottomLeft',
    duration: 4
  });
};




// help truncate content of text< just specify what you pass and length as arguments
export const textContentReducer = (what, length) => {
    let capitalizedName = capitalize(what)
    return   _.truncate((capitalizedName), {'length': length, 'separator': ''});
}


// accepts fullName as a parameter and gets the initials for firstname and lastname
export const initialGetters = (fullName) => {
    return fullName.split(" ").map((n)=>n[0]).join(" ").toUpperCase();
}

export const saveToken = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
}

