/* eslint-disable import/extensions */
import React from 'react'
import Statuscard from '../card-data/statscard/stats'
import Communitycard from '../card-data/communitycard/community'
import CardHeader from '../card-header/index'
import messge from '../../assets/message.png'
import bookmark from '../../assets/bookmark.png'
import clipboard from '../../assets/clipboard-text.png'
import './section2.css'
import CardExtra from '../card-data/extracard/Extracard'
import CardPost from '../card-data/postcard/Postcard'

function ProfileCard() {
  return (
    <div className="profile__card-wrapper">
      <div className="card">
        <CardHeader header="stats" />
        <div className="stats__data">
          <Statuscard
            first={{ value: 45, text: 'Questions' }}
            second={{ value: 1500, text: 'Answers' }}
          />
          <Statuscard
            first={{ value: '33,800', text: 'Reached' }}
            second={{ value: 6500, text: 'Tokens Earned' }}
          />
        </div>
      </div>
      <div className="card posts__wrapper">
        <CardHeader header="Top posts" />
        <CardPost />
      </div>
      <div className="card">
        <CardHeader header="Communities" />
        <Communitycard />
      </div>
      <div className="card">
        <div className="card-btn__wrapper">
          <CardExtra text="Topics" image={messge} />
          <CardExtra text="Bookmarks" image={bookmark} />
          <CardExtra text="Lists" image={clipboard} />
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
