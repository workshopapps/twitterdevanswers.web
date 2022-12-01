import React from 'react'
import PropTypes from 'prop-types'
import vector from "../../assets/pricing-images/card-vector.png"
import tickSquare from '../../assets/pricing-images/tick-square.png';
import Button from "../PriceButton/Button"
import styles from "./card.module.css"

function Card ({className, text, text1, text2, text3, text4, text5, text6, text7, icon}) {
  return (
    <div className={styles.PaymentCard}>
        <div className={styles.TopSectionWrapper}>
            <div>
                <h4 className={styles.CardHeader1}>{text1}</h4>
                <p className={styles.CardHeader2}>{text2}</p>
                <span className={styles.CardHeader3}>{text3}</span>
            </div>
            <img className={styles.CardVector} src={vector} alt="card vector"/>
        </div>
        <Button className={className} text={text} icon={icon}/>
        <div className={styles.CardContentWrapper}>
            <span className={styles.CardSubHeader}>Includes:</span>
            {
            text4 ?
              <p className={styles.CardOption1}>{text4}</p>
            : ""
            }
            <div className={styles.CardOptionWrapper}>
                <img className={styles.CardOptionSquare} src={tickSquare} alt="tick square"/>
                <span className={styles.CardOption}>{text5}</span>
            </div>
            <div className={styles.CardOptionWrapper} style={{marginTop: "16px"}}>
                <img  className={styles.CardOptionSquare} src={tickSquare} alt="tick square"/>
                <span className={styles.CardOption}>{text6}</span>
            </div>
            <div className={styles.CardOptionWrapper} style={{marginTop: "16px"}}>
                <img className={styles.CardOptionSquare} src={tickSquare} alt="tick square"/>
                <span className={styles.CardOption}>{text7}</span>
            </div>
        </div>
        
    </div>
  )
}


Card.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    text4: PropTypes.string.isRequired,
    text5: PropTypes.string.isRequired,
    text6: PropTypes.string.isRequired,
    text7: PropTypes.string.isRequired,
    icon:  PropTypes.element.isRequired,
  }

export default Card