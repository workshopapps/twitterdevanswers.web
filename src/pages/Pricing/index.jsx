import React, { useState } from "react";
import arr from "../../assets/pricing-images/arr.png"
import discount from "../../assets/pricing-images/price.png"
import styles from "./style.module.css"

function Pricing () {
    const [monthly, setMonthly] = useState(true);
    const [yearly, setYearly] = useState(false);
    const [subscribeBronze, setSubscribeBronze] = useState("Subscribe");
    const [subscribeSilver, setSubscribeSilver] = useState("Subscribe");
    const [subscribeGold, setSubscribeGold] = useState("Subscribe");

    function togglePlanA(){
            setMonthly(!monthly);
            setYearly(true);
    }
    function togglePlanB(){
            setYearly(!yearly);
            setMonthly(true);
    }
    function handleSubscribeBronze(){
        if (subscribeBronze === "Subscribe"){
            setSubscribeBronze("Subscribed");
        } 
        if (subscribeBronze !== "Subscribe"){
            setSubscribeBronze("Subscribe")
        }
    }
    function handleSubscribeSilver(){
        if (subscribeSilver === "Subscribe"){
            setSubscribeSilver("Subscribed");
        } 
        if (subscribeSilver !== "Subscribe"){
            setSubscribeBronze("Subscribe")
        }
    }
    function handleSubscribeGold(){
        if (subscribeGold === "Subscribe"){
            setSubscribeGold("Subscribed");
        } 
        if (subscribeGold !== "Subscribe"){
            setSubscribeGold("Subscribe")
        }
    }

    return (
        <div>
        <main className={styles.MainSection}>
        <h4 className={styles.PricingHeaderText}>Simple And Transparent Pricing </h4>
        <h4 className={styles.PricingHeaderSubText}>We believe DevAsk should be accesible to everyone  </h4>
        <div className={styles.PricePlans}>
            <section className={styles.DiscountSection}>
                <img className={styles.Discount} src={discount} alt="discount" />
                <img className={styles.Arrow} src={arr} alt="arrow" />
            </section>
        <section className={styles.Slider}>

            <span>Monthly</span>
           <form className={styles.ToggleDiv}>
            { monthly &&
                <button type="submit" onClick={togglePlanA} className={styles.PlanA}>&#9704;</button> 
                 
                
            }
            {
                yearly &&
                <button type="submit" onClick={togglePlanB} className={styles.PlanB}>&#9703;</button> 
            }
            </form>
            <span>Yearly</span>
        </section>
        </div>
        <section className={styles.PriceBoxSection}>
                <div className={styles.Bronze}>
                    <h1>Bronze</h1>
                    <i>For one user</i>
                    <p>Perfect to test out our features</p>
                    <button type="submit" onClick={handleSubscribeBronze}>{subscribeBronze}</button>
                    <p>Includes:</p>
                        <li>&#9745; Get up to 20 Starter Votes</li>
                        <li>&#9745; Free 6 Questions</li>
                        <li>&#9745; Access to Premium Posts</li>

                </div>
                <div className={styles.Silver}>
                <h1>Silver</h1>
                    <i>For one user</i>
                    <p>Perfect to test out our features</p>
                    <button type="submit" onClick={handleSubscribeSilver}>{subscribeSilver}</button>
                    <p>Includes:</p>
                        <li>&#9745; Get up to 20 Starter Votes</li>
                        <li>&#9745; Free 6 Questions</li>
                        <li>&#9745; Access to Premium Posts</li>

                </div>
                <div className={styles.Gold}>
                <h1>Gold</h1>
                    <i>For one user</i>
                    <p>Perfect to test out our features</p>
                    <button type="submit" onClick={handleSubscribeGold}>{subscribeGold}</button>
                    <p>Includes:</p>
                        <li>&#9745; Get up to 20 Starter Votes</li>
                        <li>&#9745; Free 6 Questions</li>
                        <li>&#9745; Access to Premium Posts</li>

                </div>
            </section>
            </main>
        </div>
    )
}
  
  



export default Pricing