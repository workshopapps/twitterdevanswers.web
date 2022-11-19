import React from 'react'
import './Button.css'
import {BUTTON_TYPES} from './Data'


const Button = (props) => {
    const {type, btnText} = props;

const getButtonClass = () => {
    switch (type) {
        case  BUTTON_TYPES.PRIMARY:
            return 'primaryBtn button';

    case BUTTON_TYPES.SECONDARY:
            return 'secondaryBtn';
       default:
       return 'tetiartBtn';
    }
}

  return (
    <button className = {`${getButtonClass()}`}>{btnText}</button>
  )
}

export default Button