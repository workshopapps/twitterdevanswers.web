import styles from './footer.module.css';
import brandLogo from '../../assets/brand-logo-footer.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  // footer component for external pages

  return (
    <div className={styles.footer}>
      <div className={styles.brandSocials}>
        <div className={styles.brand}>
          <img src={brandLogo} alt="brand logo" />
          <span>DevAsk</span>
        </div>
        <p>Follow us on all social media platforms</p>
        <div className={styles.socials}>
          <img src={facebook} alt="facebook logo" />
          <img src={twitter} alt="twitter logo" />
          <img src={instagram} alt="instagram logo" />
        </div>
      </div>

      <div className={styles.product}>
        <p>Product</p>
        <Link to="/" className={styles.link}>
          Team
        </Link>
        <Link to="/" className={styles.link}>
          Advertising
        </Link>
      </div>

      <div className={styles.company}>
        <p>Company</p>
        <Link to="/" className={styles.link}>
          About
        </Link>
        <Link to="/" className={styles.link}>
          Blog
        </Link>
        <Link to="/" className={styles.link}>
          Careers
        </Link>
        <Link to="/" className={styles.link}>
          Pricing
        </Link>
      </div>

      <div className={styles.devAsk}>
        <p>More on DevAsk</p>
        <Link to="/" className={styles.link}>
          Privacy Policy
        </Link>
        <Link to="/" className={styles.link}>
          Terms of Use
        </Link>
        <Link to="/" className={styles.link}>
          Cookie Policy
        </Link>
        <Link to="/" className={styles.link}>
          API
        </Link>
      </div>

      <div className={styles.support}>
        <p>Support</p>
        <Link to="/" className={styles.link}>
          How it Works
        </Link>
        <Link to="/" className={styles.link}>
          Help Centre
        </Link>
        <Link to="/" className={styles.link}>
          FaQ's
        </Link>
      </div>
    </div>
  );
};

export default Footer;
