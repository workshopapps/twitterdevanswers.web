/* eslint-disable react/no-unescaped-entities */
import React ,{ useState } from 'react'
import StyleCSS from './styles.module.css'




function Settings  ()  {
    const[changeSettings,setChangeSettings]= useState("StyleCSS.settings")

    function handleclick(){
        setChangeSettings('StyleCSS.settingshide')
    }

  return (
    <div className={changeSettings}>
        <div className='settings-page-list'>

            <div className={StyleCSS.settingstab}>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0001 20.42L8.48009 13.9C7.71009 13.13 7.71009 11.87 8.48009 11.1L15.0001 4.57996" stroke="#1D1DD8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  
                <h1>Settings</h1>
                    
            </div>

            <div className={StyleCSS.searchinput}>
                <input className={StyleCSS.Reactsearchbar} type="search" placeholder="Search settings"/>
            </div>

            <div className='subtabs'>
                <div className={StyleCSS.accountbuttoncontainer}>
                    <button className={StyleCSS.accountbutton} type='button' onClick={handleclick}>
                        <div className={StyleCSS.subtab} data-expanded="true">
                            <div className='account svg'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2334 16.352C18.0875 16.3375 17.9125 16.3375 17.7521 16.352C14.2813 16.2354 11.525 13.3916 11.525 9.89163C11.525 6.31871 14.4125 3.41663 18 3.41663C21.5729 3.41663 24.475 6.31871 24.475 9.89163C24.4604 13.3916 21.7042 16.2354 18.2334 16.352Z" stroke="#1D1DD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.9417 21.7334C7.41251 24.0959 7.41251 27.9459 10.9417 30.2938C14.9521 32.9771 21.5292 32.9771 25.5396 30.2938C29.0688 27.9313 29.0688 24.0813 25.5396 21.7334C21.5438 19.0646 14.9667 19.0646 10.9417 21.7334Z" stroke="#1D1DD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </div>
                            <div className='text'>
                                <h2>Account</h2>
                                <p>You can amange your account setting at any time. Update your account details,change your username</p>
                            </div>
                            
                        </div>
                    </button>
                </div>
              
               

                <div className={StyleCSS.subtab}>
                        <div className='account svg'>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.9937 16.7166C30.9937 23.8479 25.8167 30.5271 18.7437 32.4812C18.2625 32.6125 17.7375 32.6125 17.2562 32.4812C10.1833 30.5271 5.00623 23.8479 5.00623 16.7166V10.3145C5.00623 9.11871 5.91041 7.76246 7.03333 7.31038L15.1562 3.98542C16.9791 3.24167 19.0354 3.24167 20.8583 3.98542L28.9812 7.31038C30.0896 7.76246 31.0083 9.11871 31.0083 10.3145L30.9937 16.7166Z" stroke="#1D1DD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18 18.7292C19.6109 18.7292 20.9167 17.4234 20.9167 15.8125C20.9167 14.2017 19.6109 12.8959 18 12.8959C16.3892 12.8959 15.0834 14.2017 15.0834 15.8125C15.0834 17.4234 16.3892 18.7292 18 18.7292Z" stroke="#1D1DD8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18 18.7292V23.1042" stroke="#1D1DD8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </div>
                        <div className='text'>
                            <h2>Security</h2>
                            <p>Make the most of your activities,the security feature protect you from malware and dangerous sites</p>
                        </div>
                    
                </div>
                <a href='notifications-page'>
                    <div className={StyleCSS.subtab}>
                            <div className='account svg'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.0291 4.74377C13.202 4.74377 9.27911 8.66669 9.27911 13.4938V17.7084C9.27911 18.5979 8.89994 19.9542 8.44786 20.7125L6.77078 23.4979C5.73536 25.2188 6.44995 27.1292 8.34578 27.7709C14.6312 29.8709 21.4124 29.8709 27.6979 27.7709C29.4624 27.1875 30.2354 25.1021 29.2729 23.4979L27.5958 20.7125C27.1583 19.9542 26.7791 18.5979 26.7791 17.7084V13.4938C26.7791 8.68127 22.8416 4.74377 18.0291 4.74377Z" stroke="#1D1DD8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                <path d="M20.7271 5.16672C20.275 5.03547 19.8084 4.93339 19.3271 4.87506C17.9271 4.70006 16.5855 4.80214 15.3313 5.16672C15.7542 4.08756 16.8042 3.32922 18.0292 3.32922C19.2542 3.32922 20.3042 4.08756 20.7271 5.16672Z" stroke="#1D1DD8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22.4042 28.2958C22.4042 30.702 20.4354 32.6708 18.0292 32.6708C16.8333 32.6708 15.725 32.1749 14.9375 31.3874C14.15 30.5999 13.6542 29.4916 13.6542 28.2958" stroke="#1D1DD8" strokeWidth="2" strokeMiterlimit="10"/>
                                </svg>

                            </div>
                            <div className='text'>
                                <h2>Notification</h2>
                                <p>notification are updates about your activity,You can go to your notification settings to change what you will be notified about and how you're notified</p>
                            </div>
                    </div>
                </a>
                

                <div className={StyleCSS.appearancesubtab}>
                        <div className='account svg'>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.4624 12.2979C29.4624 12.9104 29.4187 13.5084 29.3458 14.0771C28.675 13.7854 27.9458 13.625 27.1729 13.625C25.3937 13.625 23.8187 14.4854 22.8416 15.7979C21.85 14.4854 20.275 13.625 18.4958 13.625C15.5062 13.625 13.0854 16.0604 13.0854 19.0792C13.0854 22.9875 15.1562 25.9771 17.4604 28.0042C17.3875 28.0479 17.3146 28.0626 17.2416 28.0917C16.8041 28.2521 16.075 28.2521 15.6375 28.0917C11.8604 26.7938 3.41663 21.4271 3.41663 12.2979C3.41663 8.27294 6.65411 5.02087 10.6499 5.02087C13.027 5.02087 15.127 6.15836 16.4395 7.92294C17.7666 6.15836 19.8666 5.02087 22.2291 5.02087C26.225 5.02087 29.4624 8.27294 29.4624 12.2979Z" stroke="#1D1DD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M32.5832 19.0792C32.5832 25.9042 26.2687 29.9292 23.4395 30.8917C23.1041 31.0083 22.5645 31.0083 22.2291 30.8917C21.0186 30.4833 19.1666 29.5062 17.4603 28.0041C15.1562 25.9771 13.0853 22.9875 13.0853 19.0792C13.0853 16.0604 15.5061 13.625 18.4957 13.625C20.2749 13.625 21.8499 14.4854 22.8416 15.7979C23.8187 14.4854 25.3937 13.625 27.1728 13.625C27.9457 13.625 28.6749 13.7854 29.3457 14.0771C31.2562 14.9229 32.5832 16.8333 32.5832 19.0792Z" stroke="#1D1DD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </div>
                        <div className='text'>
                            <h2>Appearance</h2>
                            <p>Choose your viewing options,select light to display light mode,select drak to display dark mode</p>
                        </div>
                    
                </div>

            </div>
        </div>
     </div>
  )
}

export default Settings