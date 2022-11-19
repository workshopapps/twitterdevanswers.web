import PropTypes from 'prop-types'
import React from 'react'
import "./button.css"

const Button = ({className, text, icon}) => {
    return (
      <div className={className}>
          <p>{text}</p>
          {
            icon ?
            <img className="Verify-Icon" src={icon} alt="button icon"/>
            : ""
          }
      </div>
    )
  }


  Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
  }
  
  export default Button