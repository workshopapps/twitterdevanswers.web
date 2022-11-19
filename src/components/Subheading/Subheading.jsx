import React from "react";
import styles from "./Subheading.module.css";

const Subheading = () => {
  return (
    <div className={styles.subheading}>
      <h5>What Are Cookies?</h5>
      <p>
        As is common practice with almost all professional websites this site
        uses cookies, which are tiny files that are downloaded to your computer,
        to improve your experience. This page describes what information they
        gather, how we use it and why we sometimes need to store these cookies.
        We will also share how you can prevent these cookies from being stored
        however this may downgrade or 'break' certain elements of the sites
        functionality.
      </p>
      <h5>How We Use Cookies</h5>
      <p>
        We use cookies for a variety of reasons detailed below. Unfortunately in
        most cases there are no industry standard options for disabling cookies
        without completely disabling the functionality and features they add to
        this site. It is recommended that you leave on all cookies if you are
        not sure whether you need them or not in case they are used to provide a
        service that you use.
      </p>
      <h5>Disabling Cookies</h5>
      <p>
        You can prevent the setting of cookies by adjusting the settings on your
        browser (see your browser Help for how to do this). Be aware that
        disabling cookies will affect the functionality of this and many other
        websites that you visit. Disabling cookies will usually result in also
        disabling certain functionality and features of the this site. Therefore
        it is recommended that you do not disable cookies.
      </p>
      <h5>The Cookies We Set</h5>
      <h5 className={styles.listheading}>Account related cookies</h5>
      <ul>
        <li>
          <p>
            If you create an account with us then we will use cookies for the
            management of the signup process and general administration. These
            cookies will usually be deleted when you log out however in some
            cases they may remain afterwards to remember your site preferences
            when logged out.
          </p>
        </li>
      </ul>
      <h5 className={styles.listheading}>Login related cookies</h5>
      <ul>
        <li>
          <p>
            We use cookies when you are logged in so that we can remember this
            fact. This prevents you from having to log in every single time you
            visit a new page. These cookies are typically removed or cleared
            when you log out to ensure that you can only access restricted
            features and areas when logged in.
          </p>
        </li>
      </ul>
      <h5>Email newsletters related cookies</h5>
      <ul>
        <li>
          <p>
            This site offers newsletter or email subscription services and
            cookies may be used to remember if you are already registered and
            whether to show certain notifications which might only be valid to
            subscribed/unsubscribed users.
          </p>
        </li>
      </ul>

      <h5>Orders processing related cookies</h5>
      <ul>
        <li>
          <p>
            This site offers e-commerce or payment facilities and some cookies
            are essential to ensure that your payment is remembered between
            pages so that we can process it properly.
          </p>
        </li>
      </ul>

      <h5>Surveys related cookies</h5>
      <ul>
        <li>
          <p>
            From time to time we offer user surveys and questionnaires to
            provide you with interesting insights, helpful tools, or to
            understand our user base more accurately. These surveys may use
            cookies to remember who has already taken part in a survey or to
            provide you with accurate results after you change pages.
          </p>
        </li>
      </ul>

      <h5>Forms related cookies</h5>
      <ul>
        <li>
          <p>
            When you submit data to through a form such as those found on
            contact pages or comment forms cookies may be set to remember your
            user details for future correspondence.
          </p>
        </li>
      </ul>

      <h5>Site preferences cookies</h5>
      <ul>
        <li>
          <p>
            In order to provide you with a great experience on this site we
            provide the functionality to set your preferences for how this site
            runs when you use it. In order to remember your preferences we need
            to set cookies so that this information can be called whenever you
            interact with a page is affected by your preferences.
          </p>
        </li>
      </ul>

      <h5>Third Party Cookies</h5>
      <ul>
        <li>
          <p>
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>
        </li>

        <li>
          <p>
            This site uses Google Analytics which is one of the most widespread
            and trusted analytics solution on the web for helping us to
            understand how you use the site and ways that we can improve your
            experience.
          </p>
        </li>
        <li>
          <p>
            These cookies may track things such as how long you spend on the
            site and the pages that you visit so we can continue to produce
            engaging content. For more information on Google Analytics cookies,
            see the official Google Analytics page.
          </p>
        </li>
        <li>
          <p>
            Third party analytics are used to track and measure usage of this
            site so that we can continue to produce engaging content. These
            cookies may track things such as how long you spend on the site or
            pages you visit which helps us to understand how we can improve the
            site for you.
          </p>
        </li>
        <li>
          <p>
            From time to time we test new features and make subtle changes to
            the way that the site is delivered. When we are still testing new
            features these cookies may be used to ensure that you receive a
            consistent experience whilst on the site whilst ensuring we
            understand which optimisations our users appreciate the most.
          </p>
        </li>
        <li>
          <p>
            As we sell products it's important for us to understand statistics
            about how many of the visitors to our site actually make a purchase
            and as such this is the kind of data that these cookies will track.
            This is important to you as it means that we can accurately make
            business predictions that allow us to monitor our advertising and
            product costs to ensure the best possible price.
          </p>
        </li>
        <li>
          <p>
            We also use social media buttons and/or plugins on this site that
            allow you to connect with your social network in various ways. For
            these to work the following social media sites including;{" "}
            {/* {(Twitter, Facebook, WhatsApp)}, will set cookies through our site */}
            which may be used to enhance your profile on their site or
            contribute to the data they hold for various purposes outlined in
            their respective privacy policies.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Subheading;
