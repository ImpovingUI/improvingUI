import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import SuccessIcon from './icons/SuccessIcon';
import InfoIcon from './icons/InfoIcon';

export const validateIcon = ( variant : string ) =>{
     
     switch ( variant ) {
        case 'success':
            return SuccessIcon
            break;
        case 'error':
            return ErrorIcon
            break;
        case 'info':
            return InfoIcon
            break;

        case 'warning':
            return WarningIcon
            break;
     
        default:
          return SuccessIcon
            break;
     }

}