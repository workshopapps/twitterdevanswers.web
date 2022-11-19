import React,{useState ,useEffect} from 'react'
// import EditAccountCSS from "./style.module.css"
import CountrySelector from '../CountrySelector/CountrySelector'
import PhoneSelector from '../PhoneSelector/phoneSelector'
import EditAccountCSS from "./style.module.css"
import TestImage from "../assets/test-img.jfif"

const EditAcccount = () => {

  const[post,setPost]=useState({})
  const [id,setId]=useState(2)



 
  return (
    <div className={EditAccountCSS.editaccount}>
      <div className={EditAccountCSS.tabheading}>
        <h2>Edit Account</h2>
      </div>

      <div className={EditAccountCSS.userinfo}>
        <div className={EditAccountCSS.userprofile}>
            <img className={EditAccountCSS.profileimg} alt='profile picture' src={TestImage}/>
            <div className={EditAccountCSS.editsvg}>
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.25 1.91661C12.447 1.71963 12.6808 1.56337 12.9382 1.45676C13.1956 1.35016 13.4714 1.29529 13.75 1.29529C14.0286 1.29529 14.3044 1.35016 14.5618 1.45676C14.8192 1.56337 15.053 1.71963 15.25 1.91661C15.447 2.11359 15.6032 2.34744 15.7098 2.60481C15.8165 2.86218 15.8713 3.13803 15.8713 3.41661C15.8713 3.69518 15.8165 3.97103 15.7098 4.2284C15.6032 4.48577 15.447 4.71963 15.25 4.91661L5.125 15.0416L1 16.1666L2.125 12.0416L12.25 1.91661Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div className='user-details-form'>
          <form>
            <label>
              Full name
              <input type={"text"} value={"Ayoola Faisal"}  onChange={e =>setId(e.target.value)}
 />
            </label>

            <label>
              Email address
              <input type={"email"} value={"ayoolafaisal@gmail.com"}  />
            </label>

            <label>

              Phone number
              <div className={EditAccountCSS.phonenumberinputs}>
                <PhoneSelector/>
              </div>
            </label>

            <label>
              Location
              <CountrySelector/>

            </label>

            <div className={EditAccountCSS.buttons}>
              <button className={EditAccountCSS.savebtn} type='button'>Save Changes</button>
              <button  className={EditAccountCSS.discardbtn}type='button'>Discard Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditAcccount