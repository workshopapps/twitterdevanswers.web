import React from 'react'
import './Devask2.css'
import likeicon from '../../assets/Vector.png'
import commenticon from '../../assets/message.png'
import shareicon from '../../assets/Vector (3).png'
import clock from '../../assets/clock.png'

const Devask2 = ({Data2}) => {
 const {image , user, title, tweet, likes, comments, date } = Data2


  return (
<main  >
           <div className='dev-ask'> 

              
              <div><img src= {image} alt="" /></div> 
              
             <div className=''>
               <p>{user}</p>
               <p>{title}</p>
               <p>{tweet}</p>
               
               </div>
<div className = 'dev__ask-widgets'>

              <div className = 'dev__flex-item'>
               <img src={commenticon} alt="" /> <span>{comments}</span>
               <img src={likeicon} alt="" /> <span>{likes}</span>
               <img src={shareicon} alt="" />
               </div>
       <div className = 'dev__flex-item'><img src={clock} alt="" /><span>{date}</span></div>
               </div>
             
              
           </div>
      </main>  )
}

export default Devask2