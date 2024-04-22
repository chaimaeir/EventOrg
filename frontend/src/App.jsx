import React from 'react';
import AdminSidebar from './components/dashboards/admin/AdminSidebar';
import Navbar from './components/dashboards/admin/Navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboards/admin/Dashboard';
import Providers from './components/dashboards/admin/Providers';
import Customers from './components/dashboards/admin/Customers';
import Events from './components/dashboards/admin/Events';
import Payment from './components/dashboards/admin/Payment';
import './app.css'
const App = ()=>{
  return (
    <>
  
  <BrowserRouter>
      <Routes>
        
        {/* admin routes */}
        
        <Route path='/' element={<AdminSidebar/>}/>
        
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Providers" element={<Providers />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path='/' element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>   
  
  </>





  )
}
export default App;