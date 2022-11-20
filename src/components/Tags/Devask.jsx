import styles from './devask.module.css';


import likeicon from '../../assets/Vector.png'
import commenticon from '../../assets/message.png'
import shareicon from '../../assets/Vector (3).png'
import clock from '../../assets/clock.png'

const Devask = ({Data}) => {

 const {image , user, title, tweet, likes, comments, date } = Data

  return (
    
     
      <main  >
           <div className={styles.dev__ask}> 
                          <h2 className >{title}</h2>
               <p>{tweet}</p>

               <div className = {styles.dev__flexitem}>
               <img src={commenticon} alt="" /> <span>{comments}</span>
               <img src={likeicon} alt="" /> <span>{likes}</span>
               <img src={shareicon} alt="" />
               </div>
              

             <div className={styles.dev__askitem}>
                
              <div className={styles.dev__flexitem}><img src= {image} alt="" /> <span className = {styles.user}>{user}</span></div> 
                <div className = {styles.dev__flexitem}><img src={clock} alt="" /><span>{date}</span></div>

             </div>


           </div>
      </main>
  
    
  );
}

export default Devask;
