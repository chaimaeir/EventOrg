import React from 'react'
import AdminSidebar from './AdminSidebar'
import Navbar from './Navbar'


function Dashboard() {
  return (
    <div>
    <div className="flex">
    <AdminSidebar />
    <div className="w-full p-5">
      <Navbar />
  
      </div>
      </div>
      


      </div>
  )
}

export default Dashboard
