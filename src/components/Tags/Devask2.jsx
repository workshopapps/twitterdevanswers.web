import React from 'react'

import styles from './devask2.module.css'

import likeicon from '../../assets/Vector.png'
import commenticon from '../../assets/message.png'
import shareicon from '../../assets/Vector (3).png'
import clock from '../../assets/clock.png'

const Devask2 = ({Data2}) => {
 const {image , user, title, tweet, likes, comments, date } = Data2


  return (
<main  >
           <div className= {styles.dev__ask}>             
              <img src= {image} alt="" /> 
              
             <div className={styles.comp}>
               <p>{user}</p>
               <h2>{title}</h2>
               <p>{tweet}</p>
               
               </div>


<div className = {styles.dev__askwidgets}>

              <div className = {styles.dev__flexitem}>
               <img src={commenticon} alt="" /> <span>{comments}</span>
               <img src={likeicon} alt="" /> <span>{likes}</span>
               <img src={shareicon} alt="" />
               </div>

       <div className = {styles.dev__flexclock}><img src={clock} alt="" /><span>{date}</span></div>
               </div>
             
              
           </div>
      </main>  )
}

export default Devask2