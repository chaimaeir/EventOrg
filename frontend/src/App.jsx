import React from 'react';
import AdminSidebar from './components/dashboards/admin/AdminSidebar';
import Navbar from './components/dashboards/admin/Navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Providers from './components/dashboards/admin/Providers';
import Customers from './components/dashboards/admin/Customers';
import Chat from './components/dashboards/admin/Chat';
import Payment from './components/dashboards/admin/Payment';
import About from './components/pages/About';

import './app.css'
import DashboardLayout from './layouts/dashboard';
const App = ()=>{
  return (
    <>
  
      <Routes>
        
        {/* admin routes */}
        
         

          <Route path='/about' element={<About/>}>

          </Route>
        
          

      </Routes>
  
  </>





  )
}
export default App;