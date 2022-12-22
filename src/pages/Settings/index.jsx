import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Youracc from './Youracc'
import arrowleft from '../../assets/settings-images/arrow-left.png'
import arrow from '../../assets/settings-images/Vector.png';


function Settings() {
   const [activ, setActiv] = useState('');
   const navigate = useNavigate()

 return (
   <div>
 <div className = {styles.settingsweld}> 
    <div> 
     <h3>Settings</h3>
      <div > 
       <div className = {styles.settings_div_acc}> <Link to="/settings">Your account</Link> <img src = {arrow} alt = ''/></div>
       <div className = {styles.settings_div}> <Link to="/security-settings">Security and account access </Link><img src = {arrow} alt = ''/> </div>
       <div className = {styles.settings_div}><p>Notification</p> <img src = {arrow} alt = ''/> </div>
       <div className = {styles.settings_div}> <p>Privacy and safety</p> <img src = {arrow} alt = ''/></div>
       <div className = {styles.settings_div}> <p>Accessibility, display and language</p> <img src = {arrow} alt = ''/></div>
      </div>
    </div>

    <div >
    <Youracc />
     </div>
 </div>
            <div className = {styles.show}>
         { activ === '' &&   
         <div className = {styles.youracc_mobile}>

            <div className = {styles.arrowset}>
        <div onKeyDown = {() => navigate(-1)} onClick = {() => navigate(-1)} role = "button" tabIndex = {0}> <img src = {arrowleft} alt = ''/> </div>
         <h3>Settings</h3>
         </div>

         <div onKeyDown = {() => setActiv('accinfo')} onClick = {() => setActiv('accinfo')} role = 'button' tabIndex = {0} className = {styles.set}>
         <div>
         <p className = {styles.p_main}>Your account</p>
         <p className = {styles.p_sub}>See information about your account like email address</p>
         </div>
         <img src = {arrow} alt = ''/>
         </div>
         <hr/>

          <div className = {styles.set}>
          <div>
         <p className = {styles.p_main}>Security</p>
         <p className = {styles.p_sub}>Manage your accounts security and keep track of your account usage</p>
         </div>
         <img src = {arrow} alt = ''/>
         </div>
         <hr/>

          <div className = {styles.set}>
          <div>
         <p className = {styles.p_main}>Notification</p>
         <p className = {styles.p_sub}>Select the kinds of notification you get about your activities</p>
         
         </div>
         <img src = {arrow} alt = ''/>
         </div>
         <hr/>

          <div className = {styles.set}>
          <div>
         <p className = {styles.p_main}>Privacy and safety</p>
         <p className = {styles.p_sub}>Manage what information you see and share on Devask</p>
          
         </div>
         <img src = {arrow} alt = ''/>
         </div>
            <hr/>
            </div>
}
{ activ === 'accinfo' &&  <Youracc setActiv = {setActiv} /> }
            </div>
 </div>
 )}

export default Settings