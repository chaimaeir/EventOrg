
import React from 'react';
import AdminSidebar from './components/dashboards/admin/AdminSidebar';
import Navbar from './components/dashboards/admin/Navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboards/admin/Dashboard';
import Providers from './components/dashboards/admin/Providers';
import Customers from './components/dashboards/admin/Customers';
import EventsAdmin from './components/dashboards/admin/EventsAdmin';
import Payment from './components/dashboards/admin/Payment';
import './app.css'
import About from "./pages/About";
import "./app.css";

import Events from "./pages/Events";
import Filter from "./components/shared/Filter";
import Home from "./pages/Home";
const App = ()=>{
  return (
    <>
  
  <BrowserRouter>
      <Routes>
        
        {/* admin routes */}
        
        <Route path='/Admin/' element={<AdminSidebar/>}/>
        
          <Route path="/Admin/Dashboard" element={<Dashboard />} />
          <Route path="/Admin/Customers" element={<Customers />} />
          <Route path="/Admin/Providers" element={<Providers />} />
          <Route path="/Admin/EventsAdmin" element={<EventsAdmin />} />
          <Route path="/Admin/Payment" element={<Payment />} />
          <Route path='/Admin/' element={<Navbar/>}/>
      
           
        <Route path="/about" element={<About />}/>

        <Route path="/events" element={<Events />}/>

        <Route path="/filter" element={<Filter />}/>

        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>   
  
  </>





  )
}
export default App;

