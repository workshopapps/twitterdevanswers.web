import React, { useState} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import profile from '../../assets/settings-images/profile.png';
import key from '../../assets/settings-images/key.png';
import infocircle from '../../assets/settings-images/info-circle.png';
import arrow from '../../assets/settings-images/Vector.png';
 import arrowleft from '../../assets/settings-images/arrow-left.png'
import Changep from './Changep';
import Accinfo from './Accinfo';
import Deactivate from './Deactivate';

function Youracc({setActiv}) {
   const [active, setActive] = useState('');

   const handleBack = () => {
   setActiv('')
}

   return (
      <div>
      { active === '' &&
      <div className = {styles.youracc_mobile}>
      <div className = {styles.arrowset}>   
      <div className = {styles.arrowimg} onKeyDown = {handleBack} onClick = {handleBack}   role = "button" tabIndex = {0}><img src = {arrowleft} alt = ''/>  </div>
       <h3> Your account </h3>
       </div>
       <p> See information about your account or learn about your deactivation optional </p>
       
       <div onKeyDown = {() => setActive('accinfo')} onClick = {() => setActive('accinfo')} className = {styles.settingsyouraccount} role = "button" tabIndex = {0}> 
            
    <div className = {styles.settings_accountinfo}>
       
       <div> <img className = {styles.profile} src = {profile} alt = '' /> </div>

        <div>
       <h4>Account Information</h4>
       <p className = {styles.p_sub}>See information about your account like email address</p>
       </div>
       </div>

        <div> <img  src = {arrow} alt = '' /> </div> 
       </div>

      <div onKeyDown = {() => setActive('changepass')} onClick = {() => setActive('changepass')} className = {styles.settingsyouraccount} role = "button" tabIndex = {0}> 
            
    <div className = {styles.settings_accountinfo}>
       
       <div> <img className = {styles.profile} src = {key} alt = '' /> </div>

        <div>
       <h4>Change your password</h4>
       <p className = {styles.p_sub}>You can change your password anytime</p>
       </div>
       </div>

        <div> <img  src = {arrow} alt = '' /> </div> 
       </div>
      
         <div onKeyDown = {() => setActive('deactivate')} onClick = {() => setActive('deactivate')} className = {styles.settingsyouraccount} role = "button" tabIndex = {0}> 
            
    <div className = {styles.settings_accountinfo}>
       
       <div> <img className = {styles.profile} src = {infocircle} alt = '' /> </div>

        <div>
       <h4>Deactivate your account</h4>
       <p className = {styles.p_sub}>Discover how you can deactivate your account</p>
       </div>
       </div>

        <div> <img  src = {arrow} alt = '' /> </div> 
       </div>
    
      </div>
}
  { active === 'accinfo' &&  <Accinfo setActive = {setActive} /> }
      { active === 'changepass' &&  <Changep setActive = {setActive} /> }
      { active === 'deactivate' &&  <Deactivate setActive = {setActive} /> }
      </div>
   )
}
 Youracc.defaultProps = {
       setActiv: () => {

       }
    }
    Youracc.propTypes = {
      setActiv: PropTypes.func
    }

export default Youracc;

