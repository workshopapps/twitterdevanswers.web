/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Route,Routes,Outlet } from 'react-router-dom';
import Overview from '../AdminOverview';
import styleCSS from './style.module.css'


import Sidebar from '../../components/AdminSidebar/Sidebar'

function Admin() {
  return (
    <div className={styleCSS.page}>
        <Sidebar/>
        <Routes>
            <Route path='/' element={<Overview/>}/>
        </Routes>
       <Outlet/>
    </div>
  )
}

export default Admin