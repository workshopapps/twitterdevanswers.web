import React from "react"
import slider from "../../assets/pricing-images/slider.png"
import arrow from '../../assets/pricing-images/arrow.png';
import verify from '../../assets/pricing-images/verify.png';
import Button from "../../components/PriceButton/Button"
import Card from "../../components/PriceCard/Card"
import styles from "./style.module.css"

function Pricing () {
    return (
        <>
        <h4 className={styles.PricingHeaderText}>Simple And Transparent Pricing </h4>
        <h4 className={styles.PricingHeaderSubText}>We believe DevAsk should be accesible to everyone  </h4>
        <div className={styles.IconsWrapper}>
            <span className={styles.Monthtext}>Monthly</span>
            <img className={styles.SliderIcon} src={slider} alt="slider icon"/>
            <span className={styles.Yeartext}>Yearly</span>
        </div>
            <Button className={styles.PercentButton} text="20% OFF"/>
            <img className={styles.ArrowIcon} src={arrow} alt="arrow icon" />
        <div className={styles.PaymentCardWrapper}>
            <Card className={styles.PaymentButton1} text="Subscribed" text1="Free" text2="For one user"  text3="Perfect to test out our features" text5="Free 3 tokens per month for postings" text6="Free 20 starter votes " text7="Wallet connect" icon={verify}/>
            <Card className={styles.PaymentButton2} text="Subscribe" text1="$4.56" text2="For 1-10 users" text3="Perfect to start-ups and students" text4="Everything in the free plan plus" text5="50 tokens per month" text6="Free 20 starter votes " text7="40 question limit per month"/>
            <Card className={styles.PaymentButton2} text="Subscribe" text1="$12.45" text2="Unlimited users" text3="Perfect to start-ups and students" text4="Perculiar features only for this plan" text5="Unlimited amount of tokens" text6="Unlimited amount of votes" text7="No question limit"/>
        </div>
        </>
    )
}
  
  



export default Pricing