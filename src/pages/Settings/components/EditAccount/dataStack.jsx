import React from "react";
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */

export default function Stack(){
    return(
        <>
            <option value="Select Stack" selected="selected">Select Stack</option> 
            <option value="Frontend">Frontend</option> 
            <option value="Backend">Backend</option> 
            <option value="Full Stack">Full Stack</option> 
           
        </>
    )
}