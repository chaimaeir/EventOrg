import React from "react";
import AdminSidebar from "./components/dashboards/admin/AdminSidebar";
import Navbar from "./components/dashboards/admin/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Providers from "./components/dashboards/admin/Providers";
import Customers from "./components/dashboards/admin/Customers";
import Chat from "./components/dashboards/admin/Chat";
import Payment from "./components/dashboards/admin/Payment";
import About from "./components/pages/About";
import "./app.css";
import DashboardLayout from "./layouts/dashboard";
import Events from "./components/pages/Events";
import Filter from "./components/shared/Filter";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        {/* admin routes */}

        <Route path="/about" element={<About />}></Route>

        <Route path="/events" element={<Events />}></Route>

        <Route path="/filter" element={<Filter />}></Route>

        <Route path="/home" element={<Home />}></Route>



      </Routes>
    </>
  );
};
export default App;
