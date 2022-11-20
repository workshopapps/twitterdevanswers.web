import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as TagIcon } from '../../assets/tagIcon.svg';
import { ReactComponent as UsersIcon } from '../../assets/user.svg';
import { ReactComponent as WalletIcon } from '../../assets/wallet.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import styles from './internalFooter.module.css';

export default function InternalFooter() {
  // footer component for internal pages. only avaible on mobile screens

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
    <div className={styles.footerContainer}>
      <ul className={`${styles.footer} lpContainer`}>
        <li>
          <NavLink to="/" style={linkStyle} className={activeStyle}>
            <HomeIcon className={styles.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags-page" style={linkStyle} className={activeStyle}>
            <TagIcon className={styles.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink style={linkStyle} to="/users-page" className={activeStyle}>
            <UsersIcon className={styles.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/wallet" style={linkStyle} className={activeStyle}>
            <WalletIcon className={styles.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" style={linkStyle} className={activeStyle}>
            <SettingsIcon className={styles.icon} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
