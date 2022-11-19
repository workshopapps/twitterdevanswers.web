import React from "react"
import slider from "../../stories/assets/PricingImages/slider.png"
import arrow from "../../stories/assets/PricingImages/arrow.png"
import verify from "../../stories/assets/PricingImages/verify.png"
import Button from "../../components/PricingButton/Button"
import Card from "../../components/PricingCard/Card"
import "./pricing.css"

const Pricing = () => (
    <>
    <h4 className="Pricing-Header-Text">Simple And Transparent Pricing </h4>
    <h4 className="Pricing-Header-Sub-Text">We believe DevAsk should be accesible to everyone  </h4>
    <div className="Icons-Wrapper">
        <span className="Month-text">Monthly</span>
        <img className="Slider-Icon" src={slider} alt="slider icon"/>
        <span className="Year-text">Yearly</span>
    </div>
        <Button className="Percent-Button" text="20% OFF"/>
        <img className="Arrow-Icon" src={arrow} alt="arrow icon" />
    <div className="PaymentCard-Wrapper">
        <Card className="Payment-Button-1" text="Subscribed" text1="Free" text2="For one user"  text3="Perfect to test out our features" text5="Free 3 tokens per month for postings" text6="Free 20 starter votes " text7="Wallet connect" icon={verify}/>
        <Card className="Payment-Button-2" text="Subscribe" text1="$4.56" text2="For 1-10 users" text3="Perfect to start-ups and students" text4="Everything in the free plan plus" text5="50 tokens per month" text6="Free 20 starter votes " text7="40 question limit per month"/>
        <Card className="Payment-Button-2" text="Subscribe" text1="$12.45" text2="Unlimited users" text3="Perfect to start-ups and students" text4="Perculiar features only for this plan" text5="Unlimited amount of tokens" text6="Unlimited amount of votes" text7="No question limit"/>
    </div>
    </>
  )



export default Pricing