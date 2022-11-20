import PropTypes from 'prop-types'
import React from 'react'
import styles from  "./button.module.css"

function Button ({className, text, icon})  {
    return (
      <div className={className}>
          <p>{text}</p>
          {
            icon ?
            <img className={styles.VerifyIcon} src={icon} alt="button icon"/>
            : ""
          }
      </div>
    )
  }


  Button.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
  }
  
  export default Button