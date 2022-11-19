
import React, { useState } from 'react'
import ReactDOM  from 'react-dom'
import  { BrowserRouter, Routes , Route} from 'react-router-dom';
import PageCSS from './styles.module.css'
import "../src/components/FlagPicker/style.css"
import Settings from './pages/Settings';
import EditAcccount from './components/EditAccount';
import MobileEditAcccount from './pages/Settings/MobileEditAccount';
import SettingHeader from './components/SettingsHeader/SettingHeader';
import CountrySelector from './components/CountrySelector/CountrySelector';
import PhoneSelector from './components/PhoneSelector/phoneSelector';

function Page(){
  return (
    <div className={PageCSS.main}>
        <SettingHeader/>

       <BrowserRouter>
        <Routes>
            <Route path="/" element={

                <div className={PageCSS.flex}>
                    <Settings/>
                    <EditAcccount/>
                </div>
                

            }/>
          <Route path='/edit-account' element={<MobileEditAcccount/>}
          
          />    
        </Routes>    
      </BrowserRouter>

    </div>
   
  )
}

ReactDOM.render(<Page/>,document.getElementById("root"))