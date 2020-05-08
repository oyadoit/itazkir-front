import { message, Button } from 'antd';

//function from ant design to display error message
export const errorMessage = (args) => {
    message.error(args);
    message.config({
        top: 200,
        duration: 4,
        rtl: false,
        
    })
}