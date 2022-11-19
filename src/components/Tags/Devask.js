import './Devask.css';


import likeicon from '../../assets/Vector.png'
import commenticon from '../../assets/message.png'
import shareicon from '../../assets/Vector (3).png'
import clock from '../../assets/clock.pngg'

const Devask = ({Data}) => {

 const {image , user, title, tweet, likes, comments, date } = Data

  return (
    
     
      <main  >
           <div className='dev__ask'> 
                          <h2 className >{title}</h2>
               <p>{tweet}</p>

               <div className = 'dev__flex-item'>
               <img src={commenticon} alt="" /> <span>{comments}</span>
               <img src={likeicon} alt="" /> <span>{likes}</span>
               <img src={shareicon} alt="" />
               </div>
              

             <div className='dev__ask-item'>
                
              <div className='dev__flex-item'><img src= {image} alt="" /> <span>{user}</span></div> 
                <div className = 'dev__flex-item'><img src={clock} alt="" /><span>{date}</span></div>

             </div>


           </div>
      </main>
  
    
  );
}

export default Devask;
