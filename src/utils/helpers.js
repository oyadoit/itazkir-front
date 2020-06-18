import { message, Button } from 'antd';
import _ from "lodash";
import { AUTH_TOKEN } from "../utils/constants";

//function from ant design to display error message
export const errorMessage = (args) => {
    message.error(args);
    message.config({
        top: 200,
        rtl: false,
        
    })
}

// help truncate content of text< just specify what you pass and length as arguments
export const textContentReducer = (what, length) => {
    return   _.truncate((what), {'length': length, 'separator': ''});
}


// accepts fullName as a parameter and gets the initials for firstname and lastname
export const initialGetters = (fullName) => {
    return fullName.split(" ").map((n)=>n[0]).join(" ").toUpperCase();
}

export const saveToken = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
}

