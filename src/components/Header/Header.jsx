import styles from './header.module.css';
import brandLogo from '../../assets/brand-logo.svg';
import hamburger from '../../assets/hamburger.svg';
import { Link } from 'react-router-dom';

const Header = ({ pathname }) => {
  // header component for excternal pages

  // the pathname prop is the value of pathname property from the object returend by useLocation hook

  // for login and signup pages, i have set up this component to expect the pathname prop to be /login or /signup so that only the signup button is rendered if the user is on the login page and vice versa

  // for other external pages, both login and signup buttons would be present on the header

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img src={brandLogo} alt="brand logo" />
        <span>DevAsk</span>
      </Link>

      <ul className={styles.links}>
        <li>
          <Link className={styles.link} to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>

      {pathname ? (
        <div className={styles.btns}>
          {pathname === '/login' && (
            <Link className={`${styles.btn} ${styles.signUp}`} to="/signup">
              Sign Up
            </Link>
          )}
          {pathname === '/signup' && (
            <Link className={`${styles.btn} ${styles.login}`} to="/login">
              Login
            </Link>
          )}
        </div>
      ) : (
        <div className={styles.btns}>
          <Link className={`${styles.btn} ${styles.signUp}`} to="/signup">
            Sign Up
          </Link>

          <Link className={`${styles.btn} ${styles.login}`} to="/login">
            Login
          </Link>
        </div>
      )}

      <div className={styles.hamburger}>
        <img src={hamburger} alt="hamburger icon" />
      </div>
    </div>
  );
};

export default Header;
