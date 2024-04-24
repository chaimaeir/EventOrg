import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function Dashboard() {
  return (
    <div className='flex '>
    
    <Sidebar></Sidebar>
    <Navbar></Navbar>
    </div>
  )
}

export default Dashboard