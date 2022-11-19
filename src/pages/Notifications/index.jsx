import { useEffect, useState } from 'react';
import { notifications } from './constants';

import CoinIcon from '../../assets/coin.svg';
import HorizontalMoreIcon from '../../assets/more-icon.svg';
import TagIcon from '../../assets/tag.svg';

import styles from './styles.module.css';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notificationsToDisplay, setNotificationsToDisplay] = useState(notifications);

  useEffect(() => {
    if (activeTab === 'all') {
      setNotificationsToDisplay(notifications);
    } else if (activeTab === 'unread') {
      setNotificationsToDisplay(notifications.filter((n) => n.unread));
    }
  }, [activeTab]);

  return (
    <main className={styles.main}>
      <h1 className={styles.main_heading}>Notifications ({notifications.length})</h1>

      <nav>
        <button
          className={`${styles.tab} ${activeTab === 'all' ? styles.active_tab : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'unread' ? styles.active_tab : ''}`}
          onClick={() => setActiveTab('unread')}
        >
          Unread
        </button>
      </nav>

      <section className={styles.notifications_list}>
        {notificationsToDisplay?.map((notification, i) => {
          const { question, type, amount, tag, title, unread } = notification;
          const username = notification?.from?.username || question?.from?.username;
          const displayName = notification?.from?.displayName || question?.from?.displayName;
          const avatar = notification?.from?.avatar || question?.from?.avatar;

          const typeText =
            type === 'like' ?
              <span style={{fontWeight: 300}}>liked <span style={{fontWeight: 400}}>your Response</span></span>
              : type === 'reply' ?
                <span>Responded to <a href="#"><b>your Question</b></a></span>
              : type === 'wallet-add' ?
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={CoinIcon} alt="Coin icon" style={{ marginRight: 10 }} />
                    <span style={{fontWeight: 300}}><span style={{ fontWeight: 600 }}>{amount}ETH</span> added to your <span style={{fontWeight: 400}}>Wallet</span></span>
                  </span>
                : type === 'wallet-remove' ?
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={CoinIcon} alt="Coin icon" style={{ marginRight: 10 }} />
                      <span style={{fontWeight: 300}}><span style={{ fontWeight: 600 }}>{amount}ETH</span> removed from your <b>Wallet</b></span>
                    </span>
                  : type === 'for-you' && !question && tag ?
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        {tag ? <img src={TagIcon} alt="tag icon" /> : null}
                        <span>&nbsp;{title} {tag ? <b>{`on ${tag}`}</b>: null}</span>
                      </span>
                    : type === 'for-you' && question ?
                        <p>asked a question</p>
                      : null;
          
          return (
            <div key={i} className={`${styles.notification_item} ${unread ? styles.unread : ''}`}>
              <div>
                <div className={styles.from_section}>
                  {avatar ? <img src={avatar} alt="User's avatar" className={styles.avatar} /> : null}
                  <div>

                    {displayName && username ?
                      <p className={styles.name}>
                        <b>{displayName}</b>&nbsp;
                        <span style={{color: `${unread ? '#1818B4' : '#989898'}`, fontWeight: 400}}>
                          @{username}
                        </span>
                      </p>
                    : null}

                    {typeText}

                    <div>
                      {question ? 
                        <div className={styles.question_section}>
                          <h2>{question?.title?.length > 180 ? `${question.title.substring(0, 180)}...}` : question?.title}</h2>
                          <p>{question?.body?.length > 180 ? `${question.body.substring(0, 180)}...` : question?.body}</p>
                        </div>
                      : null}
                      <p className={styles.timestamp} style={{color: `${unread ? '#1818B4' : '#989898'}`, fontWeight: 400}}>
                        {unread ? '36 secs' : '1 hr ago'}
                      </p>
                    </div>
                  </div>
                  <img src={HorizontalMoreIcon} alt="Horizontal more icon" className={styles.more_icon} />
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  );
};

export default Notifications;