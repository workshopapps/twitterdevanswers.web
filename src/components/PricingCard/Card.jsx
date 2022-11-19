import React from 'react'
import PropTypes from 'prop-types'
import vector from "../../stories/assets/PricingImages/card-vector.png"
import tickSquare from "../../stories/assets/PricingImages/tick-square.png"
import Button from "../PricingButton/Button"
import "./card.css"

const Card = ({className, text, text1, text2, text3, text4, text5, text6, text7, icon}) => {
  return (
    <div className="Payment-Card">
        <div className="Top-SectionWrapper">
            <div>
                <h4 className="Card-Header-1">{text1}</h4>
                <p className="Card-Header-2">{text2}</p>
                <span className="Card-Header-3">{text3}</span>
            </div>
            <img className="Card-Vector" src={vector} alt="card vector"/>
        </div>
        <Button className={className} text={text} icon={icon}/>
        <div className="Card-Content-Wrapper">
            <span className="Card-Sub-Header">Includes:</span>
            {
            text4 ?
              <p className="Card-Option-1">{text4}</p>
            : ""
            }
            <div className="Card-Option-Wrapper">
                <img className="Card-Option-Square" src={tickSquare} alt="tick square"/>
                <span className="Card-Option">{text5}</span>
            </div>
            <div className="Card-Option-Wrapper" style={{marginTop: "16px"}}>
                <img  className="Card-Option-Square" src={tickSquare} alt="tick square"/>
                <span className="Card-Option">{text6}</span>
            </div>
            <div className="Card-Option-Wrapper" style={{marginTop: "16px"}}>
                <img className="Card-Option-Square"src={tickSquare} alt="tick square"/>
                <span className="Card-Option">{text7}</span>
            </div>
        </div>
        
    </div>
  )
}


Card.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    text4: PropTypes.string,
    text5: PropTypes.string,
    text6: PropTypes.string,
    text7: PropTypes.string
  }

export default Card