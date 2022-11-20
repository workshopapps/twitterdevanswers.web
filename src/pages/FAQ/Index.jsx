import React ,{useState} from 'react'
import web from  '../../assets/images/web.png'
import email from '../../assets/images/email.png'
import folder from '../../assets/images/folder.png'
import search from '../../assets/images/search-normal.png'
import arrowleft from '../../assets/images/arrowleft.png'
 import arrowdown from '../../assets/images/Vector@2x.png'
import './Style.css'
import  Accordion  from '../../components/accordion/Accordion'

function Index() {
        
        const [isOpen2, setIsOpen2] = useState(false)
        const [isOpen3, setIsOpen3] = useState(false)
        const [setHeight,setHeightActive] = useState("0px")

        const [showItems,setShowItems] =useState(false)

        function handleShow(){
            setShowItems(!showItems)

        }

  return (
      <div className="faq__section">
          <div className="container section__container">
              <div className="section__text_upper">
                  <div className="arrowUp__text">
                      <img src={arrowleft} alt="arrowleft" />
                      <span>FAQ</span>
                  </div>
                  <h3 className ='faq__text'>FAQ and Support</h3>
                  <h2 className='faq__text_2'>Have Any Questions?</h2>
                  <p className="text__p">
                      Didn’t find what you are looking for?contact our support center.
                  </p>
                  <div className="section__img_socials">
                      <div className="section__img_icons">
                          <img src={web} alt="web"/> <span className="icon__text">Go to our website</span>
                      </div>
                     
                      <div className="section__img_icons">
                          <img src={email} alt="folder" /> <span  className="icon__text">Terms of Service</span>
                      </div>
                      <div className="section__img_icons">
                          <img src={folder} alt="folder" /> <span  className="icon__text">Terms of Service</span>
                      </div>
                      
                  </div>
                  <div type="button" className="section__search" >
                      <img src={search} alt="search" /> <input type="text" placeholder='search in DevAsk'
                      className="input__search"/>
                  </div>
              </div>
              <div className='accordion__sections_main' >
                   <button type="button" className='arrrowdown__image' onClick={handleShow}><img src={arrowdown} alt="arrowdown" /></button>
                  <Accordion label="How do I check my token Balance?" height={setHeight} setheight={setHeightActive}
                >
                      <p>
                          Go to profile and click on “My Account”.there, you will find your token balance and how you can transfer it to yourcrypto wallet.
                      </p>
                  </Accordion>
                  <Accordion label="How do I retrieve my password?" height={setHeight} setheight={setHeightActive}
                   >
                       <p>
                          Go to settings and click on “Forgot Password”.there, you will be directed to enter your registered email address and a new password wil be sent to you.
                      </p>
                  </Accordion>
                  
                  {showItems && <><Accordion label="How to check my token balance?" open={isOpen2} setopen={setIsOpen2} height={setHeight} setheight={setHeightActive}
                   >
                       <p>
                          Go to settings and click on “Forgot Password”.there, you will be directed to enter your registered email address and a new password wil be sent to you.
                      </p>
                 </Accordion>
                  <Accordion label="Where should I paste my wallet?" open={isOpen3} setopen={setIsOpen3} height={setHeight} setheight={setHeightActive}
                   >
                       <p>
                          Go to settings and click on “Forgot Password”.there, you will be directed to enter your registered email address and a new password wil be sent to you.
                      </p>
                  </Accordion></>}
              </div>
          </div>
      </div>
  )
}

export default Index;