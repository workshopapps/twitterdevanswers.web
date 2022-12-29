import React, { useState } from "react";
import arr from "../../assets/pricing-images/arr.png";
import discount from "../../assets/pricing-images/price.png";
import Free from "../../assets/pricing-images/free.png";
import Standard from "../../assets/pricing-images/standard.png";
import Premium from "../../assets/pricing-images/premium.png";
import styles from "./style.module.css";

function Pricing () {
    const [monthly, setMonthly] = useState(true);
    const [yearly, setYearly] = useState(false);

    function togglePlanA(){
            setMonthly(!monthly);
            setYearly(true);
    }
    function togglePlanB(){
            setYearly(!yearly);
            setMonthly(true);
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
                <div className={styles.Free}>
                    <section className={styles.FreeSectionA}>
                    <img src={Free} alt="free" />
                    <h1>$0</h1>
                    <li>NO CREDIT CARD REQUIRED</li>
                    <li>Everything you need as an individual to get your questions answered.</li>
                    </section>
                    <section className={styles.FreeSectionB}>
                    <button type="submit">Get Started</button>
                        <li>&#10003; Free 100 tokens</li>
                        <li>&#10003; Ask and answer questions</li>
                        <li>&#10003; Intelligent search across all content types</li>
                        <li>&#10003; Personalized recommendation for uncovering knowledge</li>

                 </section>
                </div>
                <div className={styles.Standard}>
                    <section className={styles.StandardSectionA}>
                <img src={Standard} alt="standard" />
                <h1>$20</h1>
                <li>PER MONTH</li>
                <li>Everything you need as an individual to get your questions answered.</li>
                </section>
                <section className={styles.StandardSectionB}>
                    <button type="submit">Get Started</button>
                        <li>&#10003; Free 100 tokens</li>
                        <li>&#10003; Ask and answer questions</li>
                        <li>&#10003; Comment, like and reply posts</li>
                        <li>&#10003; Intelligent search across all content types</li>
                        <li>&#10003; Personalized recommendation for uncovering knowledge</li>
                        <li>&#10003; Join and create communities</li>
                </section>
                </div>
                <div className={styles.Premium}>
                    <section className={styles.PremiumSectionA}>
                <img src={Premium} alt="premium" />
                <h1>$200</h1>
                <li>PER YEAR</li>
                <li>Everything you need as an individual to get your questions answered.</li>
                </section>
                <section className={styles.PremiumSectionB}>
                    <button type="submit">Get Started</button>
                        <li>&#10003; Free 100 tokens</li>
                        <li>&#10003; Ask and answer questions</li>
                        <li>&#10003; Comment, like and reply posts</li>
                        <li>&#10003; Intelligent search across all content types</li>
                        <li>&#10003; Personalized recommendation for uncovering knowledge</li>
                        <li>&#10003; Join and create communities</li>
                        <li>&#10003; Receive and send direct messages</li>
                </section>
                </div>
            </section>
            </main>
        </div>
    )
}
  
  



export default Pricing