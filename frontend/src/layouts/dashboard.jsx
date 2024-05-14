import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/dashboards/provider/Sidebar'
import Navbar from '../components/dashboards/provider/Navbar'

function DashboardLayout() {
  return (
    <div className='flex flex-col h-screen'>
    
      <div className='grid grid-cols-8 bg-yellow-400'>
        <Sidebar />
        <Outlet/>
    </div>
    </div>
  )
}

export default DashboardLayout;
