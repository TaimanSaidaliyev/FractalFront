import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ToastJsx = (text, type) => {
    if(type ==='success'){
        toast.success(text, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log('зашел сююда')
    }
    else if(type ==='like'){
        toast.error(text, {
            icon: ({theme, type}) => <i className="bi bi-heart-fill text-danger" style={{fontSize: '24px'}}></i>,
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
    else if(type ==='error'){
        toast.error(text, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
    else if(type ==='warning'){
        toast.warning(text, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
};

export default ToastJsx;
