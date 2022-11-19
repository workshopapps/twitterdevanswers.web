import React from 'react';
import CoinIcon from '../../assets/coin.svg';
import TagIcon from '../../assets/tag.svg';

function getNotificationBody (notification) {
  const { question, type, amount, tag, title } = notification;
  if (type === 'like') {
   return <span style={{fontWeight: 300}}>liked <span style={{fontWeight: 400}}>your Response</span></span>;
  }
  if (type === 'reply') {
    return <span>Responded to <b>your Question</b></span>;
  }
  if (type === 'wallet-add') {
   return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <img src={CoinIcon} alt="Coin icon" style={{ marginRight: 10 }} />
      <span style={{fontWeight: 300}}>
        <span style={{ fontWeight: 600 }}>{amount}ETH</span> added to your <span style={{fontWeight: 400}}>Wallet</span>
      </span>
    </span>
   );
  }
  if (type === 'wallet-remove') {
    return (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <img src={CoinIcon} alt="Coin icon" style={{ marginRight: 10 }} />
        <span style={{fontWeight: 300}}><span style={{ fontWeight: 600 }}>{amount}ETH</span> removed from your <span style={{fontWeight: 400}}>Wallet</span></span>
      </span>
    );
  }
  if (type === 'for-you' && !question && tag) {
    return (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {tag ? <img src={TagIcon} alt="tag icon" /> : null}
        <span>&nbsp;{title} {tag ? <b>{`on ${tag}`}</b>: null}</span>
      </span>
    );
  }
  if (type === 'for-you' && question) {
    return <p>asked a question</p>;
  }

  return '';
};

export default getNotificationBody;
