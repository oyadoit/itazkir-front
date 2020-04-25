import { message, Button } from 'antd';

//function from ant design to display error message
export const errorMessage = (args) => {
    message.error(args);
    message.config({
        duration: 3,
        top: 150,
        rtl: true

    })
}