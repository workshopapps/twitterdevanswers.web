import React from 'react';
import LpButton from '../LpButton/LpButton';
import styles from './newsletterSub.module.css';

function NewsletterSub() {
  return (
    <div className={styles.newsletter}>
      <h3>Subscribe to our newletter</h3>
      <p>Stay updated on daily design and coding tips to keep you on track</p>
      <div>
        <input type="text" placeholder="Enter your email address" />
        <div className={styles.btn}>
          <LpButton path="/" text="Subcribe" />
        </div>
      </div>
    </div>
  );
}

export default NewsletterSub;
