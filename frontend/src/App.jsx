
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
import About from "./components/pages/About";
import "./app.css";
import DashboardLayout from "./layouts/dashboard";
import Events from "./components/pages/Events";
import Filter from "./components/shared/Filter";
import Home from "./components/pages/Home";
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
          <Route path="/Admin/Events" element={<Events />} />
          <Route path="/Admin/Payment" element={<Payment />} />
          <Route path='/Admin/' element={<Navbar/>}/>
           
        <Route path="/about" element={<About />}></Route>

        <Route path="/events" element={<Events />}></Route>

        <Route path="/filter" element={<Filter />}></Route>

        <Route path="/" element={<Home />}></Route> 
      </Routes>
    </BrowserRouter>   
  
  </>





  )
}
export default App;

