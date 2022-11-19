import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as TagIcon } from '../../assets/tagIcon.svg';
import { ReactComponent as UsersIcon } from '../../assets/user.svg';
import { ReactComponent as WalletIcon } from '../../assets/wallet.svg';
import { ReactComponent as SortIcon } from '../../assets/sort.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import { ReactComponent as NotificationIcon } from '../../assets/notification.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import avatar from '../../assets/avatar.svg';
import { Link, NavLink } from 'react-router-dom';
import brandLogo from '../../assets/brand-logo.svg';
import styles from './internalHeader.module.css';

const InternalHeader = () => {
  //header component for internal pages

  const activeStyle = ({ isActive }) =>
    isActive ? styles.isActive : undefined;

  const linkStyle = {
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '28px',
    color: '#4343de',
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.brand}>
          <img src={brandLogo} alt="brand logo" />
          <span>DevAsk</span>
        </Link>
        <div className={styles.search}>
          <SearchIcon />
          <input type="text" placeholder="Search questions..." />
        </div>
      </div>

      <div className={styles.right}>
        <ul className={styles.links}>
          <li>
            <NavLink to="/" style={linkStyle} className={activeStyle}>
              <div className={styles.link}>
                <HomeIcon className={styles.icon} />
                <span>Home</span>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to={'/tag'} style={linkStyle} className={activeStyle}>
              <div className={styles.link}>
                <TagIcon className={styles.icon} /> <span>Tag</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink style={linkStyle} to="/users" className={activeStyle}>
              <div className={styles.link}>
                <UsersIcon className={styles.icon} /> <span>Users</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wallet" style={linkStyle} className={activeStyle}>
              <div className={styles.link}>
                <WalletIcon className={styles.icon} /> <span>Wallet</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" style={linkStyle} className={activeStyle}>
              <div className={styles.link}>
                <SettingsIcon className={styles.icon} /> <span>Settings</span>
              </div>
            </NavLink>
          </li>
        </ul>
        <div className={styles.rest}>
          <NavLink to="/notifications" className={activeStyle}>
            <NotificationIcon className={styles.icon} />
          </NavLink>
          <SortIcon className={styles.sortIcon} />
          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src={avatar} alt="avatar" />
            </div>
            <div className={styles.nameStatus}>
              <p>Kayla Nicole</p>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalHeader;
