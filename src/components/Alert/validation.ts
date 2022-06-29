import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import SuccessIcon from './icons/SuccessIcon';
import InfoIcon from './icons/InfoIcon';
import { PositionEnum, VariantEnum, AlertPropsValidate } from './Alert.interface';

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

export const validateInitProps = ( props: AlertPropsValidate ) => {

    const { position, variant } = props;

    const classPosition = validateEnum( String( position ), PositionEnum, 'top-right' );
    const classVariant = validateEnum( String( variant ), VariantEnum, 'success' );

    return `${classPosition} ${classVariant}`
}


/*
    This function validate an enum values

    @prop: this field is the prop that you want to validate
    @enumObject: this field is the Enum that you want to validatem IMPORTANT: This field have to be a ENUM
    @valueDefault: this field is the value that you want to default value in the prop.

*/
export const validateEnum = ( prop: string | number, enumObject: any, valueDefault : string  ) => {

    let valueCorrect = false
    let finalValue = '';

    // searching if the value of prop exists in the enum
    for (const key in enumObject) {
       if ( prop === key ) {
            valueCorrect = true;
            finalValue = key;
       }
    }

    if ( valueCorrect ) 
        return finalValue;

    // If the value doesn't exist, so the value will be the value of parameter valueDefault
    // Searching if the valueDefault exist in the enum
    for (const key in enumObject) {
        if (key === valueDefault)
            finalValue = key;
    }

    return finalValue;
}