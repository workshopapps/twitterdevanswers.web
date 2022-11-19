import { useEffect, useState } from 'react';
import { notifications } from './constants';
import CoinIcon from '../../assets/coin.svg';
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
          const questionDisplayName = question?.from?.displayName;
          //const questionUsername = question?.from?.username;
          const avatar = notification?.from?.avatar || question?.from?.avatar;

          console.log(questionDisplayName, displayName);

          const typeText =
            type === 'like' ?
              <span>liked your Response</span>
              : type === 'reply' ?
                <span>Responded to <a href="#"><b>your Question</b></a></span>
              : type === 'wallet-add' ?
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={CoinIcon} alt="Coin icon" style={{ marginRight: 10 }} />
                    <span><span style={{ fontWeight: 'bolder' }}>{amount}</span> added to your <b>Wallet</b></span>
                  </span>
                : type === 'wallet-remove' ?
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={CoinIcon} alt="Coin icon" style={{ marginRight: 10 }} />
                      <span><span style={{ fontWeight: 'bolder' }}>{amount}</span> removed from your <b>Wallet</b></span>
                    </span>
                  : type === 'for-you' && !question ?
                      <span>{title} {tag ? <b>{`on ${tag}`}</b> : null}</span>
                    : type === 'for-you' && question ?
                        <p>asked a question</p>
                      : null;
          
          return (
            <div key={i} className={`${styles.notification_item} ${unread ? styles.unread : ''}`}>
              {question && !type.includes('wallet') ?
                <div>
                  <div className={styles.from_section}>
                    {avatar ? <img src={avatar} alt="User's avatar" /> : null}
                    <div>
                      <p className={styles.name}>
                        <b>{displayName}</b> <span style={{color: `${unread ? '#1818B4' : 'initial'}`}}>@{username}</span>
                      </p>
                      {typeText}
                      {question ? 
                        <div>
                          <h2>{question.title}</h2>
                          <p>{question.body}</p>
                        </div>
                      : null}
                    </div>
                  </div>
                </div>
              : typeText}
            </div>
          )
        })}
      </section>
    </main>
  );
};

export default Notifications;