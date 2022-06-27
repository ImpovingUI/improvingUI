import { validateEnum } from '../Alert/validation'
import { ModalPropsValidate, SizeEnum } from './Modal.interface'

export const validateInitProps = ( props: ModalPropsValidate) => {
    const { size} = props;

    const classSize = validateEnum (String (size), SizeEnum, 'md');
    return `${classSize}`
}