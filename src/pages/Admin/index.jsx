/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/AdminSidebar/Sidebar'

function Admin() {
  return (
    <div>
        <Sidebar/>
        <Routes>
            <Route path='/admin/overview' element={
                <Overview/>
            }/>
        </Routes>
    </div>
  )
}

export default Admin