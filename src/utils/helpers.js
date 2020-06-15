import { message, Button } from 'antd';
import _ from "lodash";

//function from ant design to display error message
export const errorMessage = (args) => {
    message.error(args);
    message.config({
        top: 200,
        duration: 4,
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