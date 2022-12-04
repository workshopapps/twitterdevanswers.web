import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import stackoverflow from "../../assets/aboutus-images/stackoverflow.png";
import css from "../../assets/aboutus-images/css.png";
import html from "../../assets/aboutus-images/html.png";
import twitter from "../../assets/aboutus-images/twitter.png";
import figma from "../../assets/aboutus-images/figma.png";
import first from "../../assets/aboutus-images/first.png";
import second from "../../assets/aboutus-images/second.png";
import one from "../../assets/aboutus-images/one.png";
import two from "../../assets/aboutus-images/two.png";
import three from "../../assets/aboutus-images/three.png";

function AboutUs (){
    return(
        <div className={styles.AboutUs}>
            <main className={styles.AboutMainSection}>
            <section className={styles.FirstSection}>
                <div className={styles.TextArea}>
                    <b className={styles.Header}>Fostering Innovation with the  Right solution</b>
                    <p>Join a community of over 100+ tech professionals available to work with you. 
                        Ever got stuck on a line of code which took you a few minutes to resolve? Devask is bridging that gap with over 100+ tech professionals available to answer your questions realtime.
                        No credit card required - Free trial tokens - Cancel anytime.</p>
                    <Link to="sign-up"><button type="submit">Get Started</button></Link>
                </div>
                <div className={styles.ImageDiv}>
                    <img className={styles.FirstImage} src={first} alt="first" />
                </div>
            </section>
            <section className={styles.SecondSection}>
                <div>
                    <h1 className={styles.OurStory}>Our Story</h1>
                </div>
                <div className={styles.SecondSectionDiv2}>
                    <p className={styles.SecondSectionPar}>Devask consists of a team of 73 amazing humans living across Africa with a single goal of creating a solution that allows tech enthusiasts get real time solution to their tech problems and seeing innovative solutions come alive from solutions gotten from our platform
                    We are happy to tell our story as being a startup that came to stardom with mentorship support from HNG bootcamp which brought together the team that curated the Devask that we have today. An exciting moment for us, as we look forward to bringing more innovative solutions your way.
                    At Devask, we are committed to team growth as well as building a work environment that is inclusive of people of all backgrounds.We are committed to delivering quality and amazing products and instilling a sense of community that connects our customers and team together.
                    </p>
                    <img className={styles.SecondImage} src={second} alt="second" />
                </div>
            </section>
            <section className={styles.ThirdSection}>
                <div>
                    <img src={stackoverflow} alt="stactoverflow" />
                    <img src={twitter} alt="twitter" />
                    <img src={figma} alt="figma" />
                    <img src={css} alt="css" />
                    <img src={html} alt="html" />
                </div>
            </section>
            <section className={styles.FourthSection}>
                <div>
                    <h1 className={styles.OurPrinciples}>Our Principles</h1>
                </div>
                <div className={styles.FourthSectionDiv2}>
                    <section className={styles.One}>
                        <img src={one} alt="one" />
                        <h3>Team growth</h3>
                        <p>We are building a company focused on team growth as well as looking after the happiness and satisfaction of our dear customers.</p>
                    </section>
                    <section className={styles.Two}>
                        <img src={two} alt="two" />
                        <h3>Customer Centric</h3>
                        <p>We are customer focused and we keep evolving to meet the daily needs of our customers.</p>
                    </section>
                    <section className={styles.Two}>
                        <img src={three} alt="three" />
                        <h3>Diversity and Inclusion</h3>
                        <p>We are building a work environment that is inclusive of people of all backgrounds.</p>
                    </section>
                </div>
                <section className={styles.FifthSection}>
                    <h1 className={styles.HowFar}>How far we have come</h1>
                    <div className={styles.FifthSectionDiv2}>
                        <section>
                            <h1>500+</h1>
                            <p>Acive members</p>
                        </section>
                        <section>
                            <h1>200+</h1>
                            <p>Daily quesions</p>
                        </section>
                        <section>
                            <h1>400+</h1>
                            <p>Possible Answers</p>
                        </section>
                    </div>
                </section>
                <section className={styles.NewsLetter}>
                    <h1>Subscribe to our newsletter</h1>
                    <p>Stay updated on our daily design and coding tips, to keep <br />your on track!</p>
                    <div className={styles.NewsLetterDiv2}>
                        <input type="email" name="email" id="email" required placeholder="Enter your email address" />
                        <button type="submit">Subscribe</button>
                    </div>
                </section>
            </section>
            </main>
        </div>
    )
}

export default AboutUs;