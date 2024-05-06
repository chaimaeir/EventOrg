import "../src/apptest.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/auth/Login"
import Register from './components/auth/Register';
import RegisterProvider from './components/auth/RegisterProvider'
import Home from "../src/Pages/Home/index";
import LoginAdminForm from "./components/auth/Admin/loginadmin";
//import Welcome from './components/auth/Welcome'

  
  function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerprovider" element={<RegisterProvider />} />
        <Route path="/loginAdmin" element={<LoginAdminForm />} />
        {/* <Route path="/" element={<Welcome />} /> */}
        
      </Routes>
    </BrowserRouter>  
    );
  }
  


export default App
