/* eslint-disable react/button-has-type */
import React from 'react'
import './section1.css'
import avatar from '../../assets/avatar.png'
import backIcon from '../../assets/arrow-left.png'
import link from '../../assets/link-2.png'
import location from '../../assets/location.png'
import twitter from '../../assets/twitter.png'
import github from '../../assets/github.png'
import wallet from '../../assets/wallet.png'

function ProfileTopSection() {
  return (
    <div className="profile__top-section">
      <div className="profile__banner">
        <div className="back__icon">
          <img src={backIcon} alt="" className="back-arrow" />
        </div>
        <div className="profile__banner-img" />
      </div>
      <div className="profile__data-wrapper">
        <div className="profile__user-data">
          <div className="profile__data-wrapper">
            <div className="profile__image-wrapper">
              <img src={avatar} alt="" className="profile__image" />
            </div>
          </div>
          <div className="profile__btns">
            <div className="profile__btn-wrapper">
              <div className="btn1">
                <img src={wallet} alt="" className="btn__img" />
              </div>
              <button className="btn2">Edit Profile</button>
            </div>
          </div>
        </div>
        <div className="profile__data-txt">
          <div className="profile__name">Ann Brown</div>
          <div className="profile__username text">@annbrown-dev</div>
          <div className="profile__status">
            Software developer|Dog mum|Coding is life
          </div>
          <div className="profile__date-joined">Joined spetember 2019</div>
          <div className="profile__location">
            <div className="profile__icon-wrapper">
              <img src={location} alt="" className="profile__icon" />
            </div>{' '}
            los angeles carlifonia
          </div>
          <div className="profile__link">
            <div className="profile__icon-wrapper">
              <img src={link} alt="" className="profile__icon" />
            </div>{' '}
            be.net/annbrown
          </div>
          <div className="profile__socials">
            <div className="profile__icon-wrapper">
              <img src={github} alt="" className="profile__icon" />
            </div>
            <div className="profile__icon-wrapper">
              <img src={twitter} alt="" className="profile__icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTopSection
