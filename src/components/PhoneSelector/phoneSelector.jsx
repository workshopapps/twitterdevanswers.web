import React,{ useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./style.css"


const PhoneSelector = () =>{
    const [value, setValue] = useState()
    return (
      <PhoneInput
        placeholder="Enter phone number"
        country={'ng'}
        value={"+2348184017753"}
        onChange={setValue}/>
    )
}

export default PhoneSelector