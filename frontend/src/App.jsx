import React from "react";
import AdminSidebar from "./components/dashboards/admin/AdminSidebar";
import Navbar from "./components/dashboards/admin/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboards/admin/Dashboard";
import EventsAdmin from "./components/dashboards/admin/EventsAdmin";
import Providers from "./components/dashboards/admin/Providers";
import Customers from "./components/dashboards/admin/Customers";
import Payment from "./components/dashboards/admin/Payment";
import About from "./Pages/About";
import "./app.css";
import LoginC from "./Pages/auth/LoginRegisterC/Login";
import RegisterC from "./Pages/auth/LoginRegisterC/Register";
import LoginP from "./Pages/auth/LoginRegisterP/Login";
import RegisterP from "./Pages/auth/LoginRegisterP/Register";
import ResetPassword from "./Pages/auth//ResetPassword/index";
import LoginAdminForm from "./Pages/auth/Admin/loginadmin";
import SignUpAs from "./Pages/auth/SignUpAs/index";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import WeddingEventPage from "./Pages/WeddingEventPage";
import Filter from "./Pages/Filter";
import ProviderProfile from "./Pages/ProviderProfile";
import EventForm from './components/shared/EventForm';
import Contact from "./Pages/Contact";

function App() {
  return (
    <>

     
      <BrowserRouter>
        <Routes>
          {/* admin routes */}

          <Route path="/Admin/" element={<AdminSidebar />} />

          <Route path="/Admin/Dashboard" element={<Dashboard />} />
          <Route path="/Admin/Customers" element={<Customers />} />
          <Route path="/Admin/Providers" element={<Providers />} />
          <Route path="/Admin/EventsAdmin" element={<EventsAdmin />} />
          <Route path="/Admin/Payment" element={<Payment />} />
          <Route path='/Admin/' element={<Navbar />} />
          <Route path="/about" element={<About />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/filter" element={<Filter />}/>
          <Route path="/contact" element={<Contact />}/>        
          <Route path="/" element={<Home />}/>
          <Route path="/form" element={<EventForm />}/>
          <Route path="/provider" element={<ProviderProfile />}/>
          <Route path="/weddingevent" element={<WeddingEventPage />}/>
          <Route path="/registerC" element={<RegisterC />} />
          <Route path="/loginC" element={<LoginC />} />
          <Route path="/registerP" element={<RegisterP />} />
          <Route path="/loginP" element={<LoginP />} />
          <Route path="/loginAdmin" element={<LoginAdminForm />} />
          <Route path="/signUpAs" element={<SignUpAs />} />
          <Route path="/resetpassword" element={<ResetPassword />} />


        </Routes>
      </BrowserRouter>

    </>





  )
}

export default App;
